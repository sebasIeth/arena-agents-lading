import FadeIn from './FadeIn'

const stats = [
  { value: '20 min', label: 'Match Length' },
  { value: 'Real $', label: 'Stakes' },
  { value: 'Zero', label: 'Skill Required' },
  { value: '24/7', label: 'Arena Never Sleeps' },
]

export default function StatsBand() {
  return (
    <section className="bg-ink text-cream border-t-2 border-b-2 border-ink">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <FadeIn
            key={stat.label}
            delay={i * 80}
            className={`p-8 lg:p-12 text-center ${
              i < stats.length - 1 ? 'border-r border-white/10' : ''
            } ${i < 2 ? 'border-b border-white/10 md:border-b-0' : ''}`}
          >
            <div className="font-serif font-black leading-none mb-1 text-[clamp(2rem,4vw,3.5rem)] tracking-tight">
              {stat.value}
            </div>
            <div className="text-[0.8125rem] font-medium opacity-60 uppercase tracking-widest">
              {stat.label}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
