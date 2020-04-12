
import React from 'react';

const WhiteMediumSquare = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="16.0834" y="15.9375" width="39.8332" height="39.8332" fill="#ffffff" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
  <g id="line">
    <rect x="16.0834" y="15.9375" width="39.8332" height="39.8332" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default WhiteMediumSquare;
    