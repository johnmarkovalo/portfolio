export function FlowingWaves() {
  return (
    <div className="flowing-waves" aria-hidden="true">
      <svg
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Wave 1 — slowest, widest */}
        <path
          className="flowing-wave flowing-wave-1"
          d="M0,500 C360,400 720,600 1080,450 C1260,375 1380,420 1440,400 L1440,900 L0,900 Z"
          fill="url(#wave-fill-1)"
        />
        {/* Wave 2 — medium speed */}
        <path
          className="flowing-wave flowing-wave-2"
          d="M0,600 C240,520 480,680 720,580 C960,480 1200,640 1440,560 L1440,900 L0,900 Z"
          fill="url(#wave-fill-2)"
        />
        {/* Wave 3 — fastest, most subtle */}
        <path
          className="flowing-wave flowing-wave-3"
          d="M0,700 C320,640 640,760 960,680 C1120,640 1280,720 1440,680 L1440,900 L0,900 Z"
          fill="url(#wave-fill-3)"
        />

        <defs>
          <linearGradient id="wave-fill-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0" />
            <stop offset="30%" stopColor="#6366F1" stopOpacity="0.06" />
            <stop offset="70%" stopColor="#8B5CF6" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="wave-fill-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
            <stop offset="40%" stopColor="#8B5CF6" stopOpacity="0.05" />
            <stop offset="60%" stopColor="#3B82F6" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="wave-fill-3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
            <stop offset="50%" stopColor="#6366F1" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
