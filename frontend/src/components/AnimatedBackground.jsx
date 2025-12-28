export default function AnimatedBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        backgroundColor: "#0b1020",
        overflow: "hidden",
      }}
    >
      <svg
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        <defs>
          <linearGradient id="wave1" gradientTransform="rotate(45)">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.25" />
          </linearGradient>

          <linearGradient id="wave2" gradientTransform="rotate(45)">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="wave3" gradientTransform="rotate(45)">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* 🌊 Wave Layer 1 (Back – slow) */}
        <path fill="url(#wave1)">
          <animate
            attributeName="d"
            dur="22s"
            repeatCount="indefinite"
            values="
              M0,420 C240,380 480,460 720,430 960,400 1200,440 1440,420 L1440,600 L0,600 Z;
              M0,440 C240,460 480,380 720,400 960,430 1200,390 1440,440 L1440,600 L0,600 Z;
              M0,420 C240,380 480,460 720,430 960,400 1200,440 1440,420 L1440,600 L0,600 Z
            "
          />
        </path>

        {/* 🌊 Wave Layer 2 (Middle) */}
        <path fill="url(#wave2)">
          <animate
            attributeName="d"
            dur="16s"
            repeatCount="indefinite"
            values="
              M0,460 C300,430 600,490 900,460 1150,430 1350,470 1440,460 L1440,600 L0,600 Z;
              M0,480 C300,500 600,430 900,450 1150,480 1350,440 1440,480 L1440,600 L0,600 Z;
              M0,460 C300,430 600,490 900,460 1150,430 1350,470 1440,460 L1440,600 L0,600 Z
            "
          />
        </path>

        {/* 🌊 Wave Layer 3 (Front – faster) */}
        <path fill="url(#wave3)">
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M0,500 C360,470 720,520 1080,500 1260,490 1380,510 1440,500 L1440,600 L0,600 Z;
              M0,520 C360,540 720,480 1080,490 1260,520 1380,480 1440,520 L1440,600 L0,600 Z;
              M0,500 C360,470 720,520 1080,500 1260,490 1380,510 1440,500 L1440,600 L0,600 Z
            "
          />
        </path>
      </svg>
    </div>
  );
}
