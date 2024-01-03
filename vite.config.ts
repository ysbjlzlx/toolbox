import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
