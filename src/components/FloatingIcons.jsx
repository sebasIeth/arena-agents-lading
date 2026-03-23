const ICONS = [
  { src: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png', alt: 'Solana', size: 60 },
  { src: '/clawpump.jpg', alt: 'ClawPump', size: 56 },
]

const POSITIONS = [
  { top: '30%', left: '4%', delay: 0, duration: 10 },
  { top: '40%', right: '5%', delay: 3, duration: 12 },
]

export default function FloatingIcons() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {ICONS.map((icon, i) => {
        const pos = POSITIONS[i]
        return (
          <div
            key={i}
            className="absolute floating-icon"
            style={{
              top: pos.top,
              left: pos.left,
              right: pos.right,
              animationDelay: `${pos.delay}s`,
              animationDuration: `${pos.duration}s`,
            }}
          >
            <img
              src={icon.src}
              alt={icon.alt}
              width={icon.size}
              height={icon.size}
              className="rounded-full opacity-[0.45] select-none"
              draggable={false}
            />
          </div>
        )
      })}
    </div>
  )
}
