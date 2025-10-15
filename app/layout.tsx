import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BeCZ - Transform Your PFP into CZ Style",
  description: "Upload your photo and let AI transform it into a CZ-inspired profile picture. Powered by advanced AI, completely free.",
  keywords: ["CZ", "profile picture", "AI transformation", "PFP generator", "Binance", "crypto"],
  authors: [{ name: "BeCZ" }],
  openGraph: {
    title: "BeCZ - Transform Your PFP into CZ Style",
    description: "Upload your photo and let AI transform it into a CZ-inspired profile picture. Powered by advanced AI, completely free.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
