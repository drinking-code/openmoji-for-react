
import React from 'react';

const Flag_CanaryIslands = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#61b2e4"/>
    <rect x="5" y="17" width="21" height="38" fill="#fff"/>
    <rect x="46" y="17" width="21" height="38" fill="#fcea2b"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Flag_CanaryIslands;
    