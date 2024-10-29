import * as React from "react";
const Background = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2600"
    height="1100"
    viewBox="0 0 2600 1100"
    fill="none"
  >
    <defs>
      <linearGradient id="Gradient" x1="0" x2="0" y1="0" y2="1">
        <stop class="stop1" stop-color="#3C4048" offset="0%" />
        <stop class="stop2" offset="5%" stop-opacity="0" />
        <stop class="stop2" offset="90%" stop-opacity="0" />
        <stop class="stop3" stop-color="#3C4048" offset="100%" />
      </linearGradient>
      <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="red" />
        <stop offset="50%" stop-color="black" stop-opacity="0" />
        <stop offset="100%" stop-color="blue" />
      </linearGradient>
    </defs>
    <rect width="2600" height="1100" fill="#F97316" />
    <rect width="2600" height="1100" fill="url(#Gradient)" />
  </svg>
);
export default Background;
