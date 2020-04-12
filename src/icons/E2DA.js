
import React from 'react';

const AtomBomb = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <polygon fill="#9b9b9a" points="39 30 44 25 44 22 28 22 28 25 33 30 39 30"/>
    <rect x="33" y="20" width="6" height="10" fill="#d0cfce"/>
    <path fill="#9b9b9a" d="M39,30l7,8V57a10,10,0,0,1-20,0V38l7-8Z"/>
    <path fill="#d0cfce" d="M36,67A10,10,0,0,1,26,57V38l7-8h6l3,8V57c0,5.5228-2.6863,10-6,10"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46,57a10,10,0,0,1-20,0"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="46 57 46 38 26 38 26 57"/>
    <rect x="33" y="20" width="6" height="10" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="26 38 33 30 28 25 28 22 32.972 22"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="46 38 39 30 44 25 44 22 39.27 22"/>
    <line x1="36" x2="36" y1="15" y2="5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="30" x2="30" y1="7" y2="18" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="42" x2="42" y1="7" y2="18" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <g>
      <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M37.0062,51.8749a.76.76,0,1,1-.38-.6583A.76.76,0,0,1,37.0062,51.8749Z"/>
      <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M33.2062,51.8749a3.0387,3.0387,0,0,1,1.52-2.6331l-1.52-2.6332a6.0777,6.0777,0,0,0-3.04,5.2663Z"/>
      <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M37.7665,54.5081a3.0441,3.0441,0,0,1-3.0405,0l-1.52,2.6331a6.0875,6.0875,0,0,0,6.081,0Z"/>
      <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M37.7665,49.2418a3.0386,3.0386,0,0,1,1.52,2.6331h3.04a6.0776,6.0776,0,0,0-3.0394-5.2663Z"/>
    </g>
  </g>
</svg>

    );
};

export default AtomBomb;
    