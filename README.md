# Girish Kumar — DevOps Portfolio

A responsive, grayscale-first Next.js portfolio based exclusively on the supplied résumé for content.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Lenis dependency reserved for smooth-scroll enhancement

## Run

```bash
npm install
npm run dev
```

Production check:

```bash
npm run build
npm start
```

## Hero video

The portfolio is already wired for a talking-video hero, but it intentionally works without the video. Add your generated talking video as:

`public/hero/intro.mp4`

Then run:

```bash
python scripts/build-hero-assets.py
```

The page will automatically use the video when the file exists; otherwise it falls back to the generated 3D portrait.

## Source of truth

The supplied résumé is the source of portfolio content. Only data present in the résumé is shown. No LinkedIn URL or certifications were present in the extracted résumé, so those fields are omitted rather than fabricated.

## Current inputs

- `public/resume.pdf` — supplied résumé
- `public/portrait-3d.png` — generated 3D character portrait
- `public/hero/intro.mp4` — optional, to be generated later

## Notes

The project is intentionally built so the missing intro video does not block development. Once the video is generated, it can be dropped into `public/hero/` without changing the page architecture.
