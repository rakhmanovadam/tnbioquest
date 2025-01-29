import type React from "react"

const AtomLogo: React.FC = () => (
  <svg viewBox="0 0 64 64" className="w-10 h-10">
    <defs>
      <radialGradient id="atom-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4">
          <animate attributeName="stopOpacity" values="0.4;0.2;0.4" dur="2s" repeatCount="indefinite" />
        </stop>
        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Electron orbits */}
    <g className="animate-[spin_10s_linear_infinite]">
      <ellipse cx="32" cy="32" rx="28" ry="14" fill="none" stroke="#8B5CF6" strokeWidth="1" opacity="0.3" />
    </g>
    <g className="animate-[spin_10s_linear_infinite]" style={{ transformOrigin: "center", transform: "rotate(60deg)" }}>
      <ellipse cx="32" cy="32" rx="28" ry="14" fill="none" stroke="#8B5CF6" strokeWidth="1" opacity="0.3" />
    </g>
    <g
      className="animate-[spin_10s_linear_infinite]"
      style={{ transformOrigin: "center", transform: "rotate(-60deg)" }}
    >
      <ellipse cx="32" cy="32" rx="28" ry="14" fill="none" stroke="#8B5CF6" strokeWidth="1" opacity="0.3" />
    </g>

    {/* Nucleus */}
    <circle cx="32" cy="32" r="6" fill="#8B5CF6">
      <animate attributeName="r" values="6;7;6" dur="2s" repeatCount="indefinite" />
    </circle>

    {/* Electrons */}
    <circle cx="4" cy="32" r="2" fill="#8B5CF6" className="animate-pulse" />
    <circle cx="60" cy="32" r="2" fill="#8B5CF6" className="animate-pulse [animation-delay:333ms]" />
    <circle cx="32" cy="4" r="2" fill="#8B5CF6" className="animate-pulse [animation-delay:666ms]" />
    <circle cx="32" cy="60" r="2" fill="#8B5CF6" className="animate-pulse [animation-delay:999ms]" />
  </svg>
)

export default AtomLogo

