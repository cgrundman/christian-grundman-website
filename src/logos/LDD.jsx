import * as React from "react";
const LDD = (props) => (
  <svg
    width={800}
    height={800}
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
    <g id="ldeye" fill="none">
      <path stroke-width="12" d="M4 128s44 60 124 60 124-60 124-60-44-60-124-60S4 128 4 128z"/>
      <circle stroke-width="12" cx="128" cy="128" r="28"/>
      <path stroke="#fff" stroke-width="5" d="M4 128s44 60 124 60 124-60 124-60-44-60-124-60S4 128 4 128z"/>
      <circle stroke="#fff" stroke-width="5" cx="128" cy="128" r="28"/>
    </g>
    <g id="leaf" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M64 144c96 0 106-80 106-120 0-4-10-8-10-8C24 20 24 84 24 144v32" stroke-width="12"/>
      <path d="M24 144s0-48 64-56" stroke-width="12"/>
      <path d="M64 144c96 0 106-80 106-120 0-4-10-8-10-8C24 20 24 84 24 144v32" stroke="#fff" stroke-width="5"/>
      <path d="M24 144s0-48 64-56" stroke="#fff" stroke-width="5"/>
    </g>
  </defs>
  <circle cx="200" cy="200" r="200" stroke="transparent"/>
  <use href="#ldeye" x="30" y="10"/>
  <use href="#leaf" x="190" y="170"/>
  </svg>
);
export default LDD;