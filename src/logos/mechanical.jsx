import * as React from "react";
const Mechanical = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 400"
    {...props}
  >
    <defs>
      <g id="sungear">
        <circle cx="200" cy="125" r="10" fill="#cc314b" stroke="transparent" />
        <circle
          cx="200"
          cy="125"
          r="10"
          fill="#cc314b"
          stroke="transparent"
          transform="rotate(30 200 200)"
        />
        <circle
          cx="200"
          cy="125"
          r="10"
          fill="#cc314b"
          stroke="transparent"
          transform="rotate(60 200 200)"
        />
        <circle
          cx="200"
          cy="125"
          r="10"
          fill="#cc314b"
          stroke="transparent"
          transform="rotate(90 200 200)"
        />
        <circle
          cx="200"
          cy="125"
          r="10"
          fill="#cc314b"
          stroke="transparent"
          transform="rotate(120 200 200)"
        />
        <circle
          cx="200"
          cy="125"
          r="10"
          fill="#cc314b"
          stroke="transparent"
          transform="rotate(150 200 200)"
        />
        <circle
          cx="200"
          cy="125"
          r="10"
          fill="#cc314b"
          stroke="transparent"
          transform="rotate(180 200 200)"
        />
        <circle
          cx="200"
          cy="125"
          r="10"
          fill="#cc314b"
          stroke="transparent"
          transform="rotate(210 200 200)"
        />
        <circle
          cx="200"
          cy="125"
          r="10"
          fill="#cc314b"
          stroke="transparent"
          transform="rotate(240 200 200)"
        />
        <circle
          cx="200"
          cy="125"
          r="10"
          fill="#cc314b"
          stroke="transparent"
          transform="rotate(270 200 200)"
        />
        <circle
          cx="200"
          cy="125"
          r="10"
          fill="#cc314b"
          stroke="transparent"
          transform="rotate(300 200 200)"
        />
        <circle
          cx="200"
          cy="125"
          r="10"
          fill="#cc314b"
          stroke="transparent"
          transform="rotate(330 200 200)"
        />
        <circle
          cx="200"
          cy="200"
          r="70"
          stroke="#cc314b"
          stroke-width="12"
          fill="#59474a"
        />
        <circle
          cx="200"
          cy="200"
          r="70"
          stroke="#fff"
          stroke-width="5"
          fill="transparent"
        />
        <path
          stroke="#fff"
          stroke-width="12"
          stroke-linecap="round"
          d="M200 125v1m37.5 9.048-.5.866m27.952 26.586-.866.5M275 200h-1m-9.048 37.5-.866-.5M237.5 264.952l-.5-.866M200 275v-1m-37.5-9.048.5-.866M135.048 237.5l.866-.5M125 200h1m9.048-37.5.866.5m26.586-27.952.5.866"
        />
      </g>
      <g id="planatarygear">
        <circle cx="200" cy="165" r="10" fill="#cc314b" stroke="transparent" />
        <circle
          cx="200"
          cy="165"
          r="10"
          fill="#cc314b"
          stroke="transparent" 
          transform="rotate(60 200 200)"
        />
        <circle
          cx="200"
          cy="165"
          r="10"
          fill="#cc314b"
          stroke="transparent" 
          transform="rotate(120 200 200)"
        />
        <circle
          cx="200"
          cy="165"
          r="10"
          fill="#cc314b"
          stroke="transparent" 
          transform="rotate(180 200 200)"
        />
        <circle
          cx="200"
          cy="165"
          r="10"
          fill="#cc314b"
          stroke="transparent" 
          transform="rotate(240 200 200)"
        />
        <circle
          cx="200"
          cy="165"
          r="10"
          fill="#cc314b"
          stroke="transparent" 
          transform="rotate(300 200 200)"
        />
        <circle
          cx="200"
          cy="200"
          r="30"
          stroke="#cc314b"
          stroke-width="12"
          fill="#59474a"
        />
        <circle
          cx="200"
          cy="200"
          r="30"
          stroke="#fff"
          stroke-width="5"
          fill="transparent"
        />
        <path
          stroke="#fff"
          stroke-width="12"
          stroke-linecap="round"
          d="M200 165v1m30.31 16.5-.865.5m.865 34.5-.865-.5M200 235v-1m-30.31-16.5.865-.5m-.865-34.5.865.5"
        />
      </g>
    </defs>
    <circle cx="200" cy="200" r="200" fill="#59474a" stroke="transparent" />
    <use href="#sungear" />
    <g>
      <use href="#planatarygear" x="-130">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="rotate"
          from="360 70 200"
          to="0 70 200"
          dur="4s"
          additive="sum"
          begin="0"
          repeatCount="indefinite"
        />
      </use>
      <use href="#planatarygear" x="-130" transform="rotate(120 200 200)">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="rotate"
          from="360 70 200"
          to="0 70 200"
          dur="4s"
          additive="sum"
          begin="0"
          repeatCount="indefinite"
        />
      </use>
      <use href="#planatarygear" x="-130" transform="rotate(240 200 200)">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="rotate"
          from="360 70 200"
          to="0 70 200"
          dur="4s"
          additive="sum"
          begin="0"
          repeatCount="indefinite"
        />
      </use>
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="360 200 200"
        to="0 200 200"
        dur="8s"
        additive="sum"
        begin="0"
        repeatCount="indefinite"
      />
    </g>
  </svg>
);
export default Mechanical;
