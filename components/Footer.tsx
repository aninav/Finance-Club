import Link from 'next/link'
import { Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-emerald-mid/10 px-8 lg:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-[12px] text-emerald-light/25">
        © {new Date().getFullYear()} CHS Finance Club · Colleyville Heritage High School
      </p>

      <div className="flex items-center gap-6">
        <a
          href="https://www.instagram.com/chs_finance_club_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] text-emerald-light/30 hover:text-emerald-DEFAULT transition-colors flex items-center gap-1"
        >
          <Instagram size={12} /> Instagram
        </a>
        <a
          href="https://finorafinance.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] text-emerald-light/30 hover:text-emerald-DEFAULT transition-colors"
        >
          Finora
        </a>
        <a
          href="mailto:chsfinanceclub@gmail.com"
          className="text-[12px] text-emerald-light/30 hover:text-emerald-DEFAULT transition-colors"
        >
          Contact
        </a>
      </div>
    </footer>
  )
}
