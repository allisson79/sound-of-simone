# Onboarding Summary - Sound of Simone

Generated: 2026-03-11

## Decision Summary
- Client ID: `sound-of-simone`
- Brand: `Sound of Simone`
- Repo: `allisson79/sound-of-simone-site`
- Domains:
  - Production: `pending-domain.example`
  - DEV: `dev.sound-of-simone-dev.pages.dev`
  - CMS proxy: `decap.soundofsimone.no`
- Language mode: `single`
- Theme preset: `wellness`
- Own-editing level: `medium`
- Selected modules: hero, proof_strip, service_cards, rich_text, gallery, contact_block, cta_band

## Technical Status
- Client config generated: `sound-of-simone`
- DEV Pages project: `sound-of-simone-dev`
- PROD Pages project: `sound-of-simone-main`
- Files generated:
- `config/client.config.json`
- `src/data/site-settings.json`
- `src/data/page-modules/home.json`
- `docs/client/onboarding-checklist.md`
- `public/admin/config.yml`
- `public/_headers`

## Design Direction
- Style direction: Editorial and clean
- Visual weight: balanced
- Notes: Not provided

## Timeline
- Go-live target: DEV klart innen 24 timer fra onboarding
- Milestones:
- DEV preview: TBD
- Production launch: TBD

## Social Feed / Taggbox
- Enabled: No
- Provider: taggbox
- Widget ID: Not set
- Profile sources: None
- Refresh cadence: daily

## TODO - You
- Set GitHub variables: `CF_PAGES_DEV_PROJECT`, `CF_PAGES_PROD_PROJECT`.
- Ensure shared OAuth worker `ALLOWED_ORIGINS` has production + www + localhost.
- Ensure worker `DEV_ORIGIN_REGEX` allows `*-dev.pages.dev`.
- Run `npm run client:onboard:smoke -- config/intake/sound-of-simone.json`.

## TODO - Customer
- Provide final logo/image assets.
- Confirm approved module set and textual copy.
- Confirm Taggbox widget ID and social sources if social feed is enabled.

## Missing Clarifications
- Design notes are empty.
