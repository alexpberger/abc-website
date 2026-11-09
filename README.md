# Alex Berger Consulting

Public website for Alex Berger Consulting, an independent Data & AI consultancy. The site is a single page.

## Technology

- React and TypeScript
- Vite
- Azure Static Web Apps (Free plan, production only)
- Terraform for the Azure resource
- GitHub Actions
- Dev Container for local development

## Local development

Development happens inside the Dev Container. Node and the project dependencies do not need to be installed on the host.

1. Open this folder in Cursor or VS Code.
2. Reopen it in the container when prompted, or run **Dev Containers: Reopen in Container**.
3. Wait for `npm ci` to finish. That command runs when the container is created.
4. Start the site:

```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173).

Useful scripts:

- `npm run dev` — local server
- `npm run typecheck` — TypeScript check
- `npm run build` — typecheck and production build into `dist/`
- `npm run preview` — serve the production build

## Project structure

```
.devcontainer/          Dev Container image and setup
.github/workflows/      Build, and production deploy on main
infra/                  Resource group and Static Web App
public/                 Files copied into the site root, including Static Web Apps headers
src/assets/             Web-sized logo and portrait, imported from images.ts
src/components/         Page sections
src/content/site.ts     Copy, links, and navigation
src/styles/             Colour tokens, base styles, and layout
assets/                 Local only. Business card and full-size image masters. Not in git.
```

## Architecture

The browser receives a static site built by Vite. Terraform creates one Static Web App, and that app hosts the `dist/` folder. There is one environment: production. Pull requests run the build and do not deploy. A push to `main` deploys.

Contact is a `mailto:` link. A future Azure Functions app can live in `api/` without moving the frontend. Until that exists, the workflow leaves `api_location` empty. Do not put secrets in Vite environment variables. Those values are compiled into the public JavaScript.

Response headers for the hosted site are set in `public/staticwebapps.config.json`, which Vite copies into `dist/`.

## GitHub Actions

Workflow: `.github/workflows/azure-static-web-apps.yml`.

- On a pull request to `main`: install, typecheck, and production build.
- On a push to `main`, or a manual run from `main`: the same checks, then deploy with `Azure/static-web-apps-deploy`.
- Deployment secret: `AZURE_STATIC_WEB_APPS_API_TOKEN`.

Preview environments are not created.

## Deployment

Terraform creates the Static Web App. GitHub Actions publishes the site. Run this once, from a machine where the Azure CLI is already signed in and Terraform is installed.

```bash
cd infra
terraform init
terraform apply
terraform output -raw deployment_token | gh secret set AZURE_STATIC_WEB_APPS_API_TOKEN --repo alexpberger/abc-website
```

The site is then at `https://` plus the hostname:

```bash
terraform output -raw hostname
```

Push to `main`, or run the **Azure Static Web Apps** workflow from `main`, after the secret exists. Pull requests build only.

The deployment token is in the Terraform state on this machine. That state is gitignored. Do not commit it.

## Live website

Not deployed yet. After apply, the address is `https://` followed by `terraform output -raw hostname`.
