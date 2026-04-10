const steps = [
  {
    num: '01',
    title: 'Sign the consent form',
    body: 'Complete the parent/guardian consent form — takes under two minutes.',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSfY792Mh4b8EXYZl7MO_IkdKYurkv64Tc2lVJQAYGoFqf70KA/viewform',
    cta: 'Open form',
  },
  {
    num: '02',
    title: 'Join the Schoology course',
    body: 'Use our Schoology course code to access meeting recaps, resources, and updates.',
    link: null,
    cta: 'Get the code →',
  },
  {
    num: '03',
    title: 'Show up',
    body: 'Come to the next meeting — no experience required. Just bring your curiosity.',
    link: null,
    cta: null,
  },
]

export default function HowToJoin() {
  return (
    <section id="join" className="px-8 lg:px-16 py-20 border-b border-emerald-mid/8">
      <p className="section-label">Join</p>
      <h2 className="section-heading">Three steps to get started</h2>
      <p className="section-sub">
        Free and open to all CHS students, regardless of prior finance knowledge.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {steps.map((s) => (
          <div key={s.num} className="card p-6 flex gap-5">
            <span className="font-serif text-3xl text-emerald-mid/25 leading-none shrink-0">
              {s.num}
            </span>
            <div>
              <h3 className="text-sm font-medium text-emerald-light mb-2">{s.title}</h3>
              <p className="text-[13px] text-emerald-light/50 leading-relaxed mb-4">{s.body}</p>
              {s.link && (
                <a
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] text-emerald-DEFAULT hover:text-emerald-light transition-colors"
                >
                  {s.cta} ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
