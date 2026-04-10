import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

const stats = [
  { val: '2024', lbl: 'Founded' },
  { val: 'Weekly', lbl: 'Meetings' },
  { val: 'Free', lbl: 'Membership' },
  { val: 'All grades', lbl: 'Open to' },
]

export default function FinalCard() {
  return (
    <div className="rounded-2xl border border-emerald-mid/15 bg-white/[0.025] p-7 space-y-5">
      <p className="text-[11px] tracking-[0.1em] uppercase text-emerald-light/35">Club at a glance</p>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((s) => (
          <div key={s.lbl} className="bg-white/[0.03] border border-emerald-mid/10 rounded-xl p-4">
            <p className="text-2xl font-medium text-emerald-light">{s.val}</p>
            <p className="text-[11px] text-emerald-light/35 mt-1">{s.lbl}</p>
          </div>
        ))}
      </div>

      {/* Finora card */}
      <a
        href="https://finorafinance.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 p-4 rounded-xl border border-emerald-mid/20 bg-emerald-mid/[0.07] hover:bg-emerald-mid/[0.12] transition-colors group"
      >
        <div className="w-10 h-10 rounded-lg bg-emerald-dark flex items-center justify-center text-xl shrink-0">
          🤖
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-emerald-light">Try Finora</p>
          <p className="text-[11px] text-emerald-light/40">AI-powered financial literacy platform</p>
        </div>
        <ExternalLink size={14} className="text-emerald-light/30 group-hover:text-emerald-DEFAULT transition-colors shrink-0" />
      </a>
    </div>
  )
}
