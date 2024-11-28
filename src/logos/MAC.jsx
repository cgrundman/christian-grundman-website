import * as React from "react";
const MAC = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" {...props}>
    <defs>
      <g id="body">
        <path
          stroke-width="12"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="transparent"
          d="M 355 170 v -70 h -140 v 65"
        />
        <path
          stroke-width="12"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="transparent"
          d="M 300 185 h 65 v 15 l -20 30 v 60 h -145 v -98"
        />
        <path
          stroke-width="12"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="transparent"
          d="M 230 165 v -15 h 35 v 30"
        />
        <path
          stroke="#fff"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="transparent"
          d="M 355 170 v -70 h -140 v 65"
        />
        <path
          stroke="#fff"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="transparent"
          d="M 300 185 h 65 v 15 l -20 30 v 60 h -145 v -98"
        />
        <path
          stroke="#fff"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="transparent"
          d="M 230 165 v -15 h 35 v 30"
        />
      </g>
      <g id="conveyer">
        <circle
          stroke-width="12"
          fill="transparent"
          cx="50"
          cy="190"
          r="12"
        />
        <circle
          stroke-width="12"
          fill="transparent"
          cx="125"
          cy="190"
          r="12"
        />
        <path
          stroke-width="12"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="transparent"
          d="M 50 178 h 200"
        />
        <path
          stroke-width="12"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="transparent"
          d="M 50 202 h 135"
        />
        <path
          stroke-width="12"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="transparent"
          d="M 50 217 v 75"
        />
        <path
          stroke-width="12"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="transparent"
          d="M 125 217 v 75"
        />
        <circle
          stroke="#fff"
          stroke-width="5"
          fill="transparent"
          cx="50"
          cy="190"
          r="12"
        />
        <circle
          stroke="#fff"
          stroke-width="5"
          fill="transparent"
          cx="125"
          cy="190"
          r="12"
        />
        <path
          stroke="#fff"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="transparent"
          d="M 50 178 h 200"
        />
        <path
          stroke="#fff"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="transparent"
          d="M 50 202 h 135"
        />
        <path
          stroke="#fff"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="transparent"
          d="M 50 217 v 75"
        />
        <path
          stroke="#fff"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="transparent"
          d="M 125 217 v 75"
        />
        <use href="#foot" x="50" y="300" />
        <use href="#foot" x="125" y="300" />
      </g>
      <g id="abc">
        <circle
          stroke-width="12"
          fill="transparent"
          cx="0"
          cy="0"
          r="2.5"
        />
        <circle
          stroke="#fff"
          stroke-width="5"
          fill="transparent"
          cx="0"
          cy="0"
          r="2.5"
        />
      </g>
      <g id="bcd">
        <circle
          stroke-width="12"
          fill="transparent"
          cx="0"
          cy="0"
          r="7"
        />
        <path
          stroke-width="12"
          stroke-linecap="round"
          fill="transparent"
          d="M -10 0 h 20"
        />
        <circle
          stroke="#fff"
          stroke-width="5"
          fill="transparent"
          cx="0"
          cy="0"
          r="7"
        />
        <path
          stroke="#fff"
          stroke-width="5"
          stroke-linecap="round"
          fill="transparent"
          d="M -10 0 h 20"
        />
      </g>
      <g id="foot">
        <polygon
          stroke-width="12"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="transparent"
          points="-1,-1 1,-1 2,2 -2,2"
        />
        <polygon
          stroke="#fff"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="transparent"
          points="-1,-1 1,-1 2,2 -2,2"
        />
      </g>
    </defs>
    <g>
      <circle id="background" cx="200" cy="200" r="200" stroke="transparent" />
    </g>
    <use href="#abc" x="235" y="125" />
    <use href="#abc" x="260" y="125" />
    <use href="#abc" x="285" y="125" />
    <use href="#abc" x="310" y="125" />
    <use href="#abc" x="335" y="125" />
    <use href="#bcd" x="230" y="220" />
    <use href="#bcd" x="270" y="220" transform="rotate(45, 270, 220)" />
    <use href="#bcd" x="310" y="220" transform="rotate(-45, 310, 220)" />
    <use href="#foot" x="200" y="300" />
    <use href="#foot" x="345" y="300" />
    <use href="#conveyer" x="0" y="0" />
    <use href="#body" x="0" y="0" />
  </svg>
);
export default MAC;
