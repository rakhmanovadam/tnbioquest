import React from "react"

export const curriculumData = [
  {
    title: "Biochemistry",
    weeks: "Weeks 1-5",
    description: "Explore the building blocks of life",
    details: [
      "Atoms and Molecules: Basic units of life",
      "Organic Compounds: Carbohydrates, proteins, lipids, nucleic acids",
      "Enzymes: Biological catalysts",
      "Metabolism: Energy transfer in organisms",
    ],
    activities: ["Chemical Reactions in the Body", "Making a Model of a Molecule", "Food Tests for Nutrients"],
    progress: 100,
    icon: (
      <svg viewBox="0 0 64 64" className="w-20 h-20 mb-4">
        <defs>
          <radialGradient id="molecule-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4">
              <animate attributeName="stopOpacity" values="0.4;0.2;0.4" dur="2s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Background glow */}
        <circle cx="32" cy="32" r="30" fill="url(#molecule-glow)" />

        {/* Molecule structure */}
        <g>
          <circle cx="32" cy="32" r="6" fill="#8B5CF6">
            <animate attributeName="r" values="6;7;6" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="32" cy="16" r="4" fill="#10B981" className="animate-pulse" />
          <circle cx="48" cy="32" r="4" fill="#10B981" className="animate-pulse" />
          <circle cx="32" cy="48" r="4" fill="#10B981" className="animate-pulse" />
          <circle cx="16" cy="32" r="4" fill="#10B981" className="animate-pulse" />

          <path d="M32 16 L32 26" stroke="#8B5CF6" strokeWidth="2" className="animate-pulse" />
          <path d="M48 32 L38 32" stroke="#8B5CF6" strokeWidth="2" className="animate-pulse" />
          <path d="M32 48 L32 38" stroke="#8B5CF6" strokeWidth="2" className="animate-pulse" />
          <path d="M16 32 L26 32" stroke="#8B5CF6" strokeWidth="2" className="animate-pulse" />
        </g>

        {/* Electrons */}
        <circle cx="32" cy="16" r="2" fill="#8B5CF6">
          <animate attributeName="r" values="2;3;2" dur="1s" repeatCount="indefinite" />
        </circle>
        <circle cx="48" cy="32" r="2" fill="#8B5CF6">
          <animate attributeName="r" values="2;3;2" dur="1s" repeatCount="indefinite" begin="0.25s" />
        </circle>
        <circle cx="32" cy="48" r="2" fill="#8B5CF6">
          <animate attributeName="r" values="2;3;2" dur="1s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        <circle cx="16" cy="32" r="2" fill="#8B5CF6">
          <animate attributeName="r" values="2;3;2" dur="1s" repeatCount="indefinite" begin="0.75s" />
        </circle>
      </svg>
    ),
  },
  {
    title: "Cells",
    weeks: "Weeks 6-9",
    description: "Dive into the basic unit of all living things",
    details: [
      "Cell Theory: Fundamental principles",
      "Types of Cells: Prokaryotic and eukaryotic",
      "Cell Structures: Nucleus, mitochondria, cell membrane, etc.",
      "Cell Functions: Energy production, transport, division",
    ],
    activities: ["Microscope Work: Examining plant and animal cells", "Cell Model Creation", "Osmosis Demonstration"],
    progress: 100,
    icon: (
      <svg viewBox="0 0 64 64" className="w-20 h-20 mb-4">
        <defs>
          <radialGradient id="cell-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.1" />
          </radialGradient>
        </defs>

        {/* Cell membrane */}
        <circle cx="32" cy="32" r="28" fill="url(#cell-gradient)" className="animate-pulse" />
        <circle
          cx="32"
          cy="32"
          r="28"
          fill="none"
          stroke="#8B5CF6"
          strokeWidth="2"
          strokeDasharray="4 4"
          className="animate-[spin_20s_linear_infinite]"
        />

        {/* Nucleus */}
        <circle cx="32" cy="32" r="12" fill="#10B981" opacity="0.8" />

        {/* Organelles */}
        <g className="animate-[bounce_2s_ease-in-out_infinite]">
          <circle cx="20" cy="20" r="4" fill="#8B5CF6" opacity="0.6" />
          <circle cx="44" cy="24" r="3" fill="#8B5CF6" opacity="0.6" />
          <circle cx="24" cy="44" r="5" fill="#8B5CF6" opacity="0.6" />
          <circle cx="40" cy="40" r="3" fill="#8B5CF6" opacity="0.6" />
        </g>

        {/* Moving particles */}
        <circle cx="28" cy="16" r="1" fill="#10B981" className="animate-ping" />
        <circle cx="48" cy="32" r="1" fill="#10B981" className="animate-ping [animation-delay:500ms]" />
        <circle cx="32" cy="48" r="1" fill="#10B981" className="animate-ping [animation-delay:1000ms]" />
      </svg>
    ),
  },
  {
    title: "Genetics",
    weeks: "Weeks 10-13",
    description: "Understand the code of life",
    details: [
      "DNA and Genes: Structure and function",
      "Chromosomes: Organization of genetic material",
      "Mendel's Laws of Inheritance: Dominant and recessive traits",
      "Genetic Variation: Mutations and environmental factors",
    ],
    activities: ["Punnett Square Practice", "Genetics Inheritance Game", "DNA Extraction from Fruit"],
    progress: 100,
    icon: (
      <svg viewBox="0 0 64 64" className="w-20 h-20 mb-4">
        <defs>
          <linearGradient id="dna-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>

        {/* Double Helix Animation */}
        <g>
          {/* First Strand */}
          <path
            d="M20 12 Q32 20, 44 12 Q56 4, 44 52 Q32 60, 20 52 Q8 44, 20 12"
            fill="none"
            stroke="url(#dna-gradient)"
            strokeWidth="2"
          >
            <animate
              attributeName="d"
              dur="3s"
              repeatCount="indefinite"
              values="
                M20 12 Q32 20, 44 12 Q56 4, 44 52 Q32 60, 20 52 Q8 44, 20 12;
                M20 52 Q32 60, 44 52 Q56 44, 44 12 Q32 20, 20 12 Q8 4, 20 52;
                M20 12 Q32 20, 44 12 Q56 4, 44 52 Q32 60, 20 52 Q8 44, 20 12"
            />
          </path>

          {/* Base Pairs */}
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i} className="animate-pulse" style={{ animationDelay: `${i * 200}ms` }}>
              <line x1="24" y1={16 + i * 8} x2="40" y2={16 + i * 8} stroke="#8B5CF6" strokeWidth="1" />
              <circle cx="24" cy={16 + i * 8} r="2" fill="#10B981" />
              <circle cx="40" cy={16 + i * 8} r="2" fill="#10B981" />
            </g>
          ))}
        </g>
      </svg>
    ),
  },
  {
    title: "Plants and Animal Structures",
    weeks: "Weeks 14-19",
    description: "Explore the diversity of life forms",
    details: [
      "Plant Structures: Roots, stems, leaves, flowers",
      "Photosynthesis: The process of making food",
      "Animal Organ Systems: Digestive, circulatory, respiratory, nervous",
      "Vertebrates &amp; Invertebrates: Comparative anatomy",
    ],
    activities: ["Plant Dissection", "Photosynthesis Experiment", "Animal Body System Model Creation"],
    progress: 100,
    icon: (
      <svg viewBox="0 0 64 64" className="w-20 h-20 mb-4">
        {/* Tree */}
        <g className="animate-[bounce_3s_ease-in-out_infinite]">
          <path d="M32 8 L40 24 L24 24 Z" fill="#8B5CF6" opacity="0.8" />
          <path d="M32 16 L44 32 L20 32 Z" fill="#8B5CF6" opacity="0.9" />
          <path d="M32 24 L48 40 L16 40 Z" fill="#8B5CF6" />
          <rect x="30" y="40" width="4" height="16" fill="#10B981" />
        </g>

        {/* Animated leaves */}
        {[0, 1, 2, 3].map((i) => (
          <g key={i} className={`animate-[spin_${3 + i}s_linear_infinite]`}>
            <circle
              cx={24 + i * 8}
              cy={16 + i * 4}
              r="2"
              fill="#8B5CF6"
              className="animate-pulse"
              style={{ animationDelay: `${i * 200}ms` }}
            />
          </g>
        ))}

        {/* Butterflies */}
        <g className="animate-[bounce_4s_ease-in-out_infinite]">
          <path d="M12 20 Q16 16, 20 20 Q16 24, 12 20" fill="#10B981" opacity="0.6" />
          <path d="M44 28 Q48 24, 52 28 Q48 32, 44 28" fill="#10B981" opacity="0.6">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 48 28"
              to="360 48 28"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </svg>
    ),
  },
]

