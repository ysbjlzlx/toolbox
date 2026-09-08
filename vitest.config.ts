import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config.ts";
import { playwright } from '@vitest/browser-playwright'

const vitestConfig = defineConfig({
  test: {
    projects:[
      {
        test:{
          environment: "jsdom",
          globals: true,
          setupFiles: "./src/setupTests.ts",
          css: true,
          include: [
            'tests/unit/**/*.{test,spec}.ts',
            'tests/**/*.unit.{test,spec}.ts',
          ],
        }},
      {
        test: {
          // an example of file based convention,
          // you don't have to follow it
          include: [
            'tests/browser/**/*.{test,spec}.ts',
            'tests/browser/**/*.browser.{test,spec}.ts',
            '**/*.browser.{test,spec}.tsx',
          ],
          name: 'browser',
          browser: {
            enabled: true,
            provider: playwright(),
            instances: [
              { browser: 'chromium' },
            ],
          },
        },
      }
    ],
  },
});

export default mergeConfig(viteConfig, vitestConfig);
