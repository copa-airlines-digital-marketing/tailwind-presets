import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  build: { lib: { entry: resolve(import.meta.dirname, 'src/index.ts'), formats: ['es'] } },
  resolve: { alias: { src: resolve('src/') } },
  test: {
    setupFiles: ['./tests/setupTests.ts'],
    coverage: {
      exclude: ['*.config.*', '*.d.ts'],
    },
  },
});
