# vitest と vite のメジャー不一致が CI の `npm ci` だけを壊す

## 症状

ローカルの `npm ci` / `npm test` / `npm run build` は全て成功するのに、
GitHub Actions のデプロイだけが毎回失敗する(push のたびに failure メールが届く)。

```
npm error `npm ci` can only install packages when your package.json and
package-lock.json ... are in sync.
npm error Missing: esbuild@0.28.1 from lock file
```

## 原因

`vitest@4` は **vite `^6 || ^7 || ^8`** を要求するが、本プロジェクトの vite は **5.4.x**。
この不一致のため npm は `node_modules/vitest/node_modules/vite`(v8)という**2つ目の vite を入れ子で**
インストールする。入れ子 vite 8 が必要とする **esbuild 0.28.1 が lockfile に記録されない**まま、
入れ子 vite だけが記録される、という中途半端な lockfile ができていた。

- ローカル(Node 26 / npm 11)はこの欠落を許容して解決してしまう → 成功する
- CI(Node 20 / npm 10)は欠落を厳格に拒否する → `npm ci` が落ちる

**「ローカルで通るのに CI だけ落ちる」ときは npm のメジャーバージョン差を疑う。**

## 対処(2026-07-26)

`vitest@^3` へ揃えた(vitest 3 は vite ^5 を許容するため vite が1つになる)。
本番ビルドの vite 5 を動かさない方が影響が小さいと判断した(逆に vite を 7/8 へ上げると
`vite.config.js`・base パス・PWA まわりの再検証が必要になる)。

結果: 入れ子 vite が消滅し lockfile が整合。`npm ci` / `npm test`(98 pass) / `npm run build` すべて成功。

## 再発防止

- devDependency を足したら **`npm ci` を必ず1回走らせて**から push する(`npm install` だけでは lockfile の欠落に気づけない)
- テストツールを上げるときは **peerDependencies の vite 範囲**を先に確認する
