# Railway Deployment Guide

## Prerequisites

- A GitHub account with your code pushed to a repository
- A [Railway](https://railway.app) account (sign up with GitHub)
- A Google Gemini API key ([Get one here](https://ai.google.dev/gemini-api/docs/api-key))

## Step-by-Step Deployment

### 1. Push to GitHub

```bash
git add .
git commit -m "Prepare for Railway deployment"
git push origin main
```

### 2. Create Railway Project

1. Go to [Railway Dashboard](https://railway.app/dashboard)
2. Click **"New Project"**
3. Select **"Deploy from GitHub repo"**
4. Choose your repository (`BeCZ`)
5. Click **"Deploy Now"**

### 3. Configure Environment Variables

1. In your Railway project, go to the **"Variables"** tab
2. Add the following variable:
   - **Key**: `GEMINI_API_KEY`
   - **Value**: Your Google Gemini API key

### 4. Configure Settings (Optional)

Railway auto-detects Next.js, but you can verify:

1. Go to **"Settings"** tab
2. Under **"Build & Deploy"**:
   - Build Command: `npm run build` (auto-detected)
   - Start Command: `npm start` (auto-detected)

### 5. Deploy!

Railway will automatically:
- Install dependencies (`npm install`)
- Build your Next.js app (`npm run build`)
- Start the production server (`npm start`)

Your app will be live at: `https://your-project.up.railway.app`

## Custom Domain (Optional)

1. Go to **"Settings"** → **"Domains"**
2. Click **"Generate Domain"** or **"Custom Domain"**
3. Follow instructions to configure your DNS

## Monitoring

- View logs in the **"Deployments"** tab
- Check resource usage in **"Metrics"**
- Set up alerts in **"Settings"**

## Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `GEMINI_API_KEY` | Yes | Your Google Gemini API key for image generation |
| `NODE_ENV` | Auto | Set to `production` by Railway |
| `PORT` | Auto | Set automatically by Railway |

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Verify Node.js version compatibility (18+)
- Check build logs for specific errors

### API Errors
- Verify `GEMINI_API_KEY` is set correctly
- Check Gemini API quota limits
- Review API logs in Railway dashboard

### Performance Issues
- Consider upgrading your Railway plan
- Check for rate limiting on Gemini API
- Monitor memory usage in Metrics

## Updating Your Deployment

Simply push to your GitHub repository:

```bash
git add .
git commit -m "Update something"
git push origin main
```

Railway will automatically detect changes and redeploy!

## Rollback

If something goes wrong:

1. Go to **"Deployments"** tab
2. Find a previous successful deployment
3. Click **"⋮"** → **"Redeploy"**

## Costs

Railway offers:
- **$5 free credit** per month (hobby plan)
- **Pay-as-you-go** after free tier
- Estimated cost: ~$5-20/month for moderate traffic

Monitor your usage in the **"Usage"** tab.

---

Need help? Check [Railway Docs](https://docs.railway.app) or join their [Discord](https://discord.gg/railway)

