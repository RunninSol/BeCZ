import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";

// Master prompt for CZ transformation
const MASTER_PROMPT = `Transform the subject in the second image to look like they're impersonating the person in the first reference image. 

Copy these features from the reference (first image):
- The glasses style
- The facial features (eyes, hairline, smile)
- The exact hand gesture shown in the reference image

If the second image is a simple object, drawing, logo, or non-human subject, get creative! Turn it into a character or scene that incorporates all the features above in a fun, imaginative way.

Make it look natural and fun, like a playful cosplay or impersonation.`;

export async function POST(request: NextRequest) {
  try {
    console.log("[Transform API] Starting transformation request...");
    
    const formData = await request.formData();
    const image = formData.get("image") as File;

    if (!image) {
      console.error("[Transform API] No image provided");
      return NextResponse.json(
        { error: "No image provided" },
        { status: 400 }
      );
    }

    console.log("[Transform API] Image received:", {
      name: image.name,
      type: image.type,
      size: image.size
    });

    // Validate file type
    const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (!validTypes.includes(image.type)) {
      console.error("[Transform API] Invalid file type:", image.type);
      return NextResponse.json(
        { error: "Invalid file type" },
        { status: 400 }
      );
    }

    // Validate file size (Gemini accepts up to 20MB)
    if (image.size > 20 * 1024 * 1024) {
      console.error("[Transform API] File size too large:", image.size);
      return NextResponse.json(
        { error: "File size exceeds 20MB limit" },
        { status: 400 }
      );
    }

    const geminiApiKey = process.env.GEMINI_API_KEY;

    if (!geminiApiKey) {
      console.error("[Transform API] Gemini API key not configured");
      return NextResponse.json(
        { error: "API configuration missing. Please contact support." },
        { status: 500 }
      );
    }

    console.log("[Transform API] Gemini API key found");

    // Initialize Gemini client
    const genAI = new GoogleGenerativeAI(geminiApiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-image" });

    console.log("[Transform API] Converting user image to base64...");
    const userImageBytes = await image.arrayBuffer();
    const userImageBase64 = Buffer.from(userImageBytes).toString("base64");
    console.log("[Transform API] User image converted");

    console.log("[Transform API] Reading reference image...");
    const referencePath = path.join(process.cwd(), "public", "Screenshot 2025-10-14 002922.png");
    const referenceBuffer = fs.readFileSync(referencePath);
    const referenceBase64 = referenceBuffer.toString("base64");
    console.log("[Transform API] Reference image loaded");

    console.log("[Transform API] Calling Gemini API...");
    // Create content array with text prompt and both images
    // Format per docs: https://ai.google.dev/gemini-api/docs/image-generation#javascript
    const prompt = [
      { text: MASTER_PROMPT },
      {
        inlineData: {
          mimeType: "image/png",
          data: referenceBase64
        }
      },
      {
        inlineData: {
          mimeType: image.type,
          data: userImageBase64
        }
      }
    ];

    // Generate content using the model (contents can be array of parts)
    const result = await model.generateContent(prompt);

    console.log("[Transform API] Gemini response received");
    
    // Extract the generated image from response
    let generatedImageBase64: string | null = null;
    
    // Access response parts directly from result
    for (const part of result.response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        generatedImageBase64 = part.inlineData.data;
        break;
      }
    }

    if (!generatedImageBase64) {
      console.error("[Transform API] No image data in response");
      return NextResponse.json(
        { error: "Failed to transform image" },
        { status: 500 }
      );
    }

    // Convert to data URL
    const imageDataUrl = "data:image/png;base64," + generatedImageBase64;

    console.log("[Transform API] Success! Image ready");
    return NextResponse.json({
      transformedImage: imageDataUrl,
      message: "Image transformed successfully",
    });
  } catch (error: any) {
    console.error("[Transform API] ❌ ERROR:", error);
    console.error("[Transform API] Error message:", error?.message);
    console.error("[Transform API] Error response:", error?.response?.data);
    console.error("[Transform API] Full error:", JSON.stringify(error, null, 2));
    
    return NextResponse.json(
      { 
        error: error?.message || "An error occurred during transformation",
        details: error?.response?.data
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

