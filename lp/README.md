# PolyLingo — Landing Page

Next.js 14 (App Router) + Tailwind CSS 事前登録 LP for [PolyLingo](https://polylingo.app).

## Setup

```bash
cd lp
npm install
cp .env.example .env.local
# .env.local を編集
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes | Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Recommended | Server-side signup insert |
| `RESEND_API_KEY` | Yes (prod) | Confirmation email |
| `RESEND_FROM_EMAIL` | Yes (prod) | Sender address |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Optional | Plausible analytics |

## Deploy to Vercel (T-LP-014)

### 1. Push & import

```bash
# リポジトリ root が cosmic_id の場合
vercel --cwd lp
```

Vercel Dashboard → **Add New Project** → GitHub リポジトリを選択。

### 2. Project settings

| Setting | Value |
| --- | --- |
| **Root Directory** | `lp` |
| **Framework Preset** | Next.js (auto) |
| **Node.js Version** | 20.x |
| **Region** | Tokyo (hnd1) — `vercel.json` で設定済み |

### 3. Environment variables

Vercel Dashboard → Settings → Environment Variables に `.env.example` の全項目を **Production** に設定。

### 4. Custom domain

Settings → Domains → `polylingo.app` を追加。

DNS（レジストラ側）:

```
Type  Name  Value
A     @     76.76.21.21
CNAME www   cname.vercel-dns.com
```

### 5. Supabase setup

SQL Editor で `signups` テーブル + RLS を作成（`docs/05_LP_SPEC.md` Section 5 参照）。

### 6. Verify production

```bash
curl -I https://polylingo.app
# → 200 OK, security headers present

# Signup API smoke test
curl -X POST https://polylingo.app/api/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","mother_tongue":"日本語","target_languages":["en"]}'
```

## Structure

```
lp/
├── app/                  # App Router, API routes, OG image
├── components/           # Section components
├── emails/               # React Email templates
├── lib/                  # copy, analytics, supabase, constructs
├── data/                 # constructs_month1.json
└── vercel.json           # Deploy config (region, headers)
```

## Tickets (all complete)

| ID | Content |
| --- | --- |
| T-LP-001〜003 | Setup, design system, Hero |
| T-LP-004〜005 | Problem, Solution, Interactive Demo |
| T-LP-006〜007 | Curriculum, Comparison, Coming Features, Founder |
| T-LP-008〜009 | FAQ, Signup form + Supabase API |
| T-LP-010〜012 | Resend email, SEO/OGP, Analytics |
| T-LP-013 | Mobile sticky CTA, a11y, reduced motion |
| T-LP-014 | Vercel config, robots/sitemap, deploy docs |

## Accessibility (T-LP-013)

- Skip-to-content link
- WCAG AA focus rings (`ring-navy`)
- Form labels + `aria-describedby` error association
- `prefers-reduced-motion` support
- 44px+ touch targets on mobile
- Sticky CTA bar (mobile only, hides at signup form)
