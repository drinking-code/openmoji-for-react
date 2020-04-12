
import React from 'react';

const BlackSquareButton = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="16" y="16" width="40" height="40"/>
    <rect x="25" y="26" width="21" height="21" fill="#fff"/>
  </g>
  <g id="line">
    <rect x="16" y="16" width="40" height="40" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <rect x="25" y="26" width="21" height="21" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default BlackSquareButton;
    