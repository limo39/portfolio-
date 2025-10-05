# Deployment Guide

## Vercel Deployment with Node.js 22.x

### Method 1: Automatic Detection (Recommended)

1. **Push to GitHub**: Make sure your code is pushed to a GitHub repository

2. **Connect to Vercel**: 
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect it's a Next.js project

3. **Node.js Version**: 
   - Vercel will automatically use Node.js 22.x based on the `engines` field in `package.json`
   - No additional configuration needed

4. **Deploy**: Click deploy and Vercel will handle the rest

### Method 2: Manual Configuration (If needed)

If Vercel doesn't automatically detect Node.js 22.x:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **General**
3. Scroll down to **Node.js Version**
4. Select **22.x** from the dropdown
5. Redeploy your project

### Method 3: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from your project directory
vercel

# Follow the prompts to configure your deployment
```

### Environment Variables (If needed)

If your project uses environment variables:

1. Go to **Settings** → **Environment Variables** in your Vercel dashboard
2. Add your variables for Production, Preview, and Development environments
3. Redeploy if needed

### Custom Domain (Optional)

1. Go to **Settings** → **Domains**
2. Add your custom domain
3. Configure DNS settings as instructed by Vercel

## Troubleshooting

### Node.js Version Issues

If you get Node.js version errors:

1. Check that `package.json` has `"engines": { "node": "22.x" }`
2. Manually set Node.js version in Vercel project settings
3. Clear build cache and redeploy

### Build Errors

If the build fails:

1. Check that the project builds locally: `npm run build`
2. Ensure all dependencies are in `package.json`
3. Check Vercel build logs for specific errors

### Performance Optimization

The project is already optimized with:
- ✅ Static generation for all pages
- ✅ Image optimization with WebP/AVIF
- ✅ Package import optimization
- ✅ Modern JavaScript (ES2022)
- ✅ Tailwind CSS purging

## Alternative Deployment Platforms

### Netlify
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Set Node.js version to 22.x in build settings

### Railway
1. Connect GitHub repository
2. Railway will auto-detect Next.js
3. Ensure Node.js 22.x is selected

### DigitalOcean App Platform
1. Connect GitHub repository
2. Select Node.js 22.x runtime
3. Set build command: `npm run build`
4. Set run command: `npm start`