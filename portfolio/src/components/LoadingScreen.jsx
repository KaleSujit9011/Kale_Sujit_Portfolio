import { useEffect, useState } from "react";
import profilePhoto from "../assets/professional.png";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Duration: random between 1200ms – 1800ms
    const duration = 2000 + Math.random() * 600;
    const interval = 16; // ~60fps
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      // easeOutQuad for a natural feel
      const t = current / steps;
      const eased = t < 1 ? 1 - (1 - t) * (1 - t) : 1;
      const value = Math.min(Math.round(eased * 100), 100);
      setProgress(value);

      if (current >= steps) {
        clearInterval(timer);
        // Short pause at 100 before fade
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(onComplete, 500);
        }, 200);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8"
      style={{
        backgroundColor: "var(--bg)",
        transition: "opacity 0.6s ease",
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? "none" : "auto",
      }}
    >
      {/* Ambient glow blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: "var(--primary-glow)", opacity: 0.35 }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: "var(--accent-glow)", opacity: 0.35 }}
      />

      {/* Profile photo with spinning gradient ring */}
      <div className="relative flex items-center justify-center">
        {/* Spinning gradient border */}
        <div
          className="absolute rounded-full"
          style={{
            inset: "-4px",
            background:
              "conic-gradient(from 0deg, var(--primary), var(--accent), var(--primary))",
            animation: "spin 2s linear infinite",
            borderRadius: "25%",
          }}
        />
        {/* Ring to separate photo from conic */}
        <div
          className="absolute rounded-full"
          style={{
            inset: "-1px",
            backgroundColor: "var(--bg)",
            borderRadius: "25%",
          }}
        />
        {/* Photo */}
        <img
          src={profilePhoto}
          alt="Sujit Kale"
          className="relative rounded-full object-cover"
          style={{
            width: "130px",
            height: "130px",
            border: "3px solid var(--bg)",
          }}
        />
      </div>

      {/* Name & title */}
      <div className="text-center" style={{ zIndex: 1 }}>
        <h1
          className="text-3xl font-bold text-gradient"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          Sujit Kale
        </h1>
        <p
          className="mt-1 text-sm tracking-widest uppercase"
          style={{ color: "var(--text-secondary)" }}
        >
          Portfolio
        </p>
      </div>

      {/* Progress bar */}
      <div className="flex flex-col items-center gap-2" style={{ zIndex: 1, width: "220px" }}>
        <div
          className="w-full rounded-full overflow-hidden"
          style={{ height: "4px", background: "var(--border)" }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              background: "linear-gradient(90deg, var(--primary), var(--accent))",
              borderRadius: "9999px",
              transition: "width 10ms linear",
              boxShadow: "0 0 8px var(--accent-glow)",
            }}
          />
        </div>
        <span
          className="text-xs font-mono tabular-nums"
          style={{ color: "var(--text-secondary)" }}
        >
          {progress}%
        </span>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
