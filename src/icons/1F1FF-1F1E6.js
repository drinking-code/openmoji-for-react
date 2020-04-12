
import React from 'react';

const Flag_SouthAfrica = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#d22f27"/>
    <rect x="5" y="36" width="62" height="19" fill="#1e50a0"/>
    <polygon fill="#5c9e31" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="5 55 26 42 67 42 67 30 26 30 5 17 5 55"/>
    <polygon stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="20 36 5 46 5 26 20 36"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Flag_SouthAfrica;
    