import { useState, useEffect } from 'react'

// Fixed UTC launch date — same for everyone worldwide.
// 27 Feb 2026 19:00 UTC (4pm Argentina, UTC-3)
const LAUNCH_TARGET = new Date('2026-02-27T19:00:00Z').getTime()

function calcRemaining() {
  const diff = Math.max(0, LAUNCH_TARGET - Date.now())
  return {
    hours: Math.floor(diff / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
    total: diff,
  }
}

export default function Countdown() {
  const [time, setTime] = useState(calcRemaining)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calcRemaining())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const blocks = [
    { value: time.hours, label: 'HRS' },
    { value: time.minutes, label: 'MIN' },
    { value: time.seconds, label: 'SEC' },
  ]

  if (time.total <= 0) {
    return (
      <div className="mt-10">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-indigo text-white">
          <span className="block w-2 h-2 rounded-full bg-white animate-[pulse-dot_1.5s_ease-in-out_infinite]" />
          <span className="text-sm font-semibold uppercase tracking-[0.2em]">
            Beta is Live
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="mt-10">
      <div className="flex items-center gap-2 mb-4">
        <span className="block w-2 h-2 rounded-full bg-indigo animate-[pulse-dot_1.5s_ease-in-out_infinite]" />
        <span className="text-[0.8125rem] font-semibold uppercase tracking-[0.2em] text-indigo">
          Beta Launch In
        </span>
      </div>

      <div className="flex items-center gap-3">
        {blocks.map(({ value, label }, i) => (
          <div key={label} className="flex items-center gap-3">
            <div className="flex flex-col items-center">
              <span className="font-serif font-black text-[clamp(2rem,5vw,3.5rem)] leading-none tracking-tight text-ink tabular-nums">
                {String(value).padStart(2, '0')}
              </span>
              <span className="text-[0.625rem] font-semibold uppercase tracking-[0.25em] text-warm-mid mt-1">
                {label}
              </span>
            </div>
            {i < blocks.length - 1 && (
              <span className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] leading-none text-warm-gray -mt-4">
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
