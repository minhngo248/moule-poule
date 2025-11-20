# Deployment Checklist

## Pre-Deployment

### 1. Environment Setup
- [ ] Node.js 20.19+ or 22.12+ installed
- [ ] Dependencies installed (`npm install`)
- [ ] Development server runs successfully (`npm run dev`)
- [ ] All features working in development

### 2. Code Quality
- [ ] No console errors in browser
- [ ] All images loading correctly
- [ ] Portfolio filters working
- [ ] Carousel sliding properly
- [ ] Countdown timer updating
- [ ] Timeline displaying correctly
- [ ] Navigation smooth scrolling works
- [ ] Fancybox lightbox opens images
- [ ] Mobile responsive (test on different screen sizes)

### 3. Content Review
- [ ] All text is correct
- [ ] All images are accessible
- [ ] Timeline events are up to date
- [ ] About section information is current
- [ ] Footer credits are appropriate

### 4. Build Test
```bash
npm run build
npm run preview
```
- [ ] Build completes without errors
- [ ] Preview works correctly
- [ ] All assets load in production build
- [ ] File sizes are reasonable

## Firebase Deployment

### 1. Firebase Setup
- [ ] Firebase CLI installed (`npm install -g firebase-tools`)
- [ ] Logged in to Firebase (`firebase login`)
- [ ] Firebase project initialized

### 2. Configuration Check
Review `firebase.json`:
```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

### 3. Build for Production
```bash
npm run build
```
- [ ] Build folder (`dist/`) created
- [ ] Check `dist/` folder contents
- [ ] Verify `dist/index.html` exists
- [ ] Verify assets in `dist/assets/`

### 4. Deploy
```bash
firebase deploy
```
- [ ] Deployment successful
- [ ] Note the hosting URL
- [ ] Test the live site

### 5. Post-Deployment Testing
- [ ] Visit the deployed URL
- [ ] Test all features:
  - [ ] Carousel works
  - [ ] Navigation scrolls
  - [ ] Countdown updates
  - [ ] Portfolio filters work
  - [ ] Images open in lightbox
  - [ ] Timeline displays
  - [ ] Mobile responsive
- [ ] Check browser console for errors
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices

## Alternative Deployment Options

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### GitHub Pages
1. Update `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/'
})
```
2. Build: `npm run build`
3. Deploy `dist/` folder to `gh-pages` branch

## Performance Optimization

### Before Deployment
- [ ] Optimize images (consider using WebP format)
- [ ] Minify CSS and JS (Vite does this automatically)
- [ ] Enable gzip compression on server
- [ ] Add caching headers
- [ ] Consider CDN for assets

### After Deployment
- [ ] Run Lighthouse audit
- [ ] Check page load speed
- [ ] Verify SEO meta tags
- [ ] Test accessibility
- [ ] Monitor error logs

## SEO Checklist

Update `index.html`:
- [ ] Title tag is descriptive
- [ ] Meta description added
- [ ] Open Graph tags for social sharing
- [ ] Favicon is set
- [ ] Language attribute set (`lang="en"` or `lang="vi"`)

Example:
```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Pun & Mun - Our journey together" />
  <meta property="og:title" content="Không chỉ là quà sinh nhật" />
  <meta property="og:description" content="Pun & Mun memories" />
  <meta property="og:image" content="/favicon.png" />
  <title>Không chỉ là quà sinh nhật</title>
  <link rel="icon" type="image/png" href="/favicon.png" />
</head>
```

## Rollback Plan

If something goes wrong:

### Firebase
```bash
# View deployment history
firebase hosting:channel:list

# Rollback to previous version
firebase hosting:rollback
```

### Manual Rollback
1. Keep a backup of the previous `dist/` folder
2. Redeploy the backup if needed

## Monitoring

After deployment, monitor:
- [ ] Error logs (Firebase Console)
- [ ] Analytics (if configured)
- [ ] User feedback
- [ ] Performance metrics
- [ ] Uptime status

## Maintenance

Regular tasks:
- [ ] Update dependencies monthly (`npm update`)
- [ ] Check for security vulnerabilities (`npm audit`)
- [ ] Update content (photos, timeline)
- [ ] Review and fix any reported issues
- [ ] Backup project regularly

## Emergency Contacts

- Firebase Support: https://firebase.google.com/support
- Vite Documentation: https://vitejs.dev
- React Documentation: https://react.dev

## Deployment Log

| Date | Version | Deployed By | Notes |
|------|---------|-------------|-------|
| YYYY-MM-DD | 1.0.0 | Name | Initial deployment |
|  |  |  |  |

---

**Last Updated**: November 20, 2025  
**Status**: Ready for deployment after Node.js upgrade
