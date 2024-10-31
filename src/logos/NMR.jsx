import * as React from "react";
const NMR = (props) => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <g id="signal" stroke-linejoin="round" strokeLinecap="round">
        <path
          d="M0 200h75l2-75 2 40h4l2-40 2 75h50l2-150 2 150h50l1-50 3 40 3-100 3 100 3-40 3 50h75"
          stroke-width="12"
        />
        <path
          d="M0 200h75l2-75 2 40h4l2-40 2 75h50l2-150 2 150h50l1-50 3 40 3-100 3 100 3-40 3 50h75"
          stroke="#fff"
          stroke-width="5"
          fill="transparent"
        />
      </g>
      <g id="chem" strokeLinecap="round" fill="transparent">
        <path d="M7.5 22.5v30l30 17.5 30-17.5v-30L37.5 5z" stroke-width="12" />
        <path
          d="m20 30 17.5-10L55 30m12.5-7.5L97.5 5l30 17.5m-120 30L-20 70"
          stroke-width="12"
        />
        <path
          d="M7.5 22.5v30l30 17.5 30-17.5v-30L37.5 5z"
          stroke="#fff"
          stroke-width="5"
        />
        <path
          d="m20 30 17.5-10L55 30m12.5-7.5L97.5 5l30 17.5m-120 30L-20 70"
          stroke="#fff"
          stroke-width="5"
        />
      </g>
    </defs>
    <circle cx="200" cy="200" r="200" stroke="transparent" />
    <use href="#signal" x="60" y="100" />
    <use href="#chem" x="90" y="70" />
  </svg>
);
export default NMR;
