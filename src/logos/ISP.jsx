import * as React from "react";
const ISP = (props) => (
  <svg
    width={800}
    height={800}
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <g id="a">
        <path
          strokeWidth={12}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M50 300V100h50l25-15h150l25 15h50v200z"
        />
        <circle
          strokeWidth={12}
          strokeMiterlimit={10}
          cx={200}
          cy={200}
          r={75}
        />
        <circle
          cx={92}
          cy={142}
          r={20}
          strokeWidth={12}
          strokeMiterlimit={10}
        />
        <path
          stroke="#fff"
          fill="transparent"
          strokeWidth={5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M50 300V100h50l25-15h150l25 15h50v200z"
        />
        <circle
          stroke="#fff"
          fill="transparent"
          strokeWidth={5}
          strokeMiterlimit={10}
          cx={200}
          cy={200}
          r={75}
        />
        <circle
          cx={92}
          cy={142}
          r={20}
          stroke="#fff"
          fill="transparent"
          strokeWidth={5}
          strokeMiterlimit={10}
        />
      </g>
    </defs>
    <circle cx={200} cy={200} r={200} stroke="transparent" />
    <use href="#a" />
  </svg>
);
export default ISP;