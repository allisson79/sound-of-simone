#!/bin/bash

# Deploy current Astro build to Cloudflare Pages DEV project.

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

if [ ! -d "node_modules" ]; then
  echo "Installing dependencies (node_modules missing)..."
  npm ci
fi

echo "Building site..."
npm run build

echo "Deploying to Cloudflare Pages DEV project (sound-of-simone-dev)..."
npx wrangler pages deploy dist --project-name sound-of-simone-dev --branch main

echo "DEV deploy completed."
