'use client'
import { Instagram } from 'lucide-react'
import Script from 'next/script'

// ─────────────────────────────────────────────────────────────
// SETUP (one-time, 2 minutes):
// 1. Go to https://behold.so and sign up (free)
// 2. Connect @chs_finance_club_ Instagram account
// 3. Create a feed → copy the Feed ID
// 4. Paste it into BEHOLD_FEED_ID below
// ─────────────────────────────────────────────────────────────
const BEHOLD_FEED_ID = 'hHFDDbltvdTMpw9rKGu5'


export default function InstagramFeed() {
  return (
    <section id="instagram" className="px-8 lg:px-16 py-20 border-b border-emerald-mid/8">
      <p className="section-label">Instagram</p>
      <h2 className="section-heading">Follow along</h2>
      <p className="section-sub">
        Stay up to date with meeting recaps, finance insights, and club news{' '}
        <a
          href="https://www.instagram.com/chs_finance_club_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-DEFAULT hover:underline"
        >
          @chs_finance_club_
        </a>
      </p>

      {IS_CONFIGURED ? (
        <>
          {/* Live Behold feed */}
          <div className="mb-8">
            {/* @ts-ignore — behold-widget is a custom element */}
            <behold-widget feed-id={BEHOLD_FEED_ID} />
          </div>
          <Script src="https://w.behold.so/widget.js" strategy="lazyOnload" />
        </>
      ) : (
        /* Placeholder grid shown until Behold is configured */
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <a
              key={i}
              href="https://www.instagram.com/chs_finance_club_"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square card flex items-center justify-center text-emerald-light/15 hover:border-emerald-mid/25 hover:text-emerald-light/30 transition-all"
            >
              <Instagram size={28} />
            </a>
          ))}
        </div>
      )}

      <a
        href="https://www.instagram.com/chs_finance_club_"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 btn-ghost text-sm"
      >
        <Instagram size={14} /> View on Instagram
      </a>
    </section>
  )
}
