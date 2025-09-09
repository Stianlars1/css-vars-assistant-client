export const HoverGraphics = ({ className }: { className: string }) => {
  return (
    <svg
      width="400"
      height="280"
      viewBox="0 0 400 280"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <pattern
          id="grid7"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="40"
            stroke="white"
            stroke-opacity="0.08"
            stroke-width="1"
          />
        </pattern>
      </defs>
      <rect width="400" height="280" rx="24" fill="url(#bg7)" />
      <rect width="400" height="280" rx="24" fill="url(#grid7)" />
      <rect width="400" height="280" rx="24" fill="url(#vignette7)" />
      <g
        transform="translate(80,60)"
        stroke="white"
        stroke-opacity="0.12"
        fill="none"
        filter="url(#glow7)"
      >
        <path d="M0 0 L260 160" />
        <path d="M0 40 L260 200" />
        <path d="M40 0 L300 160" />
        <path d="M80 0 L340 160" />
      </g>
    </svg>
  );
};
