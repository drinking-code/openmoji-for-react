
import React from 'react';

const Flag:ElSalvador = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#1e50a0"/>
    <rect x="5" y="30" width="62" height="12" fill="#fff"/>
    <path fill="none" stroke="#186648" stroke-linecap="round" stroke-linejoin="round" d="M39.5,36a3.5,3.5,0,0,1-7,0"/>
    <circle cx="36" cy="36" r="4.5" fill="none" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round"/>
    <polygon fill="#fcea2b" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="36 34 34 37 38 37 36 34"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Flag:ElSalvador;
    