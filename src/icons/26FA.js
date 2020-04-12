
import React from 'react';

const Tent = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <polygon fill="#FCEA2B" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="36,18 14.54,55 57.46,55"/>
    <polygon fill="#F1B31C" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="36,18 14.54,55 36,55"/>
    <path fill="#8967AA" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M36,46.12c-1.48,0-4.44,1.48-7.4,1.48c-4.087,0-7.4,3.3131-7.4,7.4H36V46.12z"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="36,18 14.54,55 57.46,55"/>
    <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="36,18 14.54,55 36,55"/>
    <line x1="36" x2="36" y1="55" y2="18" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M36,46.12c-1.48,0-4.44,1.48-7.4,1.48c-4.087,0-7.4,3.3131-7.4,7.4H36V46.12z"/>
    <line x1="36" x2="36" y1="55" y2="18" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Tent;
    