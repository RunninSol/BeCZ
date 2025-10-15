# BeCZ - CZ Style PFP Generator

Transform your profile pictures into CZ-inspired images using AI. Built with Next.js 14, Tailwind CSS, and Google Gemini API.

## Features

- 🎨 **AI-Powered Transformations** - Advanced AI to create CZ-style profile pictures
- ⚡ **Instant Processing** - Get your transformed image in seconds
- 🆓 **100% Free** - No hidden fees, no subscriptions, unlimited transformations
- 🔒 **Privacy First** - Your images are processed securely and not stored
- 📱 **Responsive Design** - Beautiful UI that works on all devices
- 🎯 **Easy to Use** - Simple drag-and-drop interface

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with Binance color theme
- **UI Components**: React with TypeScript
- **3D Graphics**: Three.js with GSAP for animated WebGL backgrounds
- **File Upload**: React Dropzone
- **API**: Google Gemini 2.5 Flash Image (Nano Banana)
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Google Gemini API key (for image transformation) - Get one free at [https://ai.google.dev/gemini-api/docs/api-key](https://ai.google.dev/gemini-api/docs/api-key)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd BeCZ
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Get your free Gemini API key at: https://ai.google.dev/gemini-api/docs/api-key

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
BeCZ/
├── app/
│   ├── api/
│   │   └── transform/
│   │       └── route.ts          # API endpoint for image transformation
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.tsx                  # Main landing page
│   └── globals.css               # Global styles with Tailwind
├── components/
│   ├── Hero.tsx                  # Hero section with animated background
│   ├── Carousel.tsx              # Swiper carousel for examples
│   ├── HowItWorks.tsx            # Step-by-step explanation
│   ├── UploadSection.tsx         # File upload and transformation UI
│   ├── PricingBadge.tsx          # Free service features
│   └── Footer.tsx                # Footer with links
├── lib/
│   └── utils.ts                  # Utility functions
├── public/                       # Static assets
├── tailwind.config.ts            # Tailwind configuration (Binance theme)
└── package.json
```

## Customization

### Colors
The project uses Binance's classic color scheme. You can customize colors in `tailwind.config.ts`:

```typescript
colors: {
  binance: {
    primary: "#F0B90B",      // Binance yellow/gold
    gold: "#F0B90B",
    dark: "#0B0E11",         // Primary background
    darker: "#181A20",       // Secondary background
    gray: "#2B3139",
    lightgray: "#848E9C",
  },
}
```

### API Integration
The image transformation logic is in `app/api/transform/route.ts`. The app uses:

1. **Google Gemini 2.5 Flash Image** (aka Nano Banana) for image generation
2. Multi-image input support (reference image + user image)
3. Advanced prompt engineering for consistent results
4. Reference image: `public/Screenshot 2025-10-14 002922.png`

To customize:
1. Add your Gemini API key to `.env.local`
2. Modify the `MASTER_PROMPT` in `app/api/transform/route.ts`
3. Replace the reference image with your own target style

## Deployment

### Deploy to Railway (Recommended)

1. Push your code to GitHub
2. Create a new project on [Railway](https://railway.app)
3. Connect your GitHub repository
4. Add environment variable:
   - `GEMINI_API_KEY`: Your Google Gemini API key
5. Railway will automatically detect Next.js and deploy!

The app will be available at your Railway-provided URL.

### Deploy to Vercel

1. Push your code to GitHub
2. Import the project to [Vercel](https://vercel.com)
3. Add your `GEMINI_API_KEY` to the environment variables in Vercel
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Render
- Digital Ocean App Platform
- Self-hosted with Node.js

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Your Google Gemini API key for image transformation | Yes |

## Development Notes

- Uses Google Gemini 2.5 Flash Image (Nano Banana) for multi-modal image generation
- WebGL animated backgrounds using Three.js, GSAP, and Simplex Noise
- Images are processed client-side for preview, then sent to API for transformation
- No images are permanently stored - all processing is ephemeral
- Batch transformation script available: `npm run batch-transform`

## Performance

- **Lighthouse Score**: Optimized for 90+ scores across all metrics
- **Bundle Size**: Minimized with Next.js automatic optimization
- **Image Optimization**: Next.js Image component for optimal loading
- **Code Splitting**: Automatic with Next.js App Router

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

Made with ❤️ for the crypto community
