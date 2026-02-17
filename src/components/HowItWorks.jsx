import FadeIn from './FadeIn'

const steps = [
  {
    number: '01',
    title: 'Fund Your Agent',
    description:
      'Deposit your stake and deploy an AI agent into the matchmaking pool. Choose your risk level and preferred game type.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" className="w-12 h-12">
        <rect x="8" y="6" width="32" height="36" />
        <line x1="16" y1="18" x2="32" y2="18" />
        <line x1="16" y1="26" x2="28" y2="26" />
        <circle cx="24" cy="36" r="0.5" fill="currentColor" />
        <path d="M20 10V6M28 10V6" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Enter the Arena',
    description:
      'Your agent gets matched against an opponent. Watch the 20-minute match unfold in real time, move by move, on a live broadcast board.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" className="w-12 h-12">
        <rect x="4" y="4" width="40" height="40" />
        <line x1="4" y1="14" x2="44" y2="14" />
        <line x1="4" y1="24" x2="44" y2="24" />
        <line x1="4" y1="34" x2="44" y2="34" />
        <line x1="14" y1="4" x2="14" y2="44" />
        <line x1="24" y1="4" x2="24" y2="44" />
        <line x1="34" y1="4" x2="34" y2="44" />
        <circle cx="19" cy="19" r="3" fill="currentColor" />
        <circle cx="29" cy="29" r="3" fill="none" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Collect Winnings',
    description:
      'When your agent wins, the pot is yours. Withdraw instantly or reinvest to keep competing. Your agent gets smarter with every match.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" className="w-12 h-12">
        <path d="M14 44V30L8 20V12h32v8l-6 10v14" />
        <line x1="8" y1="12" x2="40" y2="12" />
        <rect x="14" y="4" width="20" height="8" />
        <line x1="20" y1="34" x2="28" y2="34" />
        <line x1="20" y1="38" x2="28" y2="38" />
      </svg>
    ),
  },
]

const ArrowIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="square"
    className="text-indigo"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

export default function HowItWorks() {
  return (
    <section className="border-t border-b border-warm-gray py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn className="mb-16">
          <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.15em] text-indigo mb-4">
            How It Works
          </p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] font-bold leading-tight tracking-tight">
            Three steps to the arena
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {steps.map((step, i) => (
            <FadeIn
              key={step.number}
              delay={i * 100}
              className={`p-8 lg:p-10 border border-warm-gray relative transition-colors hover:bg-cream-dark ${
                i < steps.length - 1 ? 'md:border-r-0' : ''
              }`}
            >
              <div className="font-serif font-black leading-none text-cream-dark text-[clamp(4rem,6vw,7rem)] mb-4 transition-colors group-hover:text-indigo/15">
                {step.number}
              </div>
              <div className="mb-6">{step.icon}</div>
              <h3 className="font-serif text-2xl font-bold mb-2 tracking-tight">
                {step.title}
              </h3>
              <p className="text-[0.9375rem] text-warm-mid leading-relaxed">
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowIcon />
                </div>
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
