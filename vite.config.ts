import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({ registerType: 'autoUpdate' })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'build',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'pro-components': ['@ant-design/pro-components'],
          antd: ['antd'],
          ace: ['ace-builds', 'react-ace'],
          jsoneditor: ['vanilla-jsoneditor'],
        },
      },
    },
  },
});
