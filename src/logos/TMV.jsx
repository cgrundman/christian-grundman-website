import * as React from "react";
const TMV = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" {...props}>
  <defs>
    <g id="BigTree">
      <path d="M 0 0 L 0 100 M 0 0 l -10 20 M 0 0 l 10 20 M 0 25 l -15 30 M 0 25 l 15 30 M 0 60 l -20 30 M 0 60 l 20 30" stroke-width="12" strokeLinecap="round"/>
      <path d="M 0 0 L 0 100 M 0 0 l -10 20 M 0 0 l 10 20 M 0 25 l -15 30 M 0 25 l 15 30 M 0 60 l -20 30 M 0 60 l 20 30" stroke="#fff" stroke-width="5" strokeLinecap="round"/>
    </g>
    <g id="SmallTree">
      <path d="M 0 0 L 0 60 M 0 0 l -7 14 M 0 0 l 7 14 M 0 20 l -10 15 M 0 20 l 10 15 M 0 40 l -15 15 M 0 40 l 15 15" stroke-width="12" strokeLinecap="round"/>
      <path d="M 0 0 L 0 60 M 0 0 l -7 14 M 0 0 l 7 14 M 0 20 l -10 15 M 0 20 l 10 15 M 0 40 l -15 15 M 0 40 l 15 15" stroke="#fff" stroke-width="5" strokeLinecap="round"/>
    </g>
    <g id="Path">
      <path d="M 300 350 T 200 300 T 250 200 T 225 125 M 175 350 T 100 300 T 175 200 T 175 125" stroke-width="12" fill="transparent" strokeLinecap="round"/>
      <path d="M 300 350 T 200 300 T 250 200 T 225 125 M 175 350 T 100 300 T 175 200 T 175 125" stroke="#fff" stroke-width="5" fill="transparent" strokeLinecap="round"/>
    </g>
    <g id="Mountain">
      <path d="M 50 125 l 80 -80 l 20 20 l 40 -40 l 20 20 l 10 -10 l 30 30 l 15 -15 l 70 70 M 115 60 l 10 10 l 15 -15 M 160 55 l 20 20 l 20 -20 l 15 15 l 20 -20" stroke-width="12" fill="transparent" strokeLinecap="round"/>
      <path d="M 50 125 l 80 -80 l 20 20 l 40 -40 l 20 20 l 10 -10 l 30 30 l 15 -15 l 70 70 M 115 60 l 10 10 l 15 -15 M 160 55 l 20 20 l 20 -20 l 15 15 l 20 -20" stroke="#fff" stroke-width="5" fill="transparent" strokeLinecap="round"/>
    </g>
  </defs>
  <circle id="background" cx="200" cy="200" r="200" stroke="transparent"/>
  <use href="#Path" x="0" y="0"/>
  <use href="#SmallTree" x="325" y="175"/>
  <use href="#BigTree" x="275" y="225"/>
  <use href="#BigTree" x="100" y="120"/>
  <use href="#Mountain" x="0" y="0"/>
</svg>
);
export default TMV;
