
import React from 'react';

const Flag_CostaRica = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#fff"/>
    <rect x="5" y="29.5" width="62" height="13" fill="#d22f27"/>
    <rect x="5" y="49" width="62" height="6" fill="#1e50a0"/>
    <rect x="5" y="17" width="62" height="6" fill="#1e50a0"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Flag_CostaRica;
    