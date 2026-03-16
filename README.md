# RocketRealm - Aviation Photography by Jaghan

A minimal, timeless Angular portfolio showcasing aviation photography with a cinematic landing page and immersive showcase experience.

## Features

### Landing Page
- Fullscreen background images with Ken Burns effect (slow zoom)
- Automatic image rotation every 5 seconds with smooth crossfade
- Subtle grain overlay for cinematic feel
- Center-aligned typography
- Scroll down to enter showcase

### Showcase
- Vertical scroll layout with one image per "moment"
- Large margins and breathing space
- Dark background always visible around images
- Metadata display (location, date, aircraft) below each image
- Hover effects: images fade up, metadata brightens
- Fullscreen lightbox on image click with keyboard navigation (arrow keys, ESC)
- Navigation bar that hides on scroll down, shows on scroll up
- Floating Instagram icon with pulsing animation

## Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add your photography images to `src/assets/photos/`:
   - Landing page images: `landing-1.jpg`, `landing-2.jpg`, `landing-3.jpg`, `landing-4.jpg`
   - Showcase images: `photo-1.jpg`, `photo-2.jpg`, etc.

3. Update image data in `src/app/showcase/showcase.component.ts`:
   Edit the `images` array in `ngOnInit()` to match your actual image files and add metadata:
   ```typescript
   this.images = [
     {
       src: 'assets/photos/photo-1.jpg',
       location: 'Your Location',
       date: '2024-01-15',
       aircraft: 'Aircraft Type'
     },
     // ... more images
   ];
   ```

4. Update landing page images in `src/app/landing-page/landing-page.component.ts`:
   Edit the `images` array in `ngOnInit()` to match your landing page images.

5. Customize Instagram link and other external links:
   - Update Instagram URL in `src/app/showcase/showcase.component.html` (search for `instagram.com/jaghan`)
   - Update jaghan.com link in the same file

### Development

Run the development server:
```bash
npm start
```

Navigate to `http://localhost:4200/`

### Build

Build for production:
```bash
npm run build
```

The build artifacts will be stored in the `dist/rocketrealm/` directory.

## Project Structure

```
src/
├── app/
│   ├── landing-page/          # Landing page component
│   ├── showcase/              # Showcase component
│   ├── app.component.ts       # Root component
│   └── app.module.ts          # App module with routing
├── assets/
│   └── photos/                # Place your images here
├── styles.css                 # Global styles with grain overlay
└── index.html                 # Main HTML file
```

## Customization

### Landing Page Images
Edit `src/app/landing-page/landing-page.component.ts` and update the `images` array.

### Showcase Images & Metadata
Edit `src/app/showcase/showcase.component.ts` and update the `images` array with your image data.

### Styling
- Global styles: `src/styles.css`
- Landing page styles: `src/app/landing-page/landing-page.component.css`
- Showcase styles: `src/app/showcase/showcase.component.css`

### Typography
The project uses `Courier New` monospace font for a timeless, technical aesthetic. Modify font families in the component CSS files to change typography.

## Browser Support

Modern browsers with ES6+ support:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private project - All rights reserved
