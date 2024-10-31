import * as React from "react";
const CVZ = (props) => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <g id="eye" fill="none">
        <path
          strokeWidth="12"
          d="M4 128s44 60 124 60 124-60 124-60-44-60-124-60S4 128 4 128z"
        />
        <circle strokeWidth="12" cx="128" cy="128" r="28" />
        <path
          stroke="#fff"
          strokeWidth="5"
          d="M4 128s44 60 124 60 124-60 124-60-44-60-124-60S4 128 4 128z"
        />
        <circle stroke="#fff" strokeWidth="5" cx="128" cy="128" r="28" />
      </g>
      <g
        id="computer"
        fill="transparent"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path strokeWidth="12" d="M50 270V100h300v170zm55 30h195" />
        <path
          stroke="#fff"
          strokeWidth="5"
          d="M50 270V100h300v170zm55 30h195"
        />
      </g>
    </defs>
    <circle cx="200" cy="200" r="200" stroke="transparent" />
    <use href="#eye" x="72" y="58" />
    <use href="#computer" />
  </svg>
);
export default CVZ;
