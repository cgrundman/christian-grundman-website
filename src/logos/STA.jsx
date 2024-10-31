import * as React from "react";
const STA = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" {...props}>
    <defs>
      <g id="Microphone">
        <path
          d="M -20 0 l 40 0 M 0 0 l 0 -20 M -30 -50 A 20 20 0 0 0 30 -50 M -15 -50 A 15 15 0 0 0 15 -50 l 0 -30 A 15 15 0 0 0 -15 -80 l 0 30"
          stroke-width="12"
          fill="transparent"
          strokeLinecap="round"
        />
        <path
          d="M -20 0 l 40 0 M 0 0 l 0 -20 M -30 -50 A 20 20 0 0 0 30 -50 M -15 -50 A 15 15 0 0 0 15 -50 l 0 -30 A 15 15 0 0 0 -15 -80 l 0 30"
          stroke="#fff"
          stroke-width="5"
          fill="transparent"
          strokeLinecap="round"
        />
      </g>
      <g id="Sound">
        <path
          d="M -80 -20 l 0 40 M -70 -30 l 0 60 M -60 -10 l 0 20 M -50 -5 l 0 10 M -40 -40 l 0 80 M -30 -15 l 0 30 M -20 -20 l 0 40 M -10 -15 l 0 30 M 0 -5 l 0 10 M 10 -35 l 0 70 M 20 -25 l 0 50 M 30 -10 l 0 20"
          stroke-width="12"
          fill="transparent"
          strokeLinecap="round"
        />
        <path
          d="M -80 -20 l 0 40 M -70 -30 l 0 60 M -60 -10 l 0 20 M -50 -5 l 0 10 M -40 -40 l 0 80 M -30 -15 l 0 30 M -20 -20 l 0 40 M -10 -15 l 0 30 M 0 -5 l 0 10 M 10 -35 l 0 70 M 20 -25 l 0 50 M 30 -10 l 0 20"
          stroke="#fff"
          stroke-width="5"
          fill="transparent"
          strokeLinecap="round"
        />
      </g>
      <g id="Smile">
        <circle
          x="0"
          y="0"
          r="50"
          stroke-width="12"
          fill="transparent"
          strokeLinecap="round"
        />
        <path
          d="M -20 0 A 20 20 0 0 0 20 0"
          stroke-width="12"
          fill="transparent"
          strokeLinecap="round"
        />
        <circle
          x="0"
          y="0"
          r="50"
          stroke="#fff"
          stroke-width="5"
          fill="transparent"
          strokeLinecap="round"
        />
        <path
          d="M -20 0 A 20 20 0 0 0 20 0"
          stroke="#fff"
          stroke-width="5"
          fill="transparent"
          strokeLinecap="round"
        />
      </g>
      <g id="Frown">
        <circle
          x="0"
          y="0"
          r="50"
          stroke-width="12"
          fill="transparent"
          strokeLinecap="round"
        />
        <path
          d="M 20 20 A 20 20 0 0 0 -20 20"
          stroke-width="12"
          fill="transparent"
          strokeLinecap="round"
        />
        <circle
          x="0"
          y="0"
          r="50"
          stroke="#fff"
          stroke-width="5"
          fill="transparent"
          strokeLinecap="round"
        />
        <path
          d="M 20 20 A 20 20 0 0 0 -20 20"
          stroke="#fff"
          stroke-width="5"
          fill="transparent"
          strokeLinecap="round"
        />
      </g>
    </defs>
    <circle id="background" cx="200" cy="200" r="200" stroke="transparent" />
    <use href="#Microphone" x="180" y="250" />
    <use href="#Sound" x="105" y="200" />
    <use href="#Smile" x="320" y="125" />
    <use href="#Frown" x="320" y="275" />
    <line
      x1="225"
      y1="180"
      x2="260"
      y2="150"
      stroke-width="12"
      fill="transparent"
      strokeLinecap="round"
    />
    <line
      x1="225"
      y1="220"
      x2="260"
      y2="250"
      stroke-width="12"
      fill="transparent"
      strokeLinecap="round"
    />
    <line
      x1="225"
      y1="180"
      x2="260"
      y2="150"
      stroke="#fff"
      stroke-width="5"
      fill="transparent"
      strokeLinecap="round"
    />
    <line
      x1="225"
      y1="220"
      x2="260"
      y2="250"
      stroke="#fff"
      stroke-width="5"
      fill="transparent"
      strokeLinecap="round"
    />
  </svg>
);
export default STA;
