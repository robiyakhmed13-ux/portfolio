# Robiyakhon Akhmedova — Portfolio Website

A modern, tri-language (English / Uzbek / Russian) portfolio website built with **Vite + React + TypeScript**.

## Features

- 🌐 **Tri-language support** — EN / UZ / RU switcher
- 🎨 **Glassmorphism design** with particle animations
- 📱 **Fully responsive** — mobile-first with hamburger menu
- ⚡ **Fast** — Vite-powered, optimized build
- 📄 **Download CV** — language-aware PDF downloads
- 🎯 **SEO-ready** — meta tags, Open Graph

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy to Vercel

### Option 1: GitHub + Vercel (Recommended)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **"New Project"** → Import your repo
4. Vercel auto-detects Vite — just click **"Deploy"**
5. Done! You'll get a URL like `your-project.vercel.app`

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

## Adding Your CV Files

Place your three CV PDFs in the `public/cv/` folder:

```
public/
  cv/
    ROBIYAKHON_AKHMEDOVA.pdf    ← English CV
    ROBIYAXON_AXMEDOVA.pdf      ← Uzbek CV
    Робияхон_Ахмедова.pdf       ← Russian CV
```

These will be served at `/cv/filename.pdf` and the Download CV button will automatically pick the correct file based on the active language.

## Project Structure

```
portfolio-site/
├── public/
│   ├── cv/                    ← Place CV PDFs here
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── UI.tsx             ← Reusable components (Glass, Section, Badge, etc.)
│   ├── data/
│   │   └── translations.ts   ← All tri-language content
│   ├── App.tsx                ← Main portfolio layout
│   ├── index.css              ← Global styles & animations
│   ├── main.tsx               ← React entry point
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Customization

- **Content**: Edit `src/data/translations.ts` to update text in any language
- **Colors**: The purple accent (`#a882ff`, `#c4a8ff`) can be changed in `index.css` and component styles
- **Fonts**: Using DM Sans (body), Playfair Display (headings), JetBrains Mono (code/labels) — loaded from Google Fonts

## Custom Domain

After deploying on Vercel:
1. Go to your project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
