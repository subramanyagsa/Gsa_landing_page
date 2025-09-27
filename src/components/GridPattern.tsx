import React from 'react';

const GridPattern = () => (
  <svg
    aria-hidden="true"
    className="absolute inset-0 h-full w-full fill-white/20 stroke-white/20 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
  >
    <defs>
      <pattern
        id="grid-pattern"
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
        x="100%"
        y="100%"
        patternTransform="translate(-0.5 -0.5)"
      >
        <path d="M0 40V0H40" fill="none"></path>
      </pattern>
    </defs>
    <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid-pattern)"></rect>
  </svg>
);

export default GridPattern;