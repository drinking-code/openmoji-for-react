
import React from 'react';

const BlackCircle = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <circle cx="36" cy="36.0001" r="28"/>
  </g>
  <g id="line">
    <circle cx="36" cy="36.0001" r="28" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default BlackCircle;
    