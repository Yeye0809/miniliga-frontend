const svgProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const PhoneIcon = () => (
  <svg {...svgProps}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

export const BallIcon = () => (
  <svg {...svgProps}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="12 8 15.5 10.6 14.2 14.7 9.8 14.7 8.5 10.6" />
    <path d="M12 8V2.5M15.5 10.6l5.3-1.7M14.2 14.7l3.3 4.5M9.8 14.7l-3.3 4.5M8.5 10.6L3.2 8.9" />
  </svg>
);

export const ShieldIcon = () => (
  <svg {...svgProps}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <circle cx="12" cy="11" r="3" />
  </svg>
);

export const ShirtIcon = () => (
  <svg {...svgProps}>
    <path d="M20.4 7.6 16 3.5a4 4 0 0 1-8 0L3.6 7.6a1 1 0 0 0 0 1.4l2.2 2.2a1 1 0 0 0 1.2.2L8 10.8V20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-9.2l1 .6a1 1 0 0 0 1.2-.2L20.4 9a1 1 0 0 0 0-1.4z" />
  </svg>
);