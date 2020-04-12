
import React from 'react';

const Joystick = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <polyline fill="#EA5A47" stroke="none" points="17,55 17,52 24,52 24,55"/>
    <circle cx="36" cy="17" r="10" fill="#EA5A47" stroke="none"/>
    <path fill="#3F3F3F" stroke="none" d="M27,55c0-3.866,4.0294-7,9-7s9,3.134,9,7"/>
    <rect x="33" y="27" width="6" height="21" fill="#9B9B9A" stroke="#9B9B9A" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <rect x="14" y="55" width="44" height="10" fill="#9B9B9A" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <polygon fill="#D22F27" stroke="none" points="41,8 34,27 40,26 45,21 46,15"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <rect x="14" y="55" width="44" height="10" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2" d="M27,55c0-3.866,4.0294-7,9-7s9,3.134,9,7"/>
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="17,55 17,52 24,52 24,55"/>
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="39,44.703 39,44 39,27 33,27 33,44.7053"/>
    <circle cx="36" cy="17" r="10" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Joystick;
    