# Upload to GitHub - Step by Step Guide

## Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Fill in the details:
   - **Repository name**: `medassist-ai` (or your preferred name)
   - **Description**: "AI-Powered Hospital Receptionist System"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **"Create repository"**

## Step 2: Copy Your Repository URL

After creating the repository, GitHub will show you a URL like:
```
https://github.com/YOUR_USERNAME/medassist-ai.git
```

Copy this URL - you'll need it in the next step.

## Step 3: Connect and Push to GitHub

Run these commands in your terminal (replace YOUR_USERNAME and medassist-ai with your actual values):

```bash
cd "c:\Users\HP\Downloads\Medassist AI"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/medassist-ai.git

# Push to GitHub
git push -u origin main
```

## Alternative: If you already have a repository URL

If you already created the repository, just run:

```bash
cd "c:\Users\HP\Downloads\Medassist AI"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## What's Already Done ✅

- ✅ Git repository initialized
- ✅ All files committed
- ✅ Branch set to `main`
- ✅ Ready to push

## After Pushing

Once pushed, you can:
1. View your code on GitHub
2. Deploy to Vercel by connecting your GitHub repository
3. Share the repository with others
