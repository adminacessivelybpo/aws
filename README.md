# Christian Ninobla Video Editing Portfolio

A modern, cinematic single-page portfolio site built with plain HTML, CSS, and JavaScript.

## Project Structure

```
.
├── index.html
├── styles.css
├── script.js
├── assets/
│   └── video/
│       └── .gitkeep
└── README.md
```

## How To Run

This is a static site, so you can run it with any local server.

Option 1: VS Code Live Server extension
1. Open `index.html`.
2. Start Live Server.

Option 2: Python HTTP server
1. Run:

```bash
python3 -m http.server 5500
```

2. Visit:

```text
http://localhost:5500
```

## Video Setup (Single Path Replacement)

The hero video source is controlled from one place only:

1. Put your video file in:

```text
assets/video/showreel.mp4
```

2. If your file uses another name/path, edit this constant in `script.js`:

```js
const HERO_VIDEO_SRC = "assets/video/showreel.mp4";
```

If the video is missing or cannot autoplay, the page automatically shows a styled fallback background/message.

## Easy Content Editing

All major text is in `index.html` with comments marking what to replace:
- Hero headline and supporting copy
- Featured project cards
- About intro
- Services
- Gallery items
- Testimonial/stats
- Contact details

Design system variables (colors, spacing, radii) are in `styles.css` under `:root`.

## Notes

- Fully responsive for desktop, tablet, and mobile.
- Includes smooth scrolling, reveal transitions, and hover effects.
- Respects reduced-motion user preferences.