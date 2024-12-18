import * as React from "react";
const Electrical = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" {...props}>
    <defs>
      <circle id="electron" r="10" fill="#fff" stroke="transparent" />
      <g id="nodes">
        <circle r="18" fill="#0e7eb5" stroke="transparent" />
        <circle r="14" fill="#fff" stroke="transparent" />
        <circle r="10" fill="#0e7eb5" stroke="transparent" />
        <circle r="6" fill="#344f5c" stroke="transparent" />
        <circle cx="45" r="18" fill="#0e7eb5" stroke="transparent" />
        <circle cx="45" r="14" fill="#fff" stroke="transparent" />
        <circle cx="45" r="10" fill="#0e7eb5" stroke="transparent" />
        <circle cx="45" r="6" fill="#344f5c" stroke="transparent" />
        <circle cx="-45" r="18" fill="#0e7eb5" stroke="transparent" />
        <circle cx="-45" r="14" fill="#fff" stroke="transparent" />
        <circle cx="-45" r="10" fill="#0e7eb5" stroke="transparent" />
        <circle cx="-45" r="6" fill="#344f5c" stroke="transparent" />
      </g>
    </defs>
    <circle cx="200" cy="200" r="200" fill="#344f5c" stroke="transparent" />
    <path
      stroke="#0e7eb5"
      fill="transparent"
      strokeWidth="12"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M245 105V60l95 95h-45m-140-50V80l21-24V20m-71 135H80l-24 21H20m85 69H80l-24-21H20m180 71v15l-24 30v40m69-85v15l-48 60v10m98-135h15l50 50"
    />
    <path
      stroke="#0e7eb5"
      strokeWidth="12"
      strokeLinecap="round"
      d="M200 105V20m-95 180H20m135 95v85m140-180h85"
    />
    <use href="#nodes" x="200" y="120" />
    <use href="#nodes" x="200" y="120" transform="rotate(90 200 200)" />
    <use href="#nodes" x="200" y="280" />
    <use href="#nodes" x="200" y="120" transform="rotate(270 200 200)" />
    <path
      stroke="#fff"
      fill="transparent"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M245 107V60l95 95h-47m-138-48V80l21-24V20m-69 135H80l-24 21H20m87 69H80l-24-21H20m180 69v17l-24 30v40m69-87v17l-48 60v10m96-135h17l50 50"
    />
    <path
      stroke="#fff"
      strokeWidth="5"
      strokeLinecap="round"
      d="M200 107V20m-95 180H20m135 93v87m138-180h87"
    />
    <use href="#electron" x="120" y="200">
      <animate
        id="d"
        attributeName="x"
        begin="0s;c.end"
        dur=".1s"
        from="21"
        to="120"
      />
      <animate
        id="e"
        attributeName="x"
        begin="d.end"
        dur=".1s"
        from="200"
        to="200"
      />
      <animate attributeName="y" begin="d.end" dur=".1s" from="120" to="21" />
      <animate
        id="f"
        attributeName="x"
        begin="e.end"
        dur=".1s"
        from="155"
        to="155"
      />
      <animate attributeName="y" begin="e.end" dur=".1s" from="280" to="379" />
      <animate
        id="g"
        attributeName="x"
        begin="f.end"
        dur=".1s"
        from="245"
        to="245"
      />
      <animate attributeName="y" begin="f.end" dur=".1s" from="120" to="60" />
      <animate
        id="h"
        attributeName="x"
        begin="g.end"
        dur=".1s"
        from="245"
        to="340"
      />
      <animate attributeName="y" begin="g.end" dur=".1s" from="60" to="155" />
      <animate
        id="i"
        attributeName="x"
        begin="h.end"
        dur=".1s"
        from="340"
        to="280"
      />
      <animate attributeName="y" begin="h.end" dur=".1s" from="155" to="155" />
      <animate
        id="j"
        attributeName="x"
        begin="i.end"
        dur=".03s"
        from="120"
        to="80"
      />
      <animate attributeName="y" begin="i.end" dur=".03s" from="155" to="155" />
      <animate
        id="l"
        attributeName="x"
        begin="j.end"
        dur=".03s"
        from="80"
        to="55"
      />
      <animate attributeName="y" begin="j.end" dur=".03s" from="155" to="175" />
      <animate
        id="m"
        attributeName="x"
        begin="l.end"
        dur=".03s"
        from="55"
        to="21"
      />
      <animate attributeName="y" begin="l.end" dur=".03s" from="175" to="175" />
      <animate
        id="c"
        attributeName="x"
        begin="m.end"
        dur=".1s"
        from="280"
        to="379"
      />
      <animate attributeName="y" begin="m.end" dur=".1s" from="200" to="200" />
    </use>
  </svg>
);
export default Electrical;
