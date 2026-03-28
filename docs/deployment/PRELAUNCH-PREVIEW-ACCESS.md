# Prelaunch Preview Access

Use this when `soundofsimone.no/` should stay public while the draft site lives under `soundofsimone.no/preview/*`.

## Cloudflare Access setup
1. Open the Cloudflare Zero Trust dashboard.
2. Go to **Access** -> **Applications**.
3. Add a **Self-hosted** application.
4. Set the application domain to `https://soundofsimone.no/preview/*`.
5. Create a simple allow policy for the approved reviewer emails.
6. Keep `/` public. Do not protect the whole hostname.

## Expected behavior
- `https://soundofsimone.no/` is public.
- `https://soundofsimone.no/preview/` prompts for Cloudflare Access.
- Preview pages send `noindex, nofollow`.
- CMS editing continues on `https://dev.sound-of-simone-dev.pages.dev/admin/`.
