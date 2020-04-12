
import React from 'react';

const Potentiometer = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" x="0" y="0" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="21" y="30" width="6" height="12" fill="#FFFFFF"/>
    <circle cx="41" cy="36" r="15" fill="#FFFFFF"/>
    <path fill="#D0CFCE" d="M30.4,46.6C33.1,49.3,36.9,51,41,51c8.3,0,15-6.7,15-15c0-3.6-1.3-6.9-3.4-9.5c-0.3-0.4-0.7-0.8-1.1-1.2"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <line x1="21" x2="16" y1="32" y2="32" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="21" x2="16" y1="36" y2="36" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="21" x2="16" y1="40" y2="40" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="27,41.4 27,42 21,42 21,30 27,30 27,30.6"/>
    <circle cx="41" cy="36" r="15" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="41" cy="36" r="4"/>
  </g>
  <g id="color-foreground">
    <path fill="#E27022" d="M20.005,30.99v2.02h-4.04c-0.606,0-1.01-0.505-1.01-1.01c0-0.505,0.404-1.01,1.01-1.01H20.005z"/>
    <path fill="#E27022" d="M20.005,34.99v2.02h-4.04c-0.606,0-1.01-0.505-1.01-1.01s0.404-1.01,1.01-1.01H20.005z"/>
    <path fill="#E27022" d="M20.005,38.99v2.02h-4.04c-0.606,0-1.01-0.505-1.01-1.01s0.404-1.01,1.01-1.01H20.005z"/>
  </g>
</svg>

    );
};

export default Potentiometer;
    