import { Instagram } from 'lucide-react'

// Note: Replace these with real Instagram embed URLs or use an Instagram Basic Display API
// integration once you have access. For now, this links out to the profile.
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

      {/* 
        To show a real feed, integrate Behold.so (free tier) or EmbedSocial.
        Add your widget script here. Example using Behold:
        <div id="behold-widget" data-feed-id="YOUR_FEED_ID" />
        <script src="https://w.behold.so/widget.js" type="module" />
        
        For now we render a 4-tile placeholder grid that links to the profile.
      */}
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
