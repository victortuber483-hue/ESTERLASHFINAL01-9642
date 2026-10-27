const CURVE = "M 0 960 C 130 880 270 890 450 935 C 630 980 790 870 1000 925";

export function LightTransition() {
  return (
    <svg className="light-transition" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <clipPath id="hero-light-edge" clipPathUnits="objectBoundingBox">
          <path d="M 0 0 H 1 V .925 C .79 .87 .63 .98 .45 .935 C .27 .89 .13 .88 0 .96 Z" />
        </clipPath>
        <linearGradient id="beam-tint" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#ffc7e8" stopOpacity=".6" />
          <stop offset=".25" stopColor="#fff9fd" />
          <stop offset=".62" stopColor="#ffd9ef" stopOpacity=".8" />
          <stop offset="1" stopColor="#fff9fd" stopOpacity=".7" />
        </linearGradient>
        <filter id="beam-halo" x="-15%" y="-500%" width="130%" height="1100%" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="5" />
        </filter>
        <filter id="beam-soft" x="-15%" y="-500%" width="130%" height="1100%" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="1.6" />
        </filter>
        <filter id="beam-glint" x="-600%" y="-600%" width="1300%" height="1300%" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>
      <path d={CURVE} fill="none" stroke="#ff69bb" strokeWidth="24" vectorEffect="non-scaling-stroke" opacity=".62" filter="url(#beam-halo)" />
      <path d={CURVE} fill="none" stroke="#ffe2f2" strokeWidth="6" vectorEffect="non-scaling-stroke" opacity=".8" filter="url(#beam-soft)" />
      <path d={CURVE} fill="none" stroke="url(#beam-tint)" strokeWidth="1.25" vectorEffect="non-scaling-stroke" />
      <g className="light-transition__glint">
        <animateMotion dur="9s" repeatCount="indefinite" path={CURVE} calcMode="paced" />
        <circle r="9" fill="#fff0fa" opacity=".85" filter="url(#beam-glint)" />
        <circle r="2.4" fill="#ffffff" />
      </g>
    </svg>
  );
}