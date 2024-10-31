import * as React from "react";
const LEG = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" {...props}>
    <defs>
      <g id="Stud">
        <path
          d="M -10 0 A 20 10 0 0 0 10 20 A 20 10 0 0 0 -10 0 M -22 30 A 20 10 0 0 0 22 30 l 0 -5 M -22 30 l 0 -5"
          strokeWidth="12"
          fill="transparent"
          strokeLinecap="round"
        />
        <path
          d="M -10 0 A 20 10 0 0 0 10 20 A 20 10 0 0 0 -10 0 M -22 30 A 20 10 0 0 0 22 30 l 0 -5 M -22 30 l 0 -5"
          stroke="#fff"
          strokeWidth="5"
          fill="transparent"
          strokeLinecap="round"
        />
      </g>
      <g id="Brick">
        <use href="#Stud" x="150" y="230" />
        <use href="#Stud" x="100" y="200" />
        <use href="#Stud" x="200" y="200" />
        <use href="#Stud" x="150" y="170" />
        <use href="#Stud" x="250" y="170" />
        <use href="#Stud" x="200" y="140" />
        <use href="#Stud" x="300" y="140" />
        <use href="#Stud" x="250" y="110" />
        <path
          d="M 60 240 l 0 60 l 90 60 l 190 -120 l 0 -55 M 150 345 l 0 -45 M 70 245 l 69 46 M 160 292 l 170 -107"
          strokeWidth="12"
          fill="transparent"
          strokeLinecap="round"
        />
        <path
          d="M 60 240 l 0 60 l 90 60 l 190 -120 l 0 -55 M 150 345 l 0 -45 M 70 245 l 69 46 M 160 292 l 170 -107"
          stroke="#fff"
          strokeWidth="5"
          fill="transparent"
          strokeLinecap="round"
        />
      </g>
    </defs>
    <circle id="background" cx="200" cy="200" r="200" stroke="transparent" />
    <use href="#Brick" x="0" y="-50" />
  </svg>
);
export default LEG;
