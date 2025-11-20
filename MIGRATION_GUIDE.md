# Migration Guide: Static HTML to Vite React

## What Changed

### File Structure
- **Old**: Single `index.html` with inline content
- **New**: Component-based React architecture with separate files

### Components Created

1. **Carousel.jsx** - Image carousel slider
2. **Header.jsx** - Navigation header
3. **CountDay.jsx** - Live countdown timer
4. **AboutUs.jsx** - Profile section
5. **Portfolio.jsx** - Filterable image gallery
6. **Timeline.jsx** - Event timeline
7. **Footer.jsx** - Footer section

### Data Extraction

- **portfolioData.js**: All portfolio images organized by category
- **timelineData.js**: Timeline events organized by year

### Assets Migration

All static assets moved to `public/` folder:
- CSS files → `public/css/`
- Fonts → `public/fonts/`
- JavaScript libraries → `public/js/`
- Images → `public/` (favicon, heart_img.png)

### Key Improvements

1. **Component Reusability**: Each section is now a reusable React component
2. **State Management**: Countdown timer uses React hooks (useState, useEffect)
3. **Data Separation**: Images and timeline data separated into data files
4. **Modern Build**: Vite provides fast HMR and optimized production builds
5. **Maintainability**: Easier to update content by editing data files

### jQuery Integration

The app still uses jQuery plugins for:
- Bootstrap carousel and navigation
- Isotope (portfolio filtering)
- Fancybox (image lightbox)
- WOW.js (scroll animations)
- ScrollToFixed (sticky header)

These are loaded from the `public/js/` folder and initialized in component `useEffect` hooks.

## How to Update Content

### Update Images
Edit `src/data/portfolioData.js`:
```javascript
{ 
  image: 'URL', 
  category: 'normal|porto|geneve|azur|normandie|heheimg', 
  title: 'Title', 
  subtitle: 'Subtitle' 
}
```

### Update Timeline
Edit `src/data/timelineData.js`:
```javascript
{
  year: '2024',
  events: [
    {
      date: 'Month',
      title: 'Event Title',
      description: 'Event description'
    }
  ]
}
```

### Update Carousel Slides
Edit `src/components/Carousel.jsx` - modify the `slides` array

### Update About Us
Edit `src/components/AboutUs.jsx` - change names, ages, images, descriptions

## Running the App

### Development
```bash
npm run dev
```
Access at `http://localhost:5173`

### Production Build
```bash
npm run build
npm run preview
```

### Deploy to Firebase
```bash
firebase deploy
```

## Troubleshooting

### Node Version Error
If you see "Vite requires Node.js version 20.19+ or 22.12+":
- Upgrade Node.js to version 20.19 or higher
- Or use nvm: `nvm install 20` then `nvm use 20`

### jQuery Plugins Not Working
- Ensure all JS files are in `public/js/`
- Check browser console for errors
- Verify scripts are loaded in `index.html`

### Images Not Loading
- Check image URLs are correct
- Ensure Google Drive links use `uc?id=` format
- Verify public folder assets are accessible

## Future Enhancements

Consider these improvements:
1. Replace jQuery plugins with React alternatives (react-slick, react-fancybox)
2. Add TypeScript for type safety
3. Implement React Router for multi-page navigation
4. Use CSS modules or styled-components
5. Add image optimization
6. Implement lazy loading for images
7. Add unit tests with Vitest
