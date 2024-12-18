import * as React from "react";
const MechanicalStatic = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 400"
    {...props}
  >
    <defs>
      <g id="sungearStatic">
        <circle cx="200" cy="125" r="10" fill="#59474a" stroke="transparent" />
        <circle
          cx="200"
          cy="125"
          r="10"
          fill="#59474a"
          stroke="transparent"
          transform="rotate(30 200 200)"
        />
        <circle
          cx="200"
          cy="125"
          r="10"
          fill="#59474a"
          stroke="transparent"
          transform="rotate(60 200 200)"
        />
        <circle
          cx="200"
          cy="125"
          r="10"
          fill="#59474a"
          stroke="transparent"
          transform="rotate(90 200 200)"
        />
        <circle
          cx="200"
          cy="125"
          r="10"
          fill="#59474a"
          stroke="transparent"
          transform="rotate(120 200 200)"
        />
        <circle
          cx="200"
          cy="125"
          r="10"
          fill="#59474a"
          stroke="transparent"
          transform="rotate(150 200 200)"
        />
        <circle
          cx="200"
          cy="125"
          r="10"
          fill="#59474a"
          stroke="transparent"
          transform="rotate(180 200 200)"
        />
        <circle
          cx="200"
          cy="125"
          r="10"
          fill="#59474a"
          stroke="transparent"
          transform="rotate(210 200 200)"
        />
        <circle
          cx="200"
          cy="125"
          r="10"
          fill="#59474a"
          stroke="transparent"
          transform="rotate(240 200 200)"
        />
        <circle
          cx="200"
          cy="125"
          r="10"
          fill="#59474a"
          stroke="transparent"
          transform="rotate(270 200 200)"
        />
        <circle
          cx="200"
          cy="125"
          r="10"
          fill="#59474a"
          stroke="transparent"
          transform="rotate(300 200 200)"
        />
        <circle
          cx="200"
          cy="125"
          r="10"
          fill="#59474a"
          stroke="transparent"
          transform="rotate(330 200 200)"
        />
        <circle
          cx="200"
          cy="200"
          r="70"
          stroke="#59474a"
          strokeWidth="12"
          fill="#3C4048"
        />
        <circle
          cx="200"
          cy="200"
          r="70"
          stroke="#cc314b"
          strokeWidth="5"
          fill="transparent"
        />
        <path
          stroke="#cc314b"
          strokeWidth="12"
          strokeLinecap="round"
          d="M200 125v1m37.5 9.048-.5.866m27.952 26.586-.866.5M275 200h-1m-9.048 37.5-.866-.5M237.5 264.952l-.5-.866M200 275v-1m-37.5-9.048.5-.866M135.048 237.5l.866-.5M125 200h1m9.048-37.5.866.5m26.586-27.952.5.866"
        />
      </g>
      <g id="planatarygearStatic">
        <circle cx="200" cy="165" r="10" fill="#59474a" stroke="transparent" />
        <circle
          cx="200"
          cy="165"
          r="10"
          fill="#59474a"
          stroke="transparent"
          transform="rotate(60 200 200)"
        />
        <circle
          cx="200"
          cy="165"
          r="10"
          fill="#59474a"
          stroke="transparent"
          transform="rotate(120 200 200)"
        />
        <circle
          cx="200"
          cy="165"
          r="10"
          fill="#59474a"
          stroke="transparent"
          transform="rotate(180 200 200)"
        />
        <circle
          cx="200"
          cy="165"
          r="10"
          fill="#59474a"
          stroke="transparent"
          transform="rotate(240 200 200)"
        />
        <circle
          cx="200"
          cy="165"
          r="10"
          fill="#59474a"
          stroke="transparent"
          transform="rotate(300 200 200)"
        />
        <circle
          cx="200"
          cy="200"
          r="30"
          stroke="#59474a"
          strokeWidth="12"
          fill="#3C4048"
        />
        <circle
          cx="200"
          cy="200"
          r="30"
          stroke="#cc314b"
          strokeWidth="5"
          fill="transparent"
        />
        <path
          stroke="#cc314b"
          strokeWidth="12"
          strokeLinecap="round"
          d="M200 165v1m30.31 16.5-.865.5m.865 34.5-.865-.5M200 235v-1m-30.31-16.5.865-.5m-.865-34.5.865.5"
        />
      </g>
    </defs>
    <circle cx="200" cy="200" r="200" fill="#3C4048" stroke="transparent" />
    <use href="#sungearStatic" />
    <g>
      <use href="#planatarygearStatic" x="-130" />
      <use href="#planatarygearStatic" x="-130" transform="rotate(120 200 200)" />
      <use href="#planatarygearStatic" x="-130" transform="rotate(240 200 200)" />
    </g>
  </svg>
);
export default MechanicalStatic;
