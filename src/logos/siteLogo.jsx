import * as React from "react";
const SiteLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 400"
    fill="none"
    {...props}
  >
    <defs>
      <g id="G">
        <circle
          cx="0"
          cy="0"
          r="100"
          fill="transparent"
          stroke="#265583"
          stroke-width="10"
        />
        <path
          d="M 175 0 L 0 0 L 100 -100 L 175 0 "
          stroke="transparent"
          stroke-width="1"
          fill="#EAEAEA"
        />
        <line
          x1="0"
          x2="105"
          y1="0"
          y2="0"
          stroke="#265583"
          stroke-width="10"
        />
      </g>
      <g id="C">
        <circle
          cx="0"
          cy="0"
          r="100"
          fill="transparent"
          stroke="#316b9c"
          stroke-width="10"
        />
        <path
          d="M 125 67 L 0 0 L 125 -75 L 125 75 "
          stroke="transparent"
          stroke-width="1"
          fill="#EAEAEA"
        />
      </g>
      <g id="BOX">
        <path
          d="M 160 20 L 160 160 L -160 160 L -160 -160 L 0 -160"
          stroke="black"
          stroke-width="10"
          fill="transparent"
          strokeLinejoin="round"
        />
      </g>
    </defs>
    <circle cx="200" cy="200" r="300" fill="#EAEAEA" />
    <use href="#C" x="158" y="175" />
    <use href="#G" x="242" y="225" />
    <use href="#BOX" x="200" y="200" />
  </svg>
);
export default SiteLogo;
