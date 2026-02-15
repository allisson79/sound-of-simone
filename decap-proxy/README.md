# Decap CMS OAuth Proxy Worker

This Cloudflare Worker handles GitHub OAuth authentication for Decap CMS.

## Setup

1. **Create a GitHub OAuth Application** at https://github.com/settings/developers/new
   - **Application name**: Sound of Simone CMS
   - **Homepage URL**: `https://soundofsimone.no`
   - **Authorization callback URL**: `https://decap.soundofsimone.no/callback`

2. **Install dependencies**:
   ```bash
   cd decap-proxy
   npm install
   ```

3. **Configure secrets**:
   ```bash
   npx wrangler secret put OAUTH_CLIENT_ID
   # Paste your GitHub OAuth App Client ID
   
   npx wrangler secret put OAUTH_CLIENT_SECRET
   # Paste your GitHub OAuth App Client Secret
   ```

4. **Deploy the worker**:
   ```bash
   npm run deploy
   ```

5. **Set up custom domain** in Cloudflare Dashboard:
   - Go to Workers & Pages > decap-oauth-proxy > Settings > Domains & Routes
   - Add custom domain: `decap.soundofsimone.no`

## Testing Locally

```bash
npm run dev
```

## Environment Variables

- `OAUTH_CLIENT_ID` - GitHub OAuth App Client ID (secret)
- `OAUTH_CLIENT_SECRET` - GitHub OAuth App Client Secret (secret)
