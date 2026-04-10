'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import FinalCard from './FinalCard'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function Hero() {
  return (
    <section className="min-h-[88vh] px-8 lg:px-16 pt-20 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-b border-emerald-mid/10">
      {/* Left */}
      <div>
        <motion.div {...fade(0.05)} className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-DEFAULT animate-pulse" />
          <span className="text-[11px] tracking-[0.12em] uppercase text-emerald-DEFAULT font-medium">
            Colleyville Heritage High School
          </span>
        </motion.div>

        <motion.h1
          {...fade(0.15)}
          className="font-serif text-5xl lg:text-6xl leading-[1.08] text-slate-50 mb-6 font-normal"
        >
          Master the{' '}
          <em className="text-emerald-DEFAULT not-italic">language</em>
          <br />
          of money.
        </motion.h1>

        <motion.p {...fade(0.25)} className="text-[16px] text-emerald-light/60 leading-relaxed max-w-md mb-10">
          CHS Finance Club equips students with real-world financial literacy, investing
          fundamentals, and the analytical edge for careers in finance.
        </motion.p>

        <motion.div {...fade(0.35)} className="flex flex-wrap gap-4">
          <a href="#join" className="btn-primary">Join the Club</a>
          <a href="#about" className="btn-ghost">Learn more</a>
        </motion.div>
      </div>

      {/* Right — info card */}
      <motion.div {...fade(0.2)}>
        <FinalCard />
      </motion.div>
    </section>
  )
}
