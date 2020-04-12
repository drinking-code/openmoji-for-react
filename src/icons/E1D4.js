
import React from 'react';

const Wire = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" x="0" y="0" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <line x1="16" x2="11" y1="36" y2="36" fill="none" stroke="#E27022" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="61" x2="56" y1="36" y2="36" fill="none" stroke="#E27022" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <rect x="16" y="35.94" width="40" height="4.06" fill="#D22F27"/>
    <rect x="16" y="32" width="40" height="4" fill="#EA5A47"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <rect x="16" y="32" width="40" height="8" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="16" x2="11" y1="36" y2="36" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="61" x2="56" y1="36" y2="36" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
  <g id="color-foreground">
    <path fill="#E27022" d="M15,37.0498h-4c-0.5801,0-1.0498-0.4697-1.0498-1.0498S10.4199,34.9502,11,34.9502h4"/>
    <path fill="#E27022" d="M57,34.9502h4c0.5801,0,1.0498,0.4697,1.0498,1.0498S61.5801,37.0498,61,37.0498h-4"/>
  </g>
</svg>

    );
};

export default Wire;
    