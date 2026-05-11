# Marri Teja — Developer Portfolio

A modern, dark-themed React developer portfolio. Professional, responsive, and fully editable without touching component code.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start local dev server (http://localhost:3000)
npm start

# Build for production
npm run build
```

---

## ✏️ How to Edit Your Details (The Only File You Need)

Open **`src/data/portfolioData.js`** — this is the single source of truth for all content.

| What to change | Where |
|---|---|
| Name, email, phone, location | `personal` object |
| Resume link | `personal.resumeLink` |
| About me text | `personal.about` |
| GitHub / LinkedIn URLs | `social` object |
| Skills & categories | `skills` array |
| Projects | `projects` array |
| Education | `education` array |

### Adding a new project

Copy this template and add it to the `projects` array in `portfolioData.js`:

```js
{
  id: 5,                          // unique number
  title: "Your Project Name",
  subtitle: "Short one-liner",
  description: "What it does and what you learned.",
  tags: ["Java", "Spring Boot"],  // tech stack tags
  github: "https://github.com/...",
  live: null,                     // or "https://your-deployed-url.com"
  featured: false,                // set true to show green border + badge
},
```

### Adding a new skill category

```js
{
  category: "DevOps",
  items: ["Docker", "Kubernetes", "CI/CD"],
},
```

---

## 📸 Adding Your Profile Photo

1. Place your photo (e.g. `profile.jpg`) inside the `public/` folder.
2. Open `src/components/About.jsx`.
3. Find the comment `<!-- TO ADD YOUR PHOTO -->` and replace the placeholder block with:

```jsx
<img
  src="/profile.jpg"
  alt="Marri Teja"
  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
/>
```

---

## 🌐 Deployment

### Vercel (Recommended — free, fastest)

```bash
npm install -g vercel
npm run build
vercel --prod
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) and it deploys automatically on every push.

### Netlify

```bash
npm run build
# Drag the 'build/' folder to netlify.com/drop
```

Or connect GitHub at [app.netlify.com](https://app.netlify.com).

### GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://Tejamarri2001.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Then run:
```bash
npm run deploy
```

---

## 📁 Project Structure

```
src/
├── components/        # React components (one per section)
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Education.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── ScrollToTop.jsx
│   └── useReveal.js   # custom scroll-reveal hook
├── data/
│   └── portfolioData.js  ← EDIT YOUR CONTENT HERE
├── styles/            # CSS files (one per component)
│   ├── global.css
│   ├── Navbar.css
│   ├── Hero.css
│   ├── About.css
│   ├── Skills.css
│   ├── Projects.css
│   ├── Education.css
│   ├── Contact.css
│   └── Footer.css
├── App.jsx            # Root component
└── index.js           # React entry point
public/
└── index.html         # SEO meta tags — edit title/description here
```

---

## 🎨 Customising the Design

All design tokens (colors, fonts, spacing) are in `src/styles/global.css` under `:root`.

| Variable | Default | What it controls |
|---|---|---|
| `--accent` | `#4fffb0` | Mint green accent color |
| `--bg` | `#0a0a0f` | Page background |
| `--font-display` | Syne | Headings font |
| `--font-mono` | DM Mono | Labels / tags font |

Change `--accent` to any color to instantly re-theme the entire portfolio.

---

Built with React.js · Deployed on Vercel
