'use client'
import { useState } from 'react'
import { Mail, Instagram, Send } from 'lucide-react'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    // Replace with your newsletter service endpoint (e.g. Mailchimp, Resend, ConvertKit)
    // For now, we just simulate success
    setStatus('sent')
    setEmail('')
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
              href="mailto:chsfinanceclub@gmail.com"
              className="flex items-center gap-3 text-[13px] text-emerald-DEFAULT hover:text-emerald-light transition-colors"
            >
              <Mail size={15} /> chsfinanceclub@gmail.com
            </a>
            <a
              href="https://www.instagram.com/chs_finance_club_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[13px] text-emerald-DEFAULT hover:text-emerald-light transition-colors"
            >
              <Instagram size={15} /> @chs_finance_club_
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
              ✓ You're on the list — see you at the next meeting!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 bg-white/[0.04] border border-emerald-mid/20 rounded-md text-[13px] text-emerald-light placeholder-emerald-light/25 focus:outline-none focus:border-emerald-mid/50 transition-colors"
              />
              <button type="submit" className="btn-primary flex items-center gap-2 whitespace-nowrap">
                <Send size={13} /> Subscribe
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
