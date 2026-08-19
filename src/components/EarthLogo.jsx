const EarthLogo = ({ size = 48, withOrbit = true }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="MundoCosmico">
      <defs>
        <radialGradient id="earthOcean" cx="35%" cy="30%" r="85%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="55%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#4f46e5" />
        </radialGradient>
        <radialGradient id="earthLand" cx="40%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#d1fae5" />
          <stop offset="100%" stopColor="#34d399" />
        </radialGradient>
        <radialGradient id="earthGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(56,189,248,0.35)" />
          <stop offset="100%" stopColor="rgba(56,189,248,0)" />
        </radialGradient>
        <linearGradient id="orbitGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(99,102,241,0)" />
          <stop offset="50%" stopColor="rgba(165,180,252,0.9)" />
          <stop offset="100%" stopColor="rgba(99,102,241,0)" />
        </linearGradient>
      </defs>

      {withOrbit && (
        <g>
          <ellipse
            cx="50"
            cy="50"
            rx="47"
            ry="20"
            transform="rotate(-24 50 50)"
            stroke="url(#orbitGrad)"
            strokeWidth="1.6"
            strokeDasharray="4 6"
          />
          <circle cx="95" cy="30" r="2.6" fill="#a5b4fc" />
        </g>
      )}

      <circle cx="50" cy="50" r="34" fill="url(#earthGlow)" />

      <circle cx="50" cy="50" r="30" fill="url(#earthOcean)" />

      <g opacity="0.95">
        <path
          d="M31 28 C37 22 44 24 47 30 C49 35 45 41 39 43 C33 45 28 40 27 34 C26 31 27 29 31 28 Z"
          fill="url(#earthLand)"
        />
        <path
          d="M50 39 C58 34 67 38 69 46 C70 54 66 61 59 63 C51 66 46 61 45 53 C44 47 46 41 50 39 Z"
          fill="url(#earthLand)"
        />
        <path
          d="M64 26 C68 24 71 26 70 30 C69 33 65 33 63 30 C62 28 63 26 64 26 Z"
          fill="url(#earthLand)"
        />
        <path
          d="M29 56 C32 54 36 55 36 58 C35 61 32 63 30 61 C28 59 28 57 29 56 Z"
          fill="url(#earthLand)"
        />
      </g>

      <circle
        cx="50"
        cy="50"
        r="30"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1"
      />
    </svg>
  );
};

export default EarthLogo;