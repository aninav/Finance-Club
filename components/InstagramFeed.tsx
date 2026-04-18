'use client'
import Script from 'next/script'
import { Instagram } from 'lucide-react'

const BEHOLD_FEED_ID = 'hHFDDbltvdTMpw9rKGu5'

export default function InstagramFeed() {
  return (
    <section id="instagram" className="px-8 lg:px-16 py-20 border-b border-emerald-mid/8">
      <p className="section-label">Instagram</p>
      <h2 className="section-heading">Follow along</h2>
      <p className="section-sub">
        Stay up to date with meeting recaps, finance insights, and club news{' '}
        
          href="https://www.instagram.com/chs_finance_club_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-DEFAULT hover:underline"
        >
          @chs_finance_club_
        </a>
      </p>

      <div className="mb-8">
        <behold-widget feed-id={BEHOLD_FEED_ID} />
      </div>
      <Script src="https://w.behold.so/widget.js" strategy="lazyOnload" />

      
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