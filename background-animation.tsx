import type React from "react"

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Base Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-purple-50"></div>

      {/* Middle Layers */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        {/* Large Hexagon */}
        <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" fill="url(#hexGradient)" opacity="0.05">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="120s"
            repeatCount="indefinite"
          />
        </polygon>

        {/* Wave Patterns */}
        <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="#3B82F6" strokeWidth="0.5" opacity="0.1">
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 0"
            to="0 20"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>
        <path d="M0,70 Q25,50 50,70 T100,70" fill="none" stroke="#2563EB" strokeWidth="0.5" opacity="0.1">
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 0"
            to="0 -20"
            dur="15s"
            repeatCount="indefinite"
          />
        </path>

        {/* Floating Circles */}
        {[...Array(20)].map((_, i) => (
          <circle key={i} r="0.5" fill="#3B82F6" opacity="0.3">
            <animate
              attributeName="cx"
              from={`${Math.random() * 100}`}
              to={`${Math.random() * 100}`}
              dur={`${10 + Math.random() * 20}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              from={`${Math.random() * 100}`}
              to={`${Math.random() * 100}`}
              dur={`${10 + Math.random() * 20}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>
    </div>
  )
}

export default BackgroundAnimation

