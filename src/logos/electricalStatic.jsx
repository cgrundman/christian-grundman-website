import * as React from "react";
const ElectricalStatic = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" {...props}>
    <defs>
      <g id="nodesStatic">
        <circle r="18" fill="#344f5c" stroke="transparent" />
        <circle r="14" fill="#0e7eb5" stroke="transparent" />
        <circle r="10" fill="#344f5c" stroke="transparent" />
        <circle r="6" fill="#3C4048" stroke="transparent" />
        <circle cx="45" r="18" fill="#344f5c" stroke="transparent" />
        <circle cx="45" r="14" fill="#0e7eb5" stroke="transparent" />
        <circle cx="45" r="10" fill="#344f5c" stroke="transparent" />
        <circle cx="45" r="6" fill="#3C4048" stroke="transparent" />
        <circle cx="-45" r="18" fill="#344f5c" stroke="transparent" />
        <circle cx="-45" r="14" fill="#0e7eb5" stroke="transparent" />
        <circle cx="-45" r="10" fill="#344f5c" stroke="transparent" />
        <circle cx="-45" r="6" fill="#3C4048" stroke="transparent" />
      </g>
    </defs>
    <circle cx="200" cy="200" r="200" fill="#3C4048" stroke="transparent" />
    <path
      stroke="#344f5c"
      fill="transparent"
      stroke-width="12"
      strokeLinecap="round"
      stroke-linejoin="round"
      d="M245 105V60l95 95h-45m-140-50V80l21-24V20m-71 135H80l-24 21H20m85 69H80l-24-21H20m180 71v15l-24 30v40m69-85v15l-48 60v10m98-135h15l50 50"
    />
    <path
      stroke="#344f5c"
      stroke-width="12"
      strokeLinecap="round"
      d="M200 105V20m-95 180H20m135 95v85m140-180h85"
    />
    <use href="#nodesStatic" x="200" y="120" />
    <use href="#nodesStatic" x="200" y="120" transform="rotate(90 200 200)" />
    <use href="#nodesStatic" x="200" y="280" />
    <use href="#nodesStatic" x="200" y="120" transform="rotate(270 200 200)" />
    <path
      stroke="#0e7eb5"
      fill="transparent"
      stroke-width="5"
      strokeLinecap="round"
      stroke-linejoin="round"
      d="M245 107V60l95 95h-47m-138-48V80l21-24V20m-69 135H80l-24 21H20m87 69H80l-24-21H20m180 69v17l-24 30v40m69-87v17l-48 60v10m96-135h17l50 50"
    />
    <path
      stroke="#0e7eb5"
      stroke-width="5"
      strokeLinecap="round"
      d="M200 107V20m-95 180H20m135 93v87m138-180h87"
    />
  </svg>
);
export default ElectricalStatic;
