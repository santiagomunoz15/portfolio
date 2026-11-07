# Santiago Muñoz — Engineering Portfolio

Next.js, TypeScript, and Three.js portfolio featuring FlightDeck X and EarthLens.

## Run

```sh
npm install
npm run dev
```

## Verify and build

```sh
npm run typecheck
npm run build
```

The site exports to `out/` and can be hosted on any static host. No runtime secrets or backend services are required.

## Content and provenance

Project descriptions are based on the author-provided résumé and the public FlightDeck X and EarthLens repositories. The project GIFs are copied from those repositories. The 3D preview is a separate, illustrative browser replay using synthetic data, not the actual C++ simulator. Its sensor-noise toggle affects only the displayed measurement, preserving the reference trajectory.

Project links:
- https://github.com/santiagomunoz15/flightdeck-x
- https://github.com/santiagomunoz15/EarthLens

Résumé: `public/resume.pdf`. Contact and experience content: `app/page.tsx`. Styles: `app/globals.css`. Interactive preview: `components/TelemetryLab.tsx`.
