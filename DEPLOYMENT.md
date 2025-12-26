# Deploying MedAssist AI to Vercel

## Option 1: Deploy via Vercel CLI (Recommended)

### Step 1: Install Vercel CLI (if not installed)
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Yes**
- Which scope? Select your account
- Link to existing project? **No** (for first deployment)
- Project name? **medassist-ai** (or your preferred name)
- Directory? **./** (current directory)
- Override settings? **No**

### Step 4: Deploy to Production
```bash
vercel --prod
```

---

## Option 2: Deploy via GitHub + Vercel Dashboard

### Step 1: Push to GitHub
```bash
# Add all files
git add .

# Commit
git commit -m "Initial commit - MedAssist AI landing page"

# Add remote (replace with your GitHub repo URL)
git remote add origin https://github.com/YOUR_USERNAME/medassist-ai.git

# Push
git push -u origin main
```

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click **"Deploy"**

---

## Option 3: Deploy via Vercel Dashboard (Direct Upload)

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login
3. Click **"Add New Project"**
4. Click **"Browse"** and select your project folder
5. Vercel will auto-detect Next.js
6. Click **"Deploy"**

---

## Build Configuration

Your project is already configured for Vercel:
- ✅ Next.js 14 (App Router)
- ✅ TypeScript
- ✅ Build command: `npm run build`
- ✅ Output directory: `.next` (auto-detected)

## Environment Variables

If you need environment variables later:
1. Go to your project on Vercel
2. Settings → Environment Variables
3. Add your variables

## Custom Domain

After deployment:
1. Go to your project on Vercel
2. Settings → Domains
3. Add your custom domain

---

## Troubleshooting

If build fails:
- Check that all dependencies are in `package.json`
- Ensure `next.config.js` is correct
- Check build logs in Vercel dashboard
