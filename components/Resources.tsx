import { FileText, Presentation, ExternalLink } from 'lucide-react'

const resources = [
  {
    icon: Presentation,
    title: 'Financial Success — Day One Slides',
    desc: 'Opening session deck covering financial foundations.',
    href: 'https://docs.google.com/presentation/d/1Re-4mejTH-bddI54DUdWTEizK3OPL--euUI7QXeUmL4/edit',
  },
  {
    icon: Presentation,
    title: '1st Club Meeting Presentation',
    desc: 'Slides from our inaugural meeting — mission, structure, and roadmap.',
    href: 'https://www.canva.com/design/DAGzW9IHfSU/tD2iUppPs2awq-0TShrofw/edit',
  },
  {
    icon: FileText,
    title: 'Feedback & Concerns Form',
    desc: 'Share questions or suggestions with club leadership.',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSexYQ0ARxAHBmA_uqhd-rPuw_fGLus9yEOX8DH6V3b2QLlaUA/viewform',
  },
]

export default function Resources() {
  return (
    <section id="resources" className="px-8 lg:px-16 py-20 border-b border-emerald-mid/8">
      <p className="section-label">Resources</p>
      <h2 className="section-heading">Club materials</h2>
      <p className="section-sub">
        Slides, forms, and guides from our meetings — all in one place.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {resources.map((r) => {
          const Icon = r.icon
          return (
            <a
              key={r.title}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 hover:border-emerald-mid/30 hover:bg-white/[0.04] transition-all group"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-10 h-10 rounded-lg bg-emerald-mid/10 flex items-center justify-center">
                  <Icon size={18} className="text-emerald-DEFAULT" />
                </div>
                <ExternalLink
                  size={13}
                  className="text-emerald-light/20 group-hover:text-emerald-DEFAULT transition-colors mt-1"
                />
              </div>
              <h3 className="text-sm font-medium text-emerald-light mb-2">{r.title}</h3>
              <p className="text-[12px] text-emerald-light/45 leading-relaxed">{r.desc}</p>
            </a>
          )
        })}
      </div>
    </section>
  )
}
