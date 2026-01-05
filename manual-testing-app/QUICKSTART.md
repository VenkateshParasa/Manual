# Quick Start Guide

Get the Manual Testing Mastery web application up and running in minutes!

## 🚀 Quick Setup (3 Steps)

### Step 1: Install Dependencies

```bash
cd manual-testing-app
npm install
```

This will install all required packages including React, Vite, Tailwind CSS, and other dependencies.

### Step 2: Copy Content Files

The markdown files should already be in the `public/` directory. If not, run:

```bash
cp ../*.md public/
```

### Step 3: Start Development Server

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`

## 🎉 That's It!

You should now see the Manual Testing Mastery application running with:
- ✅ All 21 days of course content
- ✅ Searchable content
- ✅ Progress tracking
- ✅ Responsive design
- ✅ Accessible navigation

## 📝 Available Commands

```bash
# Development
npm run dev          # Start dev server with hot reload

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Testing
npm test            # Run tests
npm test -- --watch # Run tests in watch mode

# Code Quality
npm run lint        # Run ESLint
```

## 🔧 Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically try the next available port.

### Markdown Files Not Loading

Ensure all `.md` files are in the `public/` directory:

```bash
ls public/*.md
```

You should see files like:
- Week1_Day1_Manual_Testing_Fundamentals_SDLC.md
- Week1_Day2_Testing_Levels_Types.md
- etc.

### Search Not Working

Search initializes on app load. Check the browser console for any errors. The search index builds from the markdown files in the `public/` directory.

### Styles Not Applying

If Tailwind styles aren't working:

1. Ensure `tailwindcss` and `@tailwindcss/typography` are installed
2. Check that `postcss.config.js` exists
3. Clear browser cache and reload

## 📱 Testing on Mobile

### Local Network Access

To test on mobile devices on your local network:

1. Find your computer's IP address:
   ```bash
   # macOS/Linux
   ifconfig | grep "inet "
   
   # Windows
   ipconfig
   ```

2. Start the dev server with host flag:
   ```bash
   npm run dev -- --host
   ```

3. Access from mobile device:
   ```
   http://YOUR_IP_ADDRESS:5173
   ```

## 🎨 Customization

### Change Theme Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Change these values
        500: '#your-color',
        600: '#your-color',
        // ...
      }
    }
  }
}
```

### Modify Course Structure

Edit `src/utils/contentStructure.js` to add/remove days or weeks.

## 📚 Next Steps

1. **Explore the App**: Navigate through different days
2. **Try Search**: Search for topics like "test cases" or "SDLC"
3. **Track Progress**: Mark days as complete
4. **Test Responsive**: Resize browser or test on mobile
5. **Check Accessibility**: Try keyboard navigation (Tab, Enter, Arrows)

## 🆘 Need Help?

- Check the main [README.md](./README.md) for detailed documentation
- Review component files in `src/components/`
- Check browser console for errors
- Ensure Node.js version is 18.x or higher

## 🎓 Learning Tips

- Start with Day 1 and progress sequentially
- Use the search feature to find specific topics
- Mark days complete to track your progress
- Use the Table of Contents for quick navigation within lessons
- The sidebar shows your progress for each week

---

**Happy Learning! 🚀**

Built with ❤️ using React, Vite, and Tailwind CSS