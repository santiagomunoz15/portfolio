# Santiago Muñoz — Engineering Portfolio

I built this portfolio with Next.js, TypeScript, and Three.js to share my work in real-time systems, simulation, and data visualization. It features my Formula SAE telemetry work with Osprey Racing, FlightDeck X, and EarthLens, along with my experience, resume, and contact information.

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

## Featured work

- **Osprey Racing / Formula SAE:** I contribute to the telemetry and data acquisition subteam at the University of North Florida, working with ESP32 sensor streaming, time-series storage, dashboards, and vehicle-log analysis. I included photos from the workshop, the team setup, and the car in motion.

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
| `components/FormulaSAE.tsx` | My Formula SAE contribution story and photo gallery |
| `components/TelemetryLab.tsx` | My interactive 3D flight preview and replay controls |
| `components/ProjectMedia.tsx` | My project screenshots and on-demand demo animations |
| `lib/assets.ts` | My asset-path helper for repository-prefixed deployments |
| `public/resume.pdf` | My downloadable resume |
| `.github/workflows/deploy-pages.yml` | My GitHub Pages build and deployment workflow |
