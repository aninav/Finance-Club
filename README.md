# CHS Finance Club — Website

A sleek Next.js 14 website for the Colleyville Heritage High School Finance Club.

**Live demo:** [chsfinance.vercel.app](https://chsfinance.vercel.app) *(after deploy)*

---

## Tech stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 14 (App Router) | Fast, SEO-friendly, Vercel-native |
| Styling | Tailwind CSS | Utility-first, easy to customize |
| Animations | Framer Motion | Smooth section reveals |
| Theme | next-themes | Dark/light toggle, no flash |
| Icons | Lucide React | Clean, consistent icon set |
| Ticker data | Twelve Data API | Free tier, real-time quotes |

---

## Getting started locally

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_ORG/chs-finance.git
cd chs-finance

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# → Edit .env.local and add your Twelve Data API key

# 4. Run the dev server
npm run dev
# → Open http://localhost:3000
```

### Get a free Twelve Data API key
1. Sign up at [twelvedata.com](https://twelvedata.com)
2. Copy your key from the dashboard
3. Add it to `.env.local` as `NEXT_PUBLIC_TWELVE_DATA_KEY`

The ticker gracefully falls back to static placeholder prices if no key is provided.

---

## Deploy to Vercel (5 minutes)

### Option A — GitHub → Vercel (recommended)

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repo
4. Add environment variables:
   - `NEXT_PUBLIC_TWELVE_DATA_KEY` → your Twelve Data key
5. Click **Deploy** — Vercel auto-detects Next.js

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel
# Follow prompts — it will ask you to link to your Vercel account
```

### Custom domain
In your Vercel project → **Settings → Domains**, add:
- `chsfinance.com` (or whatever domain you purchase)
- Vercel gives you free HTTPS automatically

---

## Project structure

```
chs-finance/
├── app/
│   ├── layout.tsx          # Root layout — Navbar, Ticker, Footer
│   ├── page.tsx            # Home page (all sections assembled)
│   ├── globals.css         # Tailwind base + custom classes
│   └── api/
│       └── newsletter/
│           └── route.ts    # Newsletter signup API route
├── components/
│   ├── Navbar.tsx          # Sticky nav + dark/light toggle
│   ├── Ticker.tsx          # Live stock ticker bar
│   ├── Hero.tsx            # Hero section
│   ├── FinalCard.tsx       # Stats card + Finora link
│   ├── About.tsx           # What we do
│   ├── Team.tsx            # Leadership grid
│   ├── HowToJoin.tsx       # 3-step join flow
│   ├── Resources.tsx       # Presentation links
│   ├── InstagramFeed.tsx   # IG grid + follow link
│   ├── Contact.tsx         # Email + newsletter signup
│   ├── Footer.tsx          # Footer links
│   └── ThemeProvider.tsx   # next-themes wrapper
├── tailwind.config.ts      # Custom green palette + fonts
├── next.config.js
└── .env.example            # Environment variable template
```

---

## Customization guide

### Update team members
Edit the `members` array in `components/Team.tsx`.

### Add meeting resources
Add objects to the `resources` array in `components/Resources.tsx`.

### Enable real Instagram feed
The Instagram Basic Display API requires app review. The easiest free alternative:
1. Sign up at [behold.so](https://behold.so) (free tier: 1 feed)
2. Connect your Instagram account
3. Copy the embed snippet into `components/InstagramFeed.tsx`

### Enable newsletter
In `app/api/newsletter/route.ts`, uncomment the Resend or Mailchimp block and add the relevant env vars to Vercel.

### Add 21st.dev components
Browse [21st.dev](https://21st.dev), copy any component, and drop it into `components/`. The dark green color scheme already matches — just swap Tailwind classes to use `emerald-*` and `forest-*` tokens.

---

## Color tokens (Tailwind)

| Token | Hex | Use |
|---|---|---|
| `forest-900` | `#0a1a0f` | Page background |
| `forest-800` | `#0d1f12` | Ticker background |
| `emerald-mid` | `#4caf50` | Primary accent, buttons |
| `emerald-DEFAULT` | `#66bb6a` | Hover states, links |
| `emerald-light` | `#a5d6a7` | Body text on dark |

---

## License
MIT — built for CHS Finance Club.
