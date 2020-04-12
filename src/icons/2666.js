
import React from 'react';

const DiamondSuit = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <polygon fill="#EA5A47" points="55,36 36,63 17,36 36,9"/>
  </g>
  <g id="line">
    <line x1="17" x2="36" y1="36" y2="63" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="36" x2="55" y1="63" y2="36" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="17" x2="36" y1="36" y2="9" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="36" x2="55" y1="9" y2="36" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default DiamondSuit;
    