
import React from 'react';

const Flag_Canada = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#fff"/>
    <rect x="5" y="17" width="17" height="38" fill="#d22f27"/>
    <rect x="50" y="17" width="17" height="38" fill="#d22f27"/>
    <line x1="36" x2="36" y1="46" y2="41" fill="#d22f27" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <polyline fill="#d22f27" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="36 41 42.8 41 42 39 46 35 46 32 43 32 39 36 39 29 36 26"/>
    <polyline fill="#d22f27" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="36 41 29.2 41 30 39 26 35 26 32 29 32 33 36 33 29 36 26"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Flag_Canada;
    