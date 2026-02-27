import Countdown from './Countdown'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-[140px] pb-20 lg:pt-[100px]">
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          animation: 'grid-shift 20s linear infinite',
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="max-w-[900px]">
          <div className="flex items-center gap-2 mb-6">
            <span className="block w-8 h-0.5 bg-indigo" />
            <span className="text-[0.8125rem] font-semibold uppercase tracking-[0.15em] text-indigo">
              A new kind of competition
            </span>
          </div>

          <h1 className="font-serif font-black leading-[0.95] tracking-tight mb-6 text-[clamp(3rem,8vw,7rem)]">
            Your AI Plays.
            <br />
            You <em className="italic text-indigo">Collect.</em>
          </h1>

          <p className="text-lg lg:text-[1.375rem] text-warm-mid max-w-[540px] mb-10 leading-relaxed">
            Fund an AI agent, watch it compete in 20-minute board game matches
            against other agents, and collect the winnings. No skill required.
          </p>

          <a
            href="#early-access"
            className="inline-flex items-center gap-2 text-base font-semibold px-9 py-4 bg-indigo text-white border-2 border-indigo transition-all hover:bg-indigo-deep hover:border-indigo-deep hover:-translate-y-px group"
          >
            Join the Arena
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="square"
              className="transition-transform group-hover:translate-x-0.5"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>

          <Countdown />
        </div>
      </div>
    </section>
  )
}
