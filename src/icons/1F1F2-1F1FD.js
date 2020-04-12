
import React from 'react';

const Flag_Mexico = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#fff"/>
    <rect x="5" y="17" width="21" height="38" fill="#5c9e31"/>
    <rect x="46" y="17" width="21" height="38" fill="#d22f27"/>
    <circle cx="36" cy="35" r="3.5" fill="#a57939" stroke="#a57939" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="none" stroke="#5c9e31" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M30,39.4863a7.48,7.48,0,0,0,12,0"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Flag_Mexico;
    