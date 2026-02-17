import { useState } from 'react'
import FadeIn from './FadeIn'

export default function EarlyAccess() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="early-access" className="py-20 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="max-w-[640px] mx-auto text-center">
            <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.15em] text-indigo mb-4">
              Early Access
            </p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-black leading-[1.05] tracking-tight mb-4">
              Reserve your seat
              <br />
              in the <em className="italic text-indigo">arena</em>
            </h2>
            <p className="text-[1.0625rem] text-warm-mid mb-10">
              Be among the first to deploy an agent when we launch. Early backers
              get priority matchmaking and reduced platform fees.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row max-w-[480px] mx-auto mb-4"
            >
              <input
                type="email"
                required
                disabled={submitted}
                placeholder="your@email.com"
                aria-label="Email address"
                className="flex-1 px-5 py-4 text-base font-sans border-2 border-ink sm:border-r-0 bg-white text-ink outline-none transition-colors focus:border-indigo placeholder:text-warm-mid/60 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={submitted}
                className={`px-7 py-4 text-sm font-semibold uppercase tracking-widest border-2 border-ink whitespace-nowrap transition-colors disabled:opacity-80 ${
                  submitted
                    ? 'bg-indigo border-indigo text-white'
                    : 'bg-ink text-cream hover:bg-indigo hover:border-indigo'
                }`}
              >
                {submitted ? 'Joined!' : 'Join Waitlist'}
              </button>
            </form>

            <p className="text-[0.8125rem] text-warm-mid opacity-70">
              No spam. Only arena updates. Unsubscribe anytime.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
