# Getting Started with Your Vite React App

## 🎯 What You Have Now

Your static HTML website has been converted to a modern **Vite + React** application with:
- 7 React components
- 36 images in a filterable gallery
- Live countdown timer
- Event timeline
- Responsive design
- All original features preserved

## ⚠️ IMPORTANT: Node.js Version

**Current Node.js**: 18.18.0  
**Required**: 20.19+ or 22.12+

You **MUST** upgrade Node.js before running this project.

### How to Upgrade Node.js

#### Option 1: Direct Download (Easiest)
1. Go to [nodejs.org](https://nodejs.org/)
2. Download the **LTS version** (20.x or higher)
3. Run the installer
4. Restart your terminal/command prompt
5. Verify: `node --version` (should show 20.x or higher)

#### Option 2: Using NVM (Recommended for developers)
```bash
# Download nvm-windows from:
# https://github.com/coreybutler/nvm-windows/releases

# After installation:
nvm install 20
nvm use 20
node --version
```

## 🚀 Quick Start (After Node.js Upgrade)

### Step 1: Install Dependencies
```bash
npm install
```

This will install:
- React 19
- Vite 7
- All required dependencies

### Step 2: Start Development Server
```bash
npm run dev
```

You should see:
```
VITE v7.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### Step 3: Open in Browser
Navigate to `http://localhost:5173`

You should see your website with:
- Image carousel at the top
- Navigation menu
- Countdown timer
- About Us section
- Photo gallery
- Timeline

## 📂 Project Structure Explained

```
your-project/
│
├── src/                          # React source code
│   ├── components/               # React components
│   │   ├── Carousel.jsx         # Image slider (3 slides)
│   │   ├── Header.jsx           # Navigation menu
│   │   ├── CountDay.jsx         # Countdown timer
│   │   ├── AboutUs.jsx          # Pun & Mun profiles
│   │   ├── Portfolio.jsx        # Photo gallery with filters
│   │   ├── Timeline.jsx         # Event timeline
│   │   └── Footer.jsx           # Footer section
│   │
│   ├── data/                    # Data files
│   │   ├── portfolioData.js    # 36 gallery images
│   │   └── timelineData.js     # Timeline events
│   │
│   ├── App.jsx                  # Main app component
│   ├── App.css                  # App styles
│   └── main.jsx                 # Entry point
│
├── public/                      # Static assets (served as-is)
│   ├── css/                    # Stylesheets
│   │   ├── bootstrap.min.css
│   │   ├── style.css
│   │   ├── font-awesome.css
│   │   ├── animate.css
│   │   └── animation.css
│   │
│   ├── fonts/                  # Font files
│   ├── js/                     # jQuery plugins
│   │   ├── jquery-1.11.0.min.js
│   │   ├── bootstrap.min.js
│   │   ├── jquery.isotope.js
│   │   └── fancybox/
│   │
│   ├── favicon.png
│   └── heart_img.png
│
├── index.html                   # HTML template
├── package.json                 # Dependencies & scripts
├── vite.config.js              # Vite configuration
└── firebase.json               # Firebase config (for deployment)
```

## 🎨 How It Works

### 1. Entry Point (`index.html`)
- Loads CSS files from `public/css/`
- Loads jQuery plugins from `public/js/`
- Has a `<div id="root"></div>` where React renders

### 2. React Initialization (`src/main.jsx`)
- Imports React and ReactDOM
- Renders the `<App />` component into `#root`

### 3. Main App (`src/App.jsx`)
- Imports all 7 components
- Renders them in order
- Initializes WOW.js for animations

### 4. Components
Each component is self-contained:
- **Carousel**: Uses Bootstrap carousel plugin
- **Header**: Uses jQuery onePageNav for smooth scrolling
- **CountDay**: Uses React hooks for live countdown
- **AboutUs**: Pure React component
- **Portfolio**: Uses Isotope for filtering, Fancybox for lightbox
- **Timeline**: Renders data from timelineData.js
- **Footer**: Simple footer component

### 5. Data Files
- **portfolioData.js**: Array of 36 image objects
- **timelineData.js**: Array of timeline events by year

## 🛠️ Common Tasks

### Add New Photos to Gallery

1. Open `src/data/portfolioData.js`
2. Add a new object to the array:
```javascript
{
  image: 'https://drive.google.com/uc?id=YOUR_IMAGE_ID',
  category: 'normal', // or porto, geneve, azur, normandie, heheimg
  title: 'Pun',
  subtitle: 'Mun'
}
```
3. Save the file
4. The page will auto-reload with the new image

### Add Timeline Event

1. Open `src/data/timelineData.js`
2. Find the year you want to add to
3. Add a new event object:
```javascript
{
  date: 'Dec',
  title: 'New Event',
  description: 'Event description here'
}
```
4. Save the file

### Change Carousel Images

1. Open `src/components/Carousel.jsx`
2. Modify the `slides` array:
```javascript
const slides = [
  {
    image: 'YOUR_IMAGE_URL',
    title: 'Title',
    subtitle: 'Subtitle'
  }
];
```

### Update About Section

1. Open `src/components/AboutUs.jsx`
2. Change the text, images, or ages directly in the JSX

## 📦 Available Commands

```bash
# Development
npm run dev          # Start dev server (http://localhost:5173)

# Production
npm run build        # Build for production (creates dist/ folder)
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Check code for issues

# Firebase
firebase deploy      # Deploy to Firebase (after npm run build)
```

## 🔍 Development Tips

### Hot Module Replacement (HMR)
When you save a file, Vite automatically updates the browser without full reload. This is super fast!

### Browser DevTools
- Press F12 to open DevTools
- Check Console tab for errors
- Use React DevTools extension for debugging

### File Watching
Vite watches these files for changes:
- All files in `src/`
- `index.html`
- `vite.config.js`

Changes to `public/` files require manual refresh.

## 🐛 Troubleshooting

### "Vite requires Node.js version 20.19+"
→ Upgrade Node.js (see top of this guide)

### Port 5173 already in use
→ Vite will automatically use the next available port (5174, 5175, etc.)

### Images not loading
→ Check that Google Drive links are correct and public

### jQuery plugins not working
→ Check browser console for errors
→ Ensure scripts are loaded in `index.html`

### Build fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Changes not showing
→ Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates a `dist/` folder with optimized files.

### Deploy to Firebase
```bash
# First time setup
firebase login
firebase init

# Deploy
npm run build
firebase deploy
```

### Deploy to Other Platforms
- **Vercel**: `vercel`
- **Netlify**: `netlify deploy --prod`
- **GitHub Pages**: Deploy `dist/` folder

See `DEPLOYMENT_CHECKLIST.md` for detailed steps.

## 📚 Learn More

### Documentation Files
- **README.md** - Complete project documentation
- **MIGRATION_GUIDE.md** - How the conversion was done
- **CONVERSION_SUMMARY.md** - What changed
- **DEPLOYMENT_CHECKLIST.md** - Pre-deployment checklist
- **START_HERE.md** - Quick reference

### External Resources
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Bootstrap 3 Docs](https://getbootstrap.com/docs/3.4/)

## 🎓 Next Steps

1. ✅ Upgrade Node.js to 20.19+
2. ✅ Run `npm install`
3. ✅ Run `npm run dev`
4. ✅ Explore the code in `src/components/`
5. ✅ Try editing some content
6. ✅ Build for production: `npm run build`
7. ✅ Deploy to Firebase

## 💡 Tips for Success

- **Save often**: Vite's HMR makes development fast
- **Check console**: Browser console shows errors
- **Use components**: Each section is a separate component
- **Edit data files**: Easier than editing JSX
- **Test mobile**: Use browser DevTools device mode
- **Commit often**: Use Git to track changes

## 🎉 You're Ready!

Your project is fully set up and ready to go. Just upgrade Node.js and run `npm install` to get started!

**Questions?** Check the other documentation files or review the component code.

---

**Created**: November 20, 2025  
**Status**: ✅ Ready (after Node.js upgrade)  
**Next**: Upgrade Node.js → `npm install` → `npm run dev`
