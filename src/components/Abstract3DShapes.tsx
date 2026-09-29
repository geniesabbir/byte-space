export function LimeTorus({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`animate-pulse ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="limeTorusGrad" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EEFF8F" />
          <stop offset="0.5" stopColor="#CBFC01" />
          <stop offset="1" stopColor="#6A8902" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="35" stroke="url(#limeTorusGrad)" strokeWidth="18" />
    </svg>
  );
}

export function WhiteTorus({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="whiteTorusGrad" x1="15" y1="15" x2="85" y2="85" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="0.7" stopColor="#DAE0E5" />
          <stop offset="1" stopColor="#82868E" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="35" stroke="url(#whiteTorusGrad)" strokeWidth="18" />
    </svg>
  );
}

export function LimePyramid({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="pyrLight" x1="60" y1="10" x2="20" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EEFF8F" />
          <stop offset="1" stopColor="#CBFC01" />
        </linearGradient>
        <linearGradient id="pyrShadow" x1="60" y1="10" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CBFC01" />
          <stop offset="1" stopColor="#546B09" />
        </linearGradient>
      </defs>
      {/* 3D Tetrahedron faces */}
      <polygon points="60,15 15,95 60,105" fill="url(#pyrLight)" />
      <polygon points="60,15 60,105 105,90" fill="url(#pyrShadow)" />
    </svg>
  );
}

export function WhitePyramid({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="wPyrLight" x1="60" y1="15" x2="20" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#ECEFF2" />
        </linearGradient>
        <linearGradient id="wPyrShadow" x1="60" y1="15" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ECEFF2" />
          <stop offset="1" stopColor="#B2B8BE" />
        </linearGradient>
      </defs>
      <polygon points="60,15 15,95 60,105" fill="url(#wPyrLight)" />
      <polygon points="60,15 60,105 105,90" fill="url(#wPyrShadow)" />
    </svg>
  );
}

export function WhiteSpring({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="springGrad" x1="10" y1="10" x2="90" y2="110" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="0.6" stopColor="#ECEFF2" />
          <stop offset="1" stopColor="#B2B8BE" />
        </linearGradient>
      </defs>
      <path
        d="M20 20 C60 10, 80 40, 50 50 C20 60, 30 90, 70 85 C90 82, 85 110, 55 105"
        stroke="url(#springGrad)"
        strokeWidth="14"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LimeWavyPill({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 160"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="wavyPillGrad" x1="20" y1="20" x2="100" y2="140" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EEFF8F" />
          <stop offset="0.4" stopColor="#CBFC01" />
          <stop offset="1" stopColor="#6A8902" />
        </linearGradient>
      </defs>
      <path
        d="M30 30 C70 20, 80 50, 40 70 C10 85, 20 120, 70 115 C100 110, 110 145, 60 150"
        stroke="url(#wavyPillGrad)"
        strokeWidth="22"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LimeCylinder({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 140"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="cylBody" x1="20" y1="40" x2="80" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EEFF8F" />
          <stop offset="0.5" stopColor="#CBFC01" />
          <stop offset="1" stopColor="#546B09" />
        </linearGradient>
        <linearGradient id="cylTop" x1="20" y1="25" x2="80" y2="25" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBFFE5" />
          <stop offset="1" stopColor="#CBFC01" />
        </linearGradient>
      </defs>
      <rect x="20" y="35" width="60" height="75" rx="4" fill="url(#cylBody)" />
      <ellipse cx="50" cy="110" rx="30" ry="12" fill="#546B09" />
      <rect x="20" y="35" width="60" height="75" fill="url(#cylBody)" />
      <ellipse cx="50" cy="35" rx="30" ry="12" fill="url(#cylTop)" />
    </svg>
  );
}
