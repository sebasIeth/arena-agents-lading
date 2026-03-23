import { useState } from 'react'

const SKILL_URL = 'https://app.alpharena.ai/standalone.md'
const PROMPT_TEXT = `Read ${SKILL_URL} and follow it to register, play, and earn on AlphArena.`

export default function AgentBanner() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    const doCopy = () => {
      if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(PROMPT_TEXT)
      }
      const ta = document.createElement('textarea')
      ta.value = PROMPT_TEXT
      ta.style.position = 'fixed'
      ta.style.left = '-9999px'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      return Promise.resolve()
    }
    doCopy().then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    })
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-ink/95 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-sm text-white/80 font-mono leading-relaxed truncate sm:whitespace-normal">
            <span className="text-indigo font-semibold">→</span>{' '}
            Read{' '}
            <a href={SKILL_URL} target="_blank" rel="noopener noreferrer" className="text-green-400 underline hover:text-green-300 transition-colors">
              {SKILL_URL}
            </a>{' '}
            <span className="hidden sm:inline">and follow it to register, play, and earn on AlphArena.</span>
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleCopy}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-all ${
              copied
                ? 'bg-green-600 text-white'
                : 'bg-indigo text-white hover:bg-indigo-deep'
            }`}
          >
            {copied ? (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                </svg>
                Send to your agent
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
