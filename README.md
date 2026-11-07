# Santiago Muñoz — Engineering Portfolio

I built this portfolio with Next.js, TypeScript, and Three.js to share my work in real-time systems, simulation, and data visualization. It features FlightDeck X and EarthLens, along with my experience, resume, and contact information.

## Running locally

I install the dependencies and start the development server with:

```sh
npm install
npm run dev
```

## Checking and building

I check the TypeScript types and create a production build with:

```sh
npm run typecheck
npm run build
```

I export the site to `out/` so I can deploy it to a static host without runtime secrets or backend services.

## Featured projects

- [FlightDeck X](https://github.com/santiagomunoz15/flightdeck-x): I built a real-time rocket simulation and mission-control system with a C++ simulator, binary telemetry, a TypeScript relay, and a React dashboard. I also modeled, rigged, and animated its vehicle in Blender.
- [EarthLens](https://github.com/santiagomunoz15/EarthLens): I built a satellite-imagery explorer that uses NASA GIBS snapshots to compare locations across time.

I based the case studies on my project implementations and documentation, and I included demo GIFs from both repositories.

For the portfolio's 3D preview, I use a separate browser replay with synthetic data and my Blender vehicle model. I keep the sensor-noise toggle limited to the displayed measurement so the reference trajectory stays unchanged. I do not run the C++ simulator inside this preview.

## Project structure

I keep the main content and assets in these files:

| File | What I keep there |
| --- | --- |
| `app/page.tsx` | My project case studies, experience, and contact information |
| `app/globals.css` | My layout, visual styles, and responsive rules |
| `components/TelemetryLab.tsx` | My interactive 3D flight preview and replay controls |
| `components/ProjectMedia.tsx` | My project screenshots and on-demand demo animations |
| `lib/assets.ts` | My asset-path helper for repository-prefixed deployments |
| `public/resume.pdf` | My downloadable resume |
| `.github/workflows/deploy-pages.yml` | My GitHub Pages build and deployment workflow |

## GitHub Pages

I configured this repository for GitHub Pages at **https://santiagomunoz15.github.io/portfolio/**. My workflow uses GitHub's Pages metadata to set the repository prefix for scripts, images, my resume, and the 3D model.

My deployment setup is:

1. I keep the project files at the repository root, including the workflow, `package.json`, and `package-lock.json`. I exclude `node_modules`, `.next`, and `out` from version control.
2. I select **GitHub Actions** under **Settings → Pages → Build and deployment → Source**.
3. I push to `main` or `master` to trigger the deployment. I can also run **Deploy portfolio to GitHub Pages** manually from the Actions tab.
4. I check the deployment result in GitHub Actions for the published URL.

I retain `.openai/hosting.json` from my earlier private Sites preview. My GitHub Pages workflow does not use it; it publishes the contents of `out/`.

I verify the repository-prefixed export locally with:

```sh
NEXT_PUBLIC_BASE_PATH=/portfolio npm run build
```

For ordinary local development, I leave `NEXT_PUBLIC_BASE_PATH` unset.
