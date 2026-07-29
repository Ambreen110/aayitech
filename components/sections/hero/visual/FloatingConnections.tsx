"use client";

export default function FloatingConnections() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1200 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top Left → Top Right */}
      <path
        d="M260 120 C420 70 780 70 940 120"
        stroke="rgba(197,154,61,0.25)"
        strokeWidth="2"
      />

      {/* Bottom Left → Bottom Right */}
      <path
        d="M260 360 C420 420 780 420 940 360"
        stroke="rgba(23,53,46,0.20)"
        strokeWidth="2"
      />

      {/* Left Vertical */}
      <path
        d="M260 120 C210 220 210 260 260 360"
stroke="rgba(108,116,111,0.20)"
        strokeWidth="2"
      />

      {/* Right Vertical */}
      <path
        d="M940 120 C990 220 990 260 940 360"
stroke="rgba(108,116,111,0.20)"
        strokeWidth="2"
      />

      {/* Center Circle */}
      <circle
        cx="600"
        cy="250"
        r="6"
        fill="#C59A3D"
        opacity="0.8"
      />
    </svg>
  );
}