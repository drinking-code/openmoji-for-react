
import React from 'react';

const Gemini = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="12" y="12" width="48" height="48" fill="#b399c8"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="m22.86 21.4s3.659 6.388 13.14 6.32c9.481 0.06785 13.14-6.32 13.14-6.32"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="m49.14 50.6s-3.659-6.388-13.14-6.32c-9.481-0.0677-13.14 6.32-13.14 6.32"/>
    <line x1="40.32" x2="40.32" y1="44.16" y2="27.85" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
    <line x1="30.32" x2="30.32" y1="44.85" y2="27.85" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
    <rect x="12" y="12" width="48" height="48" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Gemini;
    