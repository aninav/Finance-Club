const members = [
  {
    initials: 'SS',
    name: 'Shaurya Saxena',
    role: 'Founder & VP',
    color: 'bg-emerald-dark/30 text-emerald-DEFAULT border border-emerald-mid/25',
  },
  {
    initials: 'SC',
    name: 'Shourya Chawla',
    role: 'Co-Founder & President',
    color: 'bg-blue-900/30 text-blue-400 border border-blue-800/30',
  },
  {
    initials: 'AN',
    name: 'Ani Naveen',
    role: 'Chief Technology Officer',
    color: 'bg-teal-900/30 text-teal-400 border border-teal-800/30',
  },
]

export default function Team() {
  return (
    <section id="team" className="px-8 lg:px-16 py-20 border-b border-emerald-mid/8">
      <p className="section-label">Leadership</p>
      <h2 className="section-heading">Meet the team</h2>
      <p className="section-sub">
        Run by students, for students. Our leadership brings a genuine passion for finance and a
        commitment to making it accessible for everyone.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
        {members.map((m) => (
          <div key={m.name + m.role} className="card p-6 text-center">
            <div
              className={`w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center font-serif text-xl ${m.color}`}
            >
              {m.initials}
            </div>
            <p className="text-[13px] font-medium text-emerald-light">{m.name}</p>
            <p className="text-[11px] text-emerald-light/40 mt-1">{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
