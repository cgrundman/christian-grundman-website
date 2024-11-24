import * as React from "react";
const Generic = (props) => (
    <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 410 50"
    id="svg1"
    {...props}
  >
    <defs>
      <linearGradient id="linearGradient1">
        <stop stopColor="#0a052a" stopOpacity="1;" offset={0} id="stop1" />
        <stop stopColor="#13154f" stopOpacity="1;" offset={0.35} id="stop3" />
        <stop stopColor="#544535" stopOpacity="1;" offset={1} id="stop2" />
      </linearGradient>
      <linearGradient
        xlinkHref="#linearGradient1"
        id="linearGradient2"
        x1={25}
        y1={-5}
        x2={25}
        y2={50}
        gradientUnits="userSpaceOnUse"
      />
    </defs>
    <g id="layer1">
      <rect
        fill="url(#linearGradient2)"
        strokeWidth={0.264999}
        id="rect1"
        width={410}
        height={60}
        x={-5}
        y={-5}
      />
    </g>
  </svg>
);
export default Generic;