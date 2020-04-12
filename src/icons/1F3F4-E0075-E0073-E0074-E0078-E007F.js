
import React from 'react';

const TexasFlag = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#fff"/>
    <rect x="5" y="36" width="62" height="19" fill="#d22f27" stroke-width="1.949"/>
    <rect x="6" y="17" width="19.67" height="38" fill="#1e50a0" stroke-width="1.648"/>
    <path fill="#fff" fill-rule="evenodd" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.629" d="m19.68 41.31-3.854-2.556-3.859 2.549 1.24-4.455-3.617-2.882 4.62-0.1977 1.624-4.33 1.616 4.333 4.62 0.2061-3.622 2.876z" paint-order="normal"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default TexasFlag;
    