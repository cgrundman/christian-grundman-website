import * as React from "react";
const ECG = (props) => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <g id="microchip" strokeLinejoin="round" strokeLinecap="round">
        <path
          d="M0 100h10l10-10h10l10 10h10L70 0l20 180 20-80h10l10-20h10l10 20h10"
          strokeWidth="12"
        />
        <path
          d="M0 100h10l10-10h10l10 10h10L70 0l20 180 20-80h10l10-20h10l10 20h10"
          stroke="#fff"
          strokeWidth="5"
          fill="transparent"
        />
      </g>
      <g id="heartbeat" strokeLinejoin="round" strokeLinecap="round">
        <path
          d="M95 30H81m14 20H81m14 20H81M5 30h14M5 50h14M5 70h14M30 5v14M50 5v14M70 5v14M30 95V81m20 14V81m20 14V81M20 20h60v60H20z"
          strokeWidth="12"
        />
        <path
          d="M95 30H81m14 20H81m14 20H81M5 30h14M5 50h14M5 70h14M30 5v14M50 5v14M70 5v14M30 95V81m20 14V81m20 14V81M20 20h60v60H20z"
          stroke="#fff"
          strokeWidth="5"
          fill="transparent"
        />
      </g>
    </defs>
    <circle cx="200" cy="200" r="200" stroke="transparent" />
    <use href="#microchip" x="170" y="150" />
    <use href="#heartbeat" x="85" y="85" />
  </svg>
);
export default ECG;
