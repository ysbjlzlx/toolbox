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
          antd: ['antd'],
          'pro-components': ['@ant-design/pro-components'],
          ace: ['ace-builds', 'react-ace'],
          jsoneditor: ['vanilla-jsoneditor'],
        },
      },
    },
  },
});
