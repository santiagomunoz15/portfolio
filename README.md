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

## GitHub Pages

Recommended repository name: **santiagomunoz15.github.io**. This gives the clean URL `https://santiagomunoz15.github.io/` without buying a domain. A different repository name also works: the workflow uses GitHub's Pages metadata to set the correct repository prefix for scripts, images, the résumé, and the 3D model.

1. Create a public GitHub repository (leave it empty initially).
2. Upload the contents of this project directory, including `.github/workflows/deploy-pages.yml`, `package.json`, and `package-lock.json`. Put the files at the repository root, rather than inside a `santiago-portfolio` folder. Do not upload `node_modules`, `.next`, or `out`.
3. Under **Settings → Pages → Build and deployment → Source**, select **GitHub Actions**.
4. Push to `main` or `master`, or run **Deploy portfolio to GitHub Pages** manually from the Actions tab after enabling Pages.
5. Open the URL shown by the successful deployment.

The existing `.openai/hosting.json` belongs to the earlier private Sites preview and is not needed by GitHub Pages. The GitHub workflow uses only `out/`.

To verify a repository-prefixed export locally:

```sh
NEXT_PUBLIC_BASE_PATH=/portfolio npm run build
```

For the recommended username repository or ordinary local development, leave `NEXT_PUBLIC_BASE_PATH` unset.
