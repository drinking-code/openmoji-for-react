
import React from 'react';

const Stretcher = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <polygon fill="#92d3f5" points="46.894 34.519 16 34.519 16 40.484 56.286 40.484 56.286 34.519 56.286 30.072 46.894 34.519"/>
  </g>
  <g id="line">
    <polygon fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="46.894 34.519 16 34.519 16 40.484 56.286 40.484 56.286 34.519 56.286 30.072 46.894 34.519"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M28.3152,34.0516V32.31a2.1186,2.1186,0,0,1,2.1186-2.1186H41.8527A2.1185,2.1185,0,0,1,43.9712,32.31v1.7418"/>
    <circle cx="24.3397" cy="53.0785" r="2.9215" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <circle cx="48.1717" cy="53.0785" r="2.9215" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="45.0096" x2="27.0111" y1="40.6516" y2="51.5977" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="28.6986" x2="45.0096" y1="40.6516" y2="51.9883" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="27.2612" x2="45.2503" y1="53.0785" y2="53.0785" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Stretcher;
    