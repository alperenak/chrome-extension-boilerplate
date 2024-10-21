import { crx, ManifestV3Export } from '@crxjs/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

import manifest from './manifest.json';

export default defineConfig({
  plugins: [svgr(), react(), crx({ manifest: manifest as unknown as ManifestV3Export })],
  server: {
    port: 3000,
  },
});
