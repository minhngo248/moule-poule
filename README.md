# Pun & Mun - Vite React App

This is a converted React application using Vite, originally from a static HTML website.

## Project Structure

```
├── public/              # Static assets (CSS, fonts, images, JS libraries)
│   ├── css/            # Bootstrap, Font Awesome, custom styles
│   ├── fonts/          # Font files
│   ├── js/             # jQuery plugins (Bootstrap, Isotope, Fancybox, etc.)
│   ├── favicon.png
│   └── heart_img.png
├── src/
│   ├── components/     # React components
│   │   ├── Carousel.jsx
│   │   ├── Header.jsx
│   │   ├── CountDay.jsx
│   │   ├── AboutUs.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Timeline.jsx
│   │   └── Footer.jsx
│   ├── data/          # Data files
│   │   ├── portfolioData.js
│   │   └── timelineData.js
│   ├── App.jsx        # Main App component
│   ├── App.css        # App styles
│   └── main.jsx       # Entry point
├── index.html         # HTML template
├── package.json
└── vite.config.js
```

## Features

- **Carousel**: Image slider with 3 slides
- **Count Day**: Live counter showing years, months, and days since February 27, 2022
- **About Us**: Profile section for Pun and Mun
- **Portfolio**: Filterable image gallery with categories (Normal, Porto, Genève, Côte d'Azur, Normandie, Hí hí)
- **Timeline**: Event timeline from 2022-2023
- **Animations**: WOW.js animations on scroll
- **Responsive**: Bootstrap-based responsive design

## Installation

```bash
npm install
```

## Development

**Note**: This project requires Node.js version 20.19+ or 22.12+. If you're using Node.js 18.x, you'll need to upgrade.

To start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Build

To build for production:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Preview Production Build

```bash
npm run preview
```

## Technologies Used

- **React 19**: UI library
- **Vite**: Build tool and dev server
- **Bootstrap 3**: CSS framework
- **jQuery**: For legacy plugins
- **Isotope**: Filterable layouts
- **Fancybox**: Lightbox for images
- **WOW.js**: Scroll animations
- **Font Awesome**: Icons

## Notes

- The app uses jQuery plugins (Bootstrap, Isotope, Fancybox) loaded from the public folder
- All images are hosted on Google Drive
- Original CSS and fonts are preserved in the public folder
- The countdown timer updates every 500ms

## Firebase Deployment

The project includes Firebase configuration files for deployment:

```bash
firebase deploy
```
