# Quick Start Guide

## ⚠️ Important: Node.js Version Requirement

This project requires **Node.js 20.19+** or **22.12+**. You currently have Node.js 18.18.0.

### Option 1: Upgrade Node.js (Recommended)

**Windows:**
1. Download the latest LTS version from [nodejs.org](https://nodejs.org/)
2. Run the installer
3. Restart your terminal
4. Verify: `node --version`

**Using nvm (Node Version Manager):**
```bash
# Install nvm from: https://github.com/coreybutler/nvm-windows
nvm install 20
nvm use 20
node --version
```

### Option 2: Use an Older Vite Version (Not Recommended)

If you can't upgrade Node.js, you can downgrade Vite:
```bash
npm install vite@4.5.0 @vitejs/plugin-react@4.2.0 --save-dev
```

## After Upgrading Node.js

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to `http://localhost:5173`

## Project Overview

This is a React conversion of the original static HTML website featuring:
- ✨ Image carousel
- ⏱️ Live countdown timer
- 🖼️ Filterable photo gallery
- 📅 Timeline of events
- 📱 Responsive design

## File Structure

```
src/
├── components/          # React components
│   ├── Carousel.jsx    # Image slider
│   ├── Header.jsx      # Navigation
│   ├── CountDay.jsx    # Countdown timer
│   ├── AboutUs.jsx     # Profile section
│   ├── Portfolio.jsx   # Photo gallery
│   ├── Timeline.jsx    # Events timeline
│   └── Footer.jsx      # Footer
├── data/               # Data files
│   ├── portfolioData.js   # Gallery images
│   └── timelineData.js    # Timeline events
├── App.jsx             # Main component
└── main.jsx            # Entry point

public/                 # Static assets
├── css/               # Stylesheets
├── fonts/             # Font files
├── js/                # jQuery plugins
└── *.png              # Images
```

## Common Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm run preview          # Preview production build

# Linting
npm run lint             # Check code quality

# Firebase
firebase deploy          # Deploy to Firebase
```

## Editing Content

### Add/Remove Photos
Edit `src/data/portfolioData.js`

### Update Timeline
Edit `src/data/timelineData.js`

### Change Carousel Images
Edit `src/components/Carousel.jsx`

### Modify About Section
Edit `src/components/AboutUs.jsx`

## Need Help?

- Check `README.md` for detailed documentation
- See `MIGRATION_GUIDE.md` for migration details
- Review component files in `src/components/`

## Troubleshooting

**Port already in use:**
```bash
# Vite will automatically try the next available port
# Or specify a port: npm run dev -- --port 3000
```

**Build errors:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**jQuery plugins not working:**
- Check browser console for errors
- Ensure all files in `public/js/` are accessible
- Verify scripts load in `index.html`
