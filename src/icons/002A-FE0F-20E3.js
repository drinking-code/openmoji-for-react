
import React from 'react';

const Keycap_Asterisk = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="11.875" y="12.1663" width="48" height="47.834" fill="#d0cfce"/>
  </g>
  <g id="line">
    <rect x="12.125" y="11.9163" width="48" height="48" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="36.125" x2="36.125" y1="24.9163" y2="46.9163" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="26.9227" x2="45.3273" y1="29.8899" y2="41.9427" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="26.912" x2="45.338" y1="41.9264" y2="29.9062" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Keycap_Asterisk;
    