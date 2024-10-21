import * as React from "react";
const MLS = (props) => (
  <svg
    width={800}
    height={800}
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <g id="lungs" stroke-linecap="round">
        <path
          d="M100 25v75c0 10-5 15-25 15m65-90v75c0 10 5 15 25 15"
          stroke-width="12"
          fill="transparent"
        />
        <path
          d="M90 110c0-20-5-35-15-35-20-5-45 25-50 60-10 40-5 65 5 70 10 0 25-10 30-10 10 0 30 5 30-5v-40m60-40c0-20 5-35 15-35 20-5 45 25 50 60 10 40 5 65-5 70-10 0-25-10-30-10-10 0-30 5-30-5v-40"
          stroke-width="12"
          fill="transparent"
        />
        <path
          d="M75 150q30 0 45-15 15 15 45 15"
          stroke-width="12"
          stroke-linejoin="round"
          fill="transparent"
        />
        <path
          d="M100 25v75c0 10-5 15-25 15m65-90v75c0 10 5 15 25 15"
          stroke="#fff"
          stroke-width="5"
          fill="transparent"
        />
        <path
          d="M90 110c0-20-5-35-15-35-20-5-45 25-50 60-10 40-5 65 5 70 10 0 25-10 30-10 10 0 30 5 30-5v-40m60-40c0-20 5-35 15-35 20-5 45 25 50 60 10 40 5 65-5 70-10 0-25-10-30-10-10 0-30 5-30-5v-40"
          stroke="#fff"
          stroke-width="5"
          fill="transparent"
        />
        <path
          d="M75 150q30 0 45-15 15 15 45 15"
          stroke="#fff"
          stroke-width="5"
          stroke-linejoin="round"
          fill="transparent"
        />
      </g>
      <g id="nn">
        <path
          d="m0 0 60 30M0 0l60-30M0-60l60 30M0-60l60-30M0 0l60-90M0-60l60 90m0 0 60-60m-60 0h60M60-90l60 60"
          stroke-width="12"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle cx="60" cy="-30" r="15" stroke-width="12" />
        <circle cx="60" cy="30" r="15" stroke-width="12" />
        <circle r="15" stroke-width="12" />
        <circle cx="60" cy="-90" r="15" stroke-width="12" />
        <circle cy="-60" r="15" stroke-width="12" />
        <circle cx="120" cy="-30" r="15" stroke-width="12" />
        <path
          d="m0 0 60 30M0 0l60-30M0-60l60 30M0-60l60-30M0 0l60-90M0-60l60 90m0 0 60-60m-60 0h60M60-90l60 60"
          stroke="#fff"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle cx="60" cy="-30" r="15" stroke="#fff" stroke-width="5" />
        <circle cx="60" cy="30" r="15" stroke="#fff" stroke-width="5" />
        <circle r="15" stroke="#fff" stroke-width="5" />
        <circle cx="60" cy="-90" r="15" stroke="#fff" stroke-width="5" />
        <circle cy="-60" r="15" stroke="#fff" stroke-width="5" />
        <circle cx="120" cy="-30" r="15" stroke="#fff" stroke-width="5" />
        <circle cx="60" cy="-30" r="12" stroke-width="3" />
        <circle cx="60" cy="30" r="12" stroke-width="3" />
        <circle r="12" stroke-width="3" />
        <circle cx="60" cy="-90" r="12" stroke-width="3" />
        <circle cy="-60" r="12" stroke-width="3" />
        <circle cx="120" cy="-30" r="12" stroke-width="3" />
        <circle cx="120" cy="-30" r="12" stroke-width="3" />
      </g>
    </defs>
    <circle cx="200" cy="200" r="200" stroke="transparent" />
    <use href="#lungs" x="130" y="100" />
    <use href="#nn" x="70" y="150" />
  </svg>
);
export default MLS;
