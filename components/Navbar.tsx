'use client'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#team', label: 'Team' },
  { href: '#join', label: 'Join' },
  { href: '#resources', label: 'Resources' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handler = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`
        sticky top-0 z-50 flex items-center justify-between px-8 lg:px-12 py-4
        border-b border-emerald-mid/[0.12] transition-all duration-300
        ${scrolled ? 'bg-forest-900/95 backdrop-blur-md' : 'bg-transparent'}
      `}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 group">
        <div className="w-8 h-8 bg-emerald-mid rounded-md flex items-center justify-center font-serif text-forest-900 text-base select-none">
          ₣
        </div>
        <span className="text-[15px] font-medium text-emerald-light/90 tracking-wide">
          CHS Finance Club
        </span>
      </Link>

      {/* Nav links */}
      <ul className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-[13px] text-emerald-light/55 hover:text-emerald-DEFAULT transition-colors tracking-wide"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Theme toggle */}
      {mounted && (
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="flex items-center gap-2 px-3 py-1.5 text-[12px] border border-emerald-mid/30 rounded-full text-emerald-DEFAULT hover:bg-emerald-mid/10 transition-all"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={13} /> : <Moon size={13} />}
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      )}
    </nav>
  )
}
