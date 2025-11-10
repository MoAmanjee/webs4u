# Deploy to GitHub - Webs4U Repository

## Steps to Upload to GitHub

### Option 1: Create Repository on GitHub First (Recommended)

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `webs-4u` or `webs4u`
   - Description: "Professional website for Webs4U - Web development services"
   - Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

2. **Connect and push your code:**
   ```bash
   cd /Users/mo.a/amanjee-web-solutions
   git remote add origin https://github.com/YOUR_USERNAME/webs-4u.git
   git branch -M main
   git push -u origin main
   ```

   Replace `YOUR_USERNAME` with your actual GitHub username.

### Option 2: Using GitHub CLI (if installed)

```bash
cd /Users/mo.a/amanjee-web-solutions
gh repo create webs-4u --public --source=. --remote=origin --push
```

### Option 3: If Repository Already Exists

If you already have a `webs-4u` repository on GitHub:

```bash
cd /Users/mo.a/amanjee-web-solutions
git remote add origin https://github.com/YOUR_USERNAME/webs-4u.git
git branch -M main
git push -u origin main
```

## After Pushing

Once uploaded, you can:
- View your repository at: `https://github.com/YOUR_USERNAME/webs-4u`
- Deploy to Vercel for free hosting
- Set up GitHub Pages (if needed)

## Quick Deploy Commands

```bash
# Navigate to project
cd /Users/mo.a/amanjee-web-solutions

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/webs-4u.git

# Push to GitHub
git push -u origin main
```

