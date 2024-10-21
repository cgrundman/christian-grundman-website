import React, { useState } from 'react';
import './TrialPage.css';

const TrialPage = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const handleToggleHighlight = () => {
    setIsHighlighted(!isHighlighted);  // Toggle the state on click
  };

  return (
    <div className="App">
      <svg width="800" height="800" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
                <g id="a">
                <path stroke="#aaa" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" d="M50 300V100h50l25-15h150l25 15h50v200z"/>
                <circle stroke="#aaa" stroke-width="12" stroke-miterlimit="10" cx="200" cy="200" r="75"/>
                <circle cx="92" cy="142" r="20" stroke="#aaa" stroke-width="12" stroke-miterlimit="10"/>
                <path stroke="#fff" fill="transparent" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M50 300V100h50l25-15h150l25 15h50v200z"/>
                <circle stroke="#fff" stroke-width="5" stroke-miterlimit="10" cx="200" cy="200" r="75"/>
                <circle cx="92" cy="142" r="20" stroke="#fff" stroke-width="5" stroke-miterlimit="10"/>
                </g>
            </defs>
            <circle cx="200" cy="200" r="200"/>
            <use href="#a"/>
        </svg>
    </div>
  );
};

export default TrialPage;