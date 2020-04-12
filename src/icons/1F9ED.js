
import React from 'react';

const Compass = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="line-supplement">
    <polyline points="33.2 33.2 48 24 38.8 38.8"/>
  </g>
  <g id="color">
    <circle cx="36" cy="36" r="24" fill="#fcea2b"/>
    <path fill="#f1b31c" d="M53,19A24.0417,24.0417,0,0,1,36,60a24.302,24.302,0,0,1-17-7"/>
    <polyline fill="#fff" points="33.2 33.2 24 48 38.8 38.8"/>
    <polyline fill="#ea5a47" points="33.2 33.2 48 24 38.8 38.8"/>
  </g>
  <g id="line">
    <circle cx="36" cy="36" r="24" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="33.2 33.2 24 48 38.8 38.8"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="33.2 33.2 48 24 38.8 38.8"/>
    <line x1="36" x2="36" y1="21" y2="16" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="36" x2="36" y1="56" y2="51" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="51" x2="56" y1="36" y2="36" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="16" x2="21" y1="36" y2="36" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Compass;
    