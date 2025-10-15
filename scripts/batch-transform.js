const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
const fetch = require('node-fetch');

// Configuration
const INPUT_FOLDER = 'C:\\Users\\Gabe\\Desktop\\PLACEHOLDERS';
const OUTPUT_FOLDER = path.join(process.cwd(), 'public', 'placeholder-images');
const API_URL = 'http://localhost:3000/api/transform';

// Create output folder if it doesn't exist
if (!fs.existsSync(OUTPUT_FOLDER)) {
  fs.mkdirSync(OUTPUT_FOLDER, { recursive: true });
}

async function transformImage(inputPath, filename) {
  console.log(`\n🔄 Processing: ${filename}`);
  
  try {
    // Read the image file
    const imageBuffer = fs.readFileSync(inputPath);
    
    // Create form data
    const formData = new FormData();
    formData.append('image', imageBuffer, {
      filename: filename,
      contentType: `image/${path.extname(filename).substring(1)}`
    });

    // Call the API
    console.log(`   ⏳ Calling transformation API...`);
    const response = await fetch(API_URL, {
      method: 'POST',
      body: formData,
      headers: formData.getHeaders(),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API error (${response.status}): ${errorText}`);
    }

    const result = await response.json();
    console.log(`   ✅ Transformation complete!`);

    // Handle the response - could be URL or base64
    const imageData = result.transformedImage;
    
    if (imageData.startsWith('data:image')) {
      // It's a base64 data URL
      console.log(`   💾 Saving base64 image...`);
      const base64Data = imageData.replace(/^data:image\/\w+;base64,/, '');
      const buffer = Buffer.from(base64Data, 'base64');
      
      const outputFilename = `cz-${path.parse(filename).name}.png`;
      const outputPath = path.join(OUTPUT_FOLDER, outputFilename);
      
      fs.writeFileSync(outputPath, buffer);
      console.log(`   ✨ Saved: ${outputFilename}`);
      return outputFilename;
    } else if (imageData.startsWith('http')) {
      // It's a URL - download it
      console.log(`   💾 Downloading from URL...`);
      const imageResponse = await fetch(imageData);
      const buffer = await imageResponse.buffer();
      
      const outputFilename = `cz-${path.parse(filename).name}.png`;
      const outputPath = path.join(OUTPUT_FOLDER, outputFilename);
      
      fs.writeFileSync(outputPath, buffer);
      console.log(`   ✨ Saved: ${outputFilename}`);
      return outputFilename;
    }
  } catch (error) {
    console.error(`   ❌ Error processing ${filename}:`, error.message);
    return null;
  }
}

async function processAllImages() {
  console.log('🚀 Starting batch transformation...');
  console.log(`📁 Input folder: ${INPUT_FOLDER}`);
  console.log(`📁 Output folder: ${OUTPUT_FOLDER}`);
  
  // Check if input folder exists
  if (!fs.existsSync(INPUT_FOLDER)) {
    console.error(`❌ Input folder not found: ${INPUT_FOLDER}`);
    process.exit(1);
  }

  // Get all image files
  const files = fs.readdirSync(INPUT_FOLDER);
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
  });

  if (imageFiles.length === 0) {
    console.log('⚠️  No image files found in the folder');
    return;
  }

  console.log(`\n📊 Found ${imageFiles.length} images to process\n`);
  console.log('=' .repeat(60));

  const results = {
    successful: [],
    failed: []
  };

  // Process each image
  for (let i = 0; i < imageFiles.length; i++) {
    const filename = imageFiles[i];
    const inputPath = path.join(INPUT_FOLDER, filename);
    
    console.log(`\n[${i + 1}/${imageFiles.length}]`);
    
    const outputFilename = await transformImage(inputPath, filename);
    
    if (outputFilename) {
      results.successful.push({ input: filename, output: outputFilename });
    } else {
      results.failed.push(filename);
    }

    // Add a small delay between requests to avoid overwhelming the API
    if (i < imageFiles.length - 1) {
      console.log(`   ⏸️  Waiting 2 seconds before next image...`);
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('\n📈 BATCH TRANSFORMATION COMPLETE!\n');
  console.log(`✅ Successful: ${results.successful.length}`);
  console.log(`❌ Failed: ${results.failed.length}`);
  
  if (results.successful.length > 0) {
    console.log('\n✨ Successfully transformed:');
    results.successful.forEach(({ input, output }) => {
      console.log(`   ${input} → ${output}`);
    });
  }
  
  if (results.failed.length > 0) {
    console.log('\n❌ Failed to transform:');
    results.failed.forEach(filename => {
      console.log(`   ${filename}`);
    });
  }

  console.log(`\n💾 Output location: ${OUTPUT_FOLDER}`);
}

// Run the batch process
processAllImages().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});

