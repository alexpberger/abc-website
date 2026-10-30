# Project instructions — Alex Berger Consulting

## Purpose

This repository is the public website for Alex Berger Consulting.

It is a one-page static site. The message is personal and direct: Alex helps organisations turn Data & AI opportunities into practical, production-ready solutions, and clients work with him rather than with a large firm.

Keep the writing and the visual design in that register. Prefer clarity, substance, and technical credibility. Do not introduce corporate consulting language, generic AI imagery, or decorative effects that do not serve the content.

## Stack

- Frontend: React and TypeScript, built with Vite, at the repository root.
- Hosting: Azure Static Web Apps, Free plan, one production environment.
- CI/CD: GitHub Actions. Pull requests build only. Pushes to `main` build and deploy.
- Local development: Dev Container. Do not require dependencies to be installed on the host.
- Backend: none. Contact is `mailto:alex@berger.dk`.

There is no separate development or staging deployment.

## Design

Follow the visual language of `abc-prediction-platform`:

- Colours and type are defined in `src/styles/tokens.css` and `src/styles/base.css`.
- Headings use Newsreader. Body and labels use Source Sans 3.
- Separate regions with rules, paper surfaces, and whitespace. Do not add gradients, drop shadows, or animation.

Page copy lives in `src/content/site.ts`. Image imports live in `src/assets/images.ts`. Do not hardcode image paths in components.

## Adding a backend later

The site is a static frontend so an Azure Functions app can be added without moving the React app.

When that work is explicitly requested:

- Put the Functions app in `api/`.
- Point `api_location` in `.github/workflows/azure-static-web-apps.yml` at that folder.
- Keep secrets in GitHub Actions and Azure configuration, not in the frontend.

Do not add the API, a contact-form backend, or a Vite `/api` proxy until that is requested.

## Security and secrets

- Never commit secrets, credentials, API keys, access tokens, certificates, private keys, or other sensitive information.
- Never commit environment-specific configuration that contains sensitive information.
- Keep local environment files (for example `.env`) out of version control.
- Add a `.env.example` only where it is useful, with placeholder values and no real secrets. This site does not need one today.
- Never expose secrets through frontend code, build-time variables, or publicly accessible configuration. Vite variables exposed to the frontend are bundled into public client-side code.
- Use GitHub Secrets and Azure configuration for the deployment token and for any future backend secrets. The production deploy reads `AZURE_STATIC_WEB_APPS_API_TOKEN`.
- Follow least privilege when configuring access and permissions.

## Repository hygiene

- Keep the repository free of generated files, build output, and unnecessary dependencies.
- Maintain `.gitignore` and `.dockerignore`.
- Do not commit local development files or machine-specific configuration.
- `.gitignore` must cover `node_modules/`, `dist/`, `.env`, `.env.*` (with an exception for `.env.example`), and local IDE and operating-system files.
- `/assets/` is gitignored and holds local reference files only: the business card and the full-size masters. The site uses the web-sized files in `src/assets/`. The ignore rule is anchored to the repository root so `src/assets/` stays tracked.
- The repository is public. Documentation and code must be safe to publish.

## Working agreement

- Implement only what was requested, plus what is strictly required to finish it.
- Do not expand the task into future work described in this file.
- Do not add frameworks, services, or dependencies without a clear need.
- Do not rewrite unrelated code.
- Ask before a decision that is unspecified and would materially change the result.
- Do not change external infrastructure or deploy without an explicit request.
- Never claim checks passed unless they were actually run.

## Completion

1. Change only what was agreed.
2. Run the relevant checks when they can be run. For this site, that is `npm run typecheck` and `npm run build`.
3. Report the files changed, the checks run, and any manual steps still left.
4. Update `README.md` and this file when an implementation decision changes the architecture, deployment, or development workflow.
