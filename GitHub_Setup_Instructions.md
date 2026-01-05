# GitHub Repository Setup & Push Instructions

## Option 1: Using GitHub CLI (Recommended - Fastest)

### Step 1: Install GitHub CLI (if not installed)
```bash
# For macOS
brew install gh
```

### Step 2: Authenticate with GitHub
```bash
gh auth login
# Follow the prompts to authenticate
```

### Step 3: Create Repository and Push
```bash
# Navigate to your project directory (you're already there)
cd /Users/venkateshparasa/Documents/Manual

# Initialize git (if not done)
git init

# Add files
git add Manual_Testing_3Week_Learning_Plan.md

# Commit
git commit -m "Add comprehensive 3-week manual testing learning plan"

# Create GitHub repository and push (all in one command!)
gh repo create manual-testing-learning-plan --public --source=. --push

# Or for private repository:
# gh repo create manual-testing-learning-plan --private --source=. --push
```

---

## Option 2: Using GitHub Web + Git Commands

### Step 1: Create Repository on GitHub.com
1. Go to https://github.com/new
2. Repository name: `manual-testing-learning-plan`
3. Description: "Comprehensive 3-week manual testing curriculum"
4. Choose Public or Private
5. **DO NOT** check "Initialize with README"
6. Click "Create repository"

### Step 2: Push Your Code
After creating the repo, GitHub will show you commands. Use these:

```bash
# Navigate to your project directory
cd /Users/venkateshparasa/Documents/Manual

# Initialize git (if not done)
git init

# Add files
git add Manual_Testing_3Week_Learning_Plan.md

# Commit
git commit -m "Add comprehensive 3-week manual testing learning plan"

# Add remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/manual-testing-learning-plan.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Option 3: Complete Git Commands (Ready to Copy-Paste)

```bash
# Step 1: Initialize and commit locally
git init
git add Manual_Testing_3Week_Learning_Plan.md
git commit -m "Add comprehensive 3-week manual testing learning plan"

# Step 2: After creating repo on GitHub, add remote and push
# Replace YOUR-USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR-USERNAME/manual-testing-learning-plan.git
git branch -M main
git push -u origin main
```

---

## Troubleshooting

### If you get authentication errors:
```bash
# Use personal access token or SSH
# For HTTPS with token:
git remote set-url origin https://YOUR-TOKEN@github.com/YOUR-USERNAME/manual-testing-learning-plan.git

# Or switch to SSH:
git remote set-url origin git@github.com:YOUR-USERNAME/manual-testing-learning-plan.git
```

### If you need to check your current setup:
```bash
git status
git remote -v
```

### If you need to start over:
```bash
rm -rf .git
git init
# Then follow steps again
```

---

## Quick Reference

**Check if GitHub CLI is installed:**
```bash
gh --version
```

**Check if Git is configured:**
```bash
git config --global user.name
git config --global user.email
```

**Configure Git (if needed):**
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

## What Each Command Does

- `git init` - Initializes a new Git repository
- `git add` - Stages files for commit
- `git commit -m "message"` - Saves changes with a message
- `git remote add origin URL` - Links local repo to GitHub
- `git branch -M main` - Renames branch to 'main'
- `git push -u origin main` - Pushes code to GitHub

---

**Choose the option that works best for you and let me know if you need any help!**