
import React from 'react';

const Flag:Namibia = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#5c9e31"/>
    <polygon fill="#1e50a0" points="5 17 5 55 67 17 5 17"/>
    <polygon fill="#d22f27" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="67 24 67 17 59 17 5 48 5 55 13 55 67 24"/>
    <circle cx="17" cy="27" r="4" fill="#fcea2b" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Flag:Namibia;
    