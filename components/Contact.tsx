'use client'
import { useState } from 'react'
import { Mail, Instagram, Send } from 'lucide-react'

// ── Update these to your real contact details ──
const CONTACT_EMAIL = 'fifowealthy@gmail.com'   // ← change to your new email
const INSTAGRAM_HANDLE = '@chs_finance_club_'
const INSTAGRAM_URL = 'https://www.instagram.com/chs_finance_club_'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || status === 'loading') return

    setStatus('loading')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setStatus('sent')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="px-8 lg:px-16 py-20">
      <p className="section-label">Contact</p>
      <h2 className="section-heading">Stay connected</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact links */}
        <div>
          <p className="text-[15px] text-emerald-light/55 leading-relaxed mb-8">
            Questions about the club? Reach out to our leadership team directly or follow us on
            Instagram for the latest updates.
          </p>

          <div className="space-y-4">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-3 text-[13px] text-emerald-DEFAULT hover:text-emerald-light transition-colors"
            >
              <Mail size={15} /> {CONTACT_EMAIL}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[13px] text-emerald-DEFAULT hover:text-emerald-light transition-colors"
            >
              <Instagram size={15} /> {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <p className="text-[11px] tracking-[0.1em] uppercase text-emerald-light/35 mb-5">
            Newsletter
          </p>
          {status === 'sent' ? (
            <p className="text-[14px] text-emerald-DEFAULT">
              ✓ You're on the list — we'll be in touch!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                disabled={status === 'loading'}
                className="flex-1 px-4 py-3 bg-white/[0.04] border border-emerald-mid/20 rounded-md text-[13px] text-emerald-light placeholder-emerald-light/25 focus:outline-none focus:border-emerald-mid/50 transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary flex items-center gap-2 whitespace-nowrap disabled:opacity-50"
              >
                <Send size={13} />
                {status === 'loading' ? 'Sending...' : 'Subscribe'}
              </button>
            </form>
          )}
          {status === 'error' && (
            <p className="text-[12px] text-red-400 mt-2">
              Something went wrong — email us directly instead.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
