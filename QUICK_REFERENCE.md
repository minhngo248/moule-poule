# Quick Reference Card

## 🚨 First Time Setup

```bash
# 1. Upgrade Node.js to 20.19+ (from nodejs.org)
node --version  # Should show 20.x or higher

# 2. Install dependencies
npm install

# 3. Start development
npm run dev

# 4. Open browser
# http://localhost:5173
```

## 📝 Common Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Check code quality |
| `firebase deploy` | Deploy to Firebase |

## 📂 Where to Edit

| What to change | File to edit |
|----------------|--------------|
| Add/remove photos | `src/data/portfolioData.js` |
| Update timeline | `src/data/timelineData.js` |
| Change carousel images | `src/components/Carousel.jsx` |
| Edit about section | `src/components/AboutUs.jsx` |
| Modify navigation | `src/components/Header.jsx` |
| Change countdown date | `src/components/CountDay.jsx` |

## 🎨 Project Structure

```
src/
├── components/        # 7 React components
│   ├── Carousel.jsx
│   ├── Header.jsx
│   ├── CountDay.jsx
│   ├── AboutUs.jsx
│   ├── Portfolio.jsx
│   ├── Timeline.jsx
│   └── Footer.jsx
├── data/             # Data files
│   ├── portfolioData.js
│   └── timelineData.js
├── App.jsx           # Main app
└── main.jsx          # Entry point

public/               # Static assets
├── css/             # Stylesheets
├── fonts/           # Fonts
├── js/              # jQuery plugins
└── *.png            # Images
```

## 🔧 Add New Photo

1. Open `src/data/portfolioData.js`
2. Add to array:
```javascript
{
  image: 'https://drive.google.com/uc?id=YOUR_ID',
  category: 'normal', // or porto, geneve, azur, normandie, heheimg
  title: 'Pun',
  subtitle: 'Mun'
}
```
3. Save → Auto-reload

## 📅 Add Timeline Event

1. Open `src/data/timelineData.js`
2. Find the year
3. Add to events array:
```javascript
{
  date: 'Dec',
  title: 'Event Title',
  description: 'Description here'
}
```
4. Save → Auto-reload

## 🚀 Deploy to Firebase

```bash
# Build
npm run build

# Deploy
firebase deploy

# Or combined
npm run build && firebase deploy
```

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| "Vite requires Node.js 20.19+" | Upgrade Node.js from nodejs.org |
| Port already in use | Vite auto-uses next port (5174, 5175...) |
| Changes not showing | Hard refresh: Ctrl+Shift+R |
| Build fails | `rm -rf node_modules && npm install` |
| Images not loading | Check Google Drive links are public |

## 📊 Component Overview

| Component | Purpose | Uses |
|-----------|---------|------|
| Carousel | Image slider | Bootstrap carousel |
| Header | Navigation | jQuery onePageNav |
| CountDay | Live timer | React hooks |
| AboutUs | Profiles | Pure React |
| Portfolio | Photo gallery | Isotope, Fancybox |
| Timeline | Events | timelineData.js |
| Footer | Footer | Pure React |

## 🎯 Key Features

- ✅ 3-slide carousel
- ✅ Smooth scroll navigation
- ✅ Live countdown timer
- ✅ 36 photos in 6 categories
- ✅ Filterable gallery
- ✅ Image lightbox
- ✅ 18 timeline events
- ✅ Responsive design
- ✅ Scroll animations

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `GETTING_STARTED.md` | Complete beginner guide |
| `README.md` | Full documentation |
| `START_HERE.md` | Quick start |
| `MIGRATION_GUIDE.md` | Conversion details |
| `DEPLOYMENT_CHECKLIST.md` | Deploy guide |
| `PROJECT_STRUCTURE.txt` | Visual structure |
| `QUICK_REFERENCE.md` | This file |

## 🔗 Useful Links

- [Vite Docs](https://vitejs.dev)
- [React Docs](https://react.dev)
- [Node.js Download](https://nodejs.org/)
- [Firebase Console](https://console.firebase.google.com)

## 💡 Pro Tips

1. **Save often** - Vite auto-reloads instantly
2. **Check console** - F12 to see errors
3. **Edit data files** - Easier than editing components
4. **Test mobile** - Use DevTools device mode
5. **Commit changes** - Use Git for version control

## ⚡ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+S` | Save file (auto-reload) |
| `F12` | Open DevTools |
| `Ctrl+Shift+R` | Hard refresh |
| `Ctrl+C` | Stop dev server |

## 📦 Package Versions

- React: 19.2.0
- Vite: 7.2.4
- Node.js required: 20.19+ or 22.12+

## 🎨 Image Categories

1. `normal` - Everyday photos
2. `porto` - Porto 23
3. `geneve` - Genève 23
4. `azur` - Côte d'Azur 22
5. `normandie` - Normandie 22
6. `heheimg` - Hí hí

## 📱 Test Checklist

- [ ] Carousel slides work
- [ ] Navigation scrolls smoothly
- [ ] Countdown updates
- [ ] Portfolio filters work
- [ ] Images open in lightbox
- [ ] Timeline displays
- [ ] Mobile responsive
- [ ] No console errors

## 🚀 Deployment Checklist

- [ ] `npm run build` succeeds
- [ ] Test with `npm run preview`
- [ ] All features work
- [ ] No console errors
- [ ] `firebase deploy`
- [ ] Test live site

---

**Quick Help**: Start with `GETTING_STARTED.md` for detailed instructions!
