const pillars = [
  {
    icon: '📈',
    title: 'Markets & Investing',
    body: 'Equity analysis, ETFs, bonds, and portfolio theory — grounded in how real markets work day to day.',
  },
  {
    icon: '🧮',
    title: 'Quantitative Finance',
    body: 'Intro to data-driven decision making, financial modeling, and the math behind modern finance.',
  },
  {
    icon: '💼',
    title: 'Career Preparation',
    body: 'Networking, interview skills, and clear pathways into finance, banking, consulting, and beyond.',
  },
]

export default function About() {
  return (
    <section id="about" className="px-8 lg:px-16 py-20 border-b border-emerald-mid/8">
      <p className="section-label">About</p>
      <h2 className="section-heading">What we do</h2>
      <p className="section-sub">
        We break down complex financial concepts into clear, actionable knowledge — from reading
        earnings reports to understanding Federal Reserve policy.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {pillars.map((p) => (
          <div key={p.title} className="card p-6">
            <div className="w-10 h-10 rounded-lg bg-emerald-mid/10 flex items-center justify-center text-xl mb-5">
              {p.icon}
            </div>
            <h3 className="text-sm font-medium text-emerald-light mb-2">{p.title}</h3>
            <p className="text-[13px] text-emerald-light/50 leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
