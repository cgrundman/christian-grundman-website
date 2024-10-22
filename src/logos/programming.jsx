import * as React from "react";
const Programming = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 400"
    {...props}
  >
    <circle cx="200" cy="200" r="200" fill="#554b57" stroke="transparent" />
    <g fill="transparent" stroke-linecap="round" stroke-linejoin="round">
      <path
        stroke="#a749ba"
        stroke-width="12"
        d="M50 270V100h300v170zm55 30h195"
      />
      <path
        stroke="#a749ba"
        stroke-width="12"
        d="m120 220-50-30 50-30m20 80 45-110m25 90 50-30-50-30"
      />
      <path stroke="#fff" stroke-width="5" d="M50 270V100h300v170zm55 30h195" />
      <path
        stroke="#fff"
        stroke-width="5"
        d="m120 220-50-30 50-30m20 80 45-110m25 90 50-30-50-30"
      />
      <path stroke="#a749ba" stroke-width="12" d="M280 240h50">
        <animate
          id="on"
          attributeName="opacity"
          from="0"
          to="1"
          dur="0.05s"
          begin="0;holdOff.end"
        />
        <animate
          id="holdOn"
          attributeName="opacity"
          from="1"
          to="1"
          dur="0.45s"
          begin="on.end"
        />
        <animate
          id="off"
          attributeName="opacity"
          from="1"
          to="0"
          dur="0.05s"
          begin="holdOn.end"
        />
        <animate
          id="holdOff"
          attributeName="opacity"
          from="0"
          to="0"
          dur="0.45s"
          begin="off.end"
        />
      </path>
      <path stroke="#fff" stroke-width="5" d="M280 240h50">
        <animate
          attributeName="opacity"
          from="0"
          to="1"
          dur="0.05s"
          begin="0s;holdOff.end"
        />
        <animate
          attributeName="opacity"
          from="1"
          to="1"
          dur="0.45s"
          begin="on.end"
        />
        <animate
          attributeName="opacity"
          from="1"
          to="0"
          dur="0.05s"
          begin="onHold.end"
        />
        <animate
          attributeName="opacity"
          from="0"
          to="0"
          dur="0.45s"
          begin="off.end"
        />
      </path>
    </g>
  </svg>
);
export default Programming;
