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
  },
  test: {
    // .claude/worktrees(エージェントの一時作業ツリー)内のテスト複製を拾わない。
    // 拾うとテスト数が水増しされ、実行時間とレポートの信頼性を損なう。
    exclude: ['**/node_modules/**', '**/dist/**', '.claude/**']
  }
});
