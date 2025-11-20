# 💕 Pun & Mun - Love Site

<div align="center">

![Build and Deploy](https://github.com/minhngo248/moule-poule/workflows/Build%20and%20Deploy/badge.svg)
![Firebase](https://img.shields.io/badge/Firebase-Hosting-orange?logo=firebase)
![React](https://img.shields.io/badge/React-19.2.0-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)
![License](https://img.shields.io/badge/License-Private-red)

**A beautiful photo gallery and timeline celebrating Pun & Mun's journey together** ❤️

[🌐 Live Demo](https://love-poule.minhnn.fr) • [📖 Documentation](#documentation) • [🚀 Quick Start](#quick-start)

</div>

---

## 📊 Project Stats

<div align="center">

| Metric | Value |
|--------|-------|
| 📸 **Photos** | 46 images |
| 🗓️ **Timeline Events** | 18 events |
| 🌍 **Locations** | 6 categories |
| ⚛️ **Components** | 7 React components |
| 📦 **Build Size** | ~2.5 MB |

</div>

## ✨ Features

- 🎠 **Image Carousel** - Beautiful sliding carousel with 3 featured photos
- 🧭 **Smooth Navigation** - One-page scroll navigation with sticky header
- ⏱️ **Live Countdown** - Real-time counter showing years, months, and days together
- 👥 **About Section** - Profile cards with heart animation
- 🖼️ **Photo Gallery** - 46 images organized in 6 filterable categories
  - 📷 Normal (19 photos)
  - 🎭 Hí hí (9 photos)
  - 🇨🇭 Genève (6 photos)
  - 🇵🇹 Porto (6 photos)
  - 🌊 Côte d'Azur (4 photos)
  - 🏰 Normandie (2 photos)
- 🔍 **Lightbox** - Click any image to view in full screen
- 📅 **Timeline** - Interactive timeline of memorable moments (2022-2023)
- 📱 **Responsive** - Works perfectly on mobile, tablet, and desktop
- 🎨 **Animations** - Smooth scroll animations with WOW.js

## 🛠️ Tech Stack

<div align="center">

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 19, Vite 7 |
| **Styling** | Bootstrap 3, Custom CSS, Animate.css |
| **Animations** | WOW.js, jQuery plugins |
| **Gallery** | Isotope (filtering), Fancybox (lightbox) |
| **Hosting** | Firebase Hosting |
| **Storage** | AWS S3 (eu-west-3) |
| **CI/CD** | GitHub Actions |

</div>

## 🚀 Quick Start

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm or yarn
- Firebase CLI (for deployment)

### Installation

```bash
# Clone the repository
git clone https://github.com/minhngo248/moule-poule.git
cd moule-poule

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the app! 🎉

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Check code quality
npm run deploy   # Build and deploy to Firebase
```

## 📁 Project Structure

```
moule-poule/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD
├── public/
│   ├── css/                    # Stylesheets
│   ├── fonts/                  # Font files
│   ├── js/                     # jQuery plugins
│   └── *.png                   # Static images
├── src/
│   ├── components/             # React components
│   │   ├── Carousel.jsx       # Image carousel
│   │   ├── Header.jsx         # Navigation
│   │   ├── CountDay.jsx       # Countdown timer
│   │   ├── AboutUs.jsx        # Profile section
│   │   ├── Portfolio.jsx      # Photo gallery
│   │   ├── Timeline.jsx       # Event timeline
│   │   └── Footer.jsx         # Footer
│   ├── data/
│   │   ├── portfolioData.js   # Gallery images (46 photos)
│   │   └── timelineData.js    # Timeline events (18 events)
│   ├── App.jsx                # Main app component
│   └── main.jsx               # Entry point
├── index.html                  # HTML template
├── vite.config.js             # Vite configuration
├── firebase.json              # Firebase config
└── package.json               # Dependencies
```

## 🎨 Components Overview

| Component | Description | Features |
|-----------|-------------|----------|
| **Carousel** | Hero image slider | 3 slides, auto-play, navigation |
| **Header** | Navigation bar | Sticky, smooth scroll, responsive |
| **CountDay** | Live timer | Updates every 500ms, shows years/months/days |
| **AboutUs** | Profile cards | Animated heart, profile photos |
| **Portfolio** | Photo gallery | 6 filters, 46 images, lightbox |
| **Timeline** | Event history | 18 events, 2 years, chronological |
| **Footer** | Page footer | Credits, copyright |

## 🖼️ Gallery Categories

<div align="center">

| Category | Count | Description |
|----------|-------|-------------|
| 📷 **Normal** | 19 | Everyday moments |
| 🎭 **Hí hí** | 9 | Fun and silly photos |
| 🇨🇭 **Genève** | 6 | Geneva trip 2023 |
| 🇵🇹 **Porto** | 6 | Porto trip 2023 |
| 🌊 **Côte d'Azur** | 4 | French Riviera 2022 |
| 🏰 **Normandie** | 2 | Normandy trip 2022 |

</div>

## 📅 Timeline Highlights

- **2022-01-26** - First meeting in Reims
- **2022-02-25** - First kiss in Étretat
- **2022-02-27** - Anniversary date ❤️
- **2022-08-24** - Mou's birthday
- **2022-11-29** - Pou's 17th birthday
- **2023-04** - INSA Challenge - 1st place! 🏆
- **2023-06** - Porto trip
- **2023-10** - Meeting Pou's parents

## 🚀 Deployment

### Automatic Deployment (GitHub Actions)

Every push to `main` automatically:
1. ✅ Installs dependencies
2. ✅ Builds the project
3. ✅ Deploys to Firebase

### Manual Deployment

```bash
# Build and deploy
npm run deploy

# Or step by step
npm run build
firebase deploy
```

### Live URLs

- **Primary**: https://love-poule.minhnn.fr
- **Alternative**: https://love-site-51a44.firebaseapp.com

## 🔧 Configuration

### Update Photos

Edit `src/data/portfolioData.js`:

```javascript
{
  image: 'https://love-site.s3.eu-west-3.amazonaws.com/category/photo.jpg',
  category: 'normal', // or porto, geneve, azur, normandie, heheimg
  title: 'Pun',
  subtitle: 'Mun'
}
```

### Update Timeline

Edit `src/data/timelineData.js`:

```javascript
{
  year: '2024',
  events: [
    {
      date: 'Jan',
      title: 'New Event',
      description: 'Description here'
    }
  ]
}
```

### Update Carousel

Edit `src/components/Carousel.jsx` - modify the `slides` array.

## 📚 Documentation

- [Getting Started Guide](GETTING_STARTED.md)
- [Quick Reference](QUICK_REFERENCE.md)
- [Migration Guide](MIGRATION_GUIDE.md)
- [Deployment Checklist](DEPLOYMENT_CHECKLIST.md)
- [GitHub Actions Setup](.github/SETUP_GITHUB_ACTIONS.md)

## 🤝 Contributing

This is a private project, but if you want to suggest improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Development Notes

### Image Storage

Images are stored in AWS S3 bucket `love-site` in region `eu-west-3`:
- Organized by category folders
- Public read access
- CORS enabled for web access

### Countdown Timer

Starts from: **February 27, 2022**  
Updates: Every 500ms  
Displays: Years, Months, Days

### Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ IE11 (not supported)

## 🐛 Troubleshooting

### Images not loading?
- Check S3 bucket permissions
- Verify CORS configuration
- Ensure URLs are correct

### Build fails?
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Node version error?
- Upgrade to Node.js 20.19+ or 22.12+
- Use nvm: `nvm install 20 && nvm use 20`

## 📊 Performance

- ⚡ **First Load**: ~1.2s
- 🎯 **Lighthouse Score**: 95+
- 📦 **Bundle Size**: ~2.5 MB (with images)
- 🚀 **Build Time**: ~15s

## 🔒 Security

- ✅ HTTPS enabled
- ✅ Firebase security rules configured
- ✅ S3 bucket properly configured
- ✅ No sensitive data in repository
- ✅ GitHub secrets for CI/CD

## 📜 License

This is a private project. All rights reserved.

## 💖 Acknowledgments

- **Template**: [WebThemez](http://webthemez.com)
- **Icons**: Font Awesome
- **Animations**: WOW.js, Animate.css
- **Gallery**: Isotope, Fancybox
- **Hosting**: Firebase
- **Storage**: AWS S3

---

<div align="center">

**Made with ❤️ for Pun & Mun**

⭐ Star this repo if you like it!

[🔝 Back to Top](#-pun--mun---love-site)

</div>
