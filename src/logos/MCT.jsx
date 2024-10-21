import * as React from "react";
const MCT = (props) => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <g id="short">
        <circle stroke-width="12" r="15" />
        <circle stroke="#fff" stroke-width="5" r="15" fill="transparent"/>
      </g>
      <g id="long">
        <rect
          width="170"
          height="30"
          x="-15"
          y="-15"
          rx="15"
          ry="15"
          stroke-width="12"
        />
        <rect
          width="170"
          height="30"
          x="-15"
          y="-15"
          rx="15"
          ry="15"
          stroke="#fff"
          stroke-width="5"
          fill="transparent"
        />
      </g>
    </defs>
    <circle cx="200" cy="200" r="200" stroke="transparent" />
    <use href="#short" x="60" y="200" />
    <use href="#short" x="200" y="200" />
    <use href="#short" x="340" y="200" />
    <use href="#short" x="60" y="125" />
    <use href="#short" x="130" y="125" />
    <use href="#short" x="270" y="275" />
    <use href="#short" x="340" y="275" />
    <use href="#long" x="200" y="125" />
    <use href="#long" x="60" y="275" />
  </svg>
);
export default MCT;
