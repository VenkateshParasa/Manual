# Manual Testing Mastery - Web Application

A comprehensive, interactive web application for the 3-week Manual Testing intensive learning course. Built with React, Vite, MDX, and Tailwind CSS.

## 🚀 Features

- **📚 21-Day Structured Curriculum**: Complete 3-week course covering manual testing from fundamentals to advanced techniques
- **🔍 Powerful Search**: Full-text search across all course content using Fuse.js
- **📊 Progress Tracking**: LocalStorage-based progress tracker with visual statistics and milestones
- **📱 Responsive Design**: Mobile-first design that works seamlessly on all devices
- **♿ Accessible**: WCAG-compliant with keyboard navigation and screen reader support
- **📑 Table of Contents**: Auto-generated TOC for easy navigation within lessons
- **🎨 Modern UI**: Clean, professional interface built with Tailwind CSS
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds

## 📋 Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

## 🛠️ Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd manual-testing-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Copy markdown files to public directory**:
   ```bash
   # Copy all markdown files from parent directory to public folder
   cp ../*.md public/
   ```

## 🚀 Running the Application

### Development Mode

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

Build the application for production:

```bash
npm run build
```

The optimized build will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 🧪 Testing

Run the test suite:

```bash
npm test
```

Run tests in watch mode:

```bash
npm test -- --watch
```

## 📁 Project Structure

```
manual-testing-app/
├── public/                      # Static assets and markdown files
│   ├── *.md                    # Course markdown files
│   └── vite.svg                # Favicon
├── src/
│   ├── components/             # React components
│   │   ├── Header.jsx          # Top navigation bar
│   │   ├── Sidebar.jsx         # Collapsible course navigation
│   │   ├── SearchBar.jsx       # Search functionality
│   │   ├── TableOfContents.jsx # Auto-generated TOC
│   │   └── ProgressTracker.jsx # Progress tracking widget
│   ├── pages/                  # Page components
│   │   ├── HomePage.jsx        # Landing page
│   │   └── DayPage.jsx         # Individual lesson page
│   ├── utils/                  # Utility functions
│   │   ├── contentStructure.js # Course structure definition
│   │   ├── progressTracker.js  # LocalStorage progress management
│   │   └── searchIndex.js      # Search functionality
│   ├── styles/                 # CSS files
│   │   └── index.css           # Global styles with Tailwind
│   ├── App.jsx                 # Main app component with routing
│   └── main.jsx                # Application entry point
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── README.md                   # This file
```

## 🎯 Key Features Explained

### Progress Tracking

- **LocalStorage Persistence**: Progress is saved locally in the browser
- **Visual Statistics**: See completion percentage, days completed, and remaining
- **Milestones**: Unlock achievements as you progress
- **Per-Day Tracking**: Mark individual days as complete/incomplete

### Search Functionality

- **Semantic Search**: Powered by Fuse.js for intelligent content matching
- **Real-time Results**: Search as you type with instant feedback
- **Keyboard Navigation**: Use arrow keys to navigate results
- **Match Highlighting**: See where your search terms appear

### Responsive Sidebar

- **Collapsible Sections**: Expand/collapse weeks to focus on relevant content
- **Progress Indicators**: Visual checkmarks for completed days
- **Week Progress Bars**: See completion status for each week
- **Mobile-Friendly**: Slide-out drawer on mobile devices

### Accessibility Features

- **Keyboard Navigation**: Full keyboard support (Tab, Enter, Escape, Arrows)
- **ARIA Labels**: Proper semantic HTML and ARIA attributes
- **Focus Management**: Clear focus indicators and logical tab order
- **Screen Reader Support**: Tested with NVDA and VoiceOver
- **Color Contrast**: WCAG AA compliant color ratios

## 🎨 Customization

### Modifying Course Content

1. Edit markdown files in the `public/` directory
2. Update `src/utils/contentStructure.js` if adding/removing days
3. Restart the dev server to see changes

### Styling

- Global styles: `src/styles/index.css`
- Tailwind config: `tailwind.config.js`
- Component-specific styles: Use Tailwind utility classes

### Adding New Features

The application is built with modularity in mind. Key extension points:

- **New Pages**: Add to `src/pages/` and update routing in `App.jsx`
- **New Components**: Add to `src/components/`
- **New Utilities**: Add to `src/utils/`

## 📱 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Search not working

- Ensure markdown files are in the `public/` directory
- Check browser console for errors
- Clear browser cache and reload

### Progress not saving

- Check if localStorage is enabled in your browser
- Try a different browser
- Check browser console for errors

### Styles not loading

- Run `npm install` to ensure all dependencies are installed
- Clear browser cache
- Check if Tailwind CSS is properly configured

## 📝 Development Notes

### Adding New Days

1. Create markdown file (e.g., `Week3_Day22_New_Topic.md`)
2. Add to `public/` directory
3. Update `src/utils/contentStructure.js`:
   ```javascript
   {
     id: 'day22',
     title: 'Day 22: New Topic',
     file: 'Week3_Day22_New_Topic.md',
     completed: false
   }
   ```

### Markdown Format

Markdown files should include:
- H1 for main title
- H2 for major sections
- H3 for subsections
- Code blocks with language specification
- Tables, lists, and other standard markdown features

## 🤝 Contributing

This is a learning project. Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Improve documentation

## 📄 License

This project is created for educational purposes.

## 🙏 Acknowledgments

- Course content based on industry best practices
- Built with modern web technologies
- Designed for optimal learning experience

## 📞 Support

For issues or questions:
1. Check the troubleshooting section
2. Review the documentation
3. Check browser console for errors

---

**Happy Learning! 🚀**

Master manual testing with this comprehensive, interactive course platform.