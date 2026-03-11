# Client Onboarding Checklist (Sound of Simone)

## Generated Setup
- Client ID: `sound-of-simone`
- Repo: `allisson79/sound-of-simone-site`
- Production domain: `pending-domain.example`
- DEV domain: `dev.sound-of-simone-dev.pages.dev`
- CMS proxy domain: `decap.soundofsimone.no`
- Cloudflare DEV project: `sound-of-simone-dev`
- Cloudflare PROD project: `sound-of-simone-main`

## Required Cloudflare/GitHub Variables
- GitHub Actions variable: `CF_PAGES_DEV_PROJECT=sound-of-simone-dev`
- GitHub Actions variable: `CF_PAGES_PROD_PROJECT=sound-of-simone-main`
- Org-level GitHub Actions secret: `CLOUDFLARE_API_TOKEN`
- Org-level GitHub Actions secret: `CLOUDFLARE_ACCOUNT_ID`
- Worker secret: `GITHUB_CLIENT_ID`
- Worker secret: `GITHUB_CLIENT_SECRET`
- Worker var `ALLOWED_ORIGINS` must include production + localhost:
  - `https://pending-domain.example`
  - `https://www.pending-domain.example`
  - `http://localhost:4321`
- Worker DEV policy handles `*-dev.pages.dev` origins automatically.

## New Client Smoke Test
1. `npm run client:validate`
2. `npm run build`
3. `./scripts/deploy-dev.sh`
4. `DEV_DOMAIN=dev.sound-of-simone-dev.pages.dev PROXY_DOMAIN=decap.soundofsimone.no ./scripts/verify-deployment.sh`
5. Check URLs:
   - `https://dev.sound-of-simone-dev.pages.dev/`
   - `https://dev.sound-of-simone-dev.pages.dev/admin/`
   - `https://decap.soundofsimone.no/health`
   - `https://decap.soundofsimone.no/auth?origin=https://pending-domain.example`

## Ops Routine for Shared OAuth Worker
1. Add customer origins to `ALLOWED_ORIGINS`.
2. Redeploy worker: `cd decap-proxy && npm run deploy`.
3. Verify `/health` and `/auth?origin=...`.
