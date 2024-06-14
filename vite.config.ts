import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import svgr from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    open: true,
    port: 3000,
  },
  optimizeDeps: {
    include: ['axios'],
  },
  plugins: [
    react(),
    viteTsconfigPaths(),
    svgr(),
    nodePolyfills({
      protocolImports: true,
    }),
  ],
});
