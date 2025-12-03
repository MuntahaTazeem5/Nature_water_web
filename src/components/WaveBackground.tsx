export function WaveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg 
        className="absolute bottom-0 w-full h-64 opacity-30" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#0066CC', stopOpacity: 0.3 }} />
            <stop offset="50%" style={{ stopColor: '#00C9FF', stopOpacity: 0.5 }} />
            <stop offset="100%" style={{ stopColor: '#0066CC', stopOpacity: 0.3 }} />
          </linearGradient>
          <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#00C9FF', stopOpacity: 0.2 }} />
            <stop offset="50%" style={{ stopColor: '#0066CC', stopOpacity: 0.4 }} />
            <stop offset="100%" style={{ stopColor: '#00C9FF', stopOpacity: 0.2 }} />
          </linearGradient>
        </defs>
        
        {/* Wave 1 */}
        <path 
          fill="url(#wave-gradient-1)" 
          d="M0,60 C300,100 600,20 900,60 C1050,80 1200,40 1200,40 L1200,120 L0,120 Z"
          className="animate-wave"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M0,60 C300,100 600,20 900,60 C1050,80 1200,40 1200,40 L1200,120 L0,120 Z;
              M0,40 C300,20 600,100 900,40 C1050,60 1200,80 1200,80 L1200,120 L0,120 Z;
              M0,60 C300,100 600,20 900,60 C1050,80 1200,40 1200,40 L1200,120 L0,120 Z
            "
          />
        </path>
        
        {/* Wave 2 */}
        <path 
          fill="url(#wave-gradient-2)" 
          d="M0,40 C300,20 600,100 900,40 C1050,60 1200,80 1200,80 L1200,120 L0,120 Z"
          className="animate-wave-slow"
        >
          <animate
            attributeName="d"
            dur="15s"
            repeatCount="indefinite"
            values="
              M0,40 C300,20 600,100 900,40 C1050,60 1200,80 1200,80 L1200,120 L0,120 Z;
              M0,80 C300,100 600,40 900,80 C1050,40 1200,60 1200,60 L1200,120 L0,120 Z;
              M0,40 C300,20 600,100 900,40 C1050,60 1200,80 1200,80 L1200,120 L0,120 Z
            "
          />
        </path>
      </svg>
    </div>
  );
}
