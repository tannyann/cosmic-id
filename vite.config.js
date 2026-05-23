import { defineConfig } from 'vite';

/** GitHub Pages では VITE_BASE=/リポジトリ名/ を CI で渡す */
const base = process.env.VITE_BASE || './';

export default defineConfig({
  base,
  server: {
    port: 5173,
    strictPort: true,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});
