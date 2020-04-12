
import React from 'react';

const Door = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="18" y="9" width="36" height="54" fill="#A57939" stroke="none" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <rect x="24" y="14.0943" width="24" height="16.3019" fill="#6A462F" stroke="none" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <rect x="24" y="45.6792" width="24" height="11.2075" fill="#6A462F" stroke="none" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <rect x="18" y="9" width="36" height="54" fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <ellipse cx="49" cy="36.5094" rx="2.5" ry="2.0377" fill="#000000" stroke="none"/>
    <path fill="#000000" stroke="none" d="M49.5,41.6038h-1c-0.5523,0-1-0.4477-1-1v-6.1509c0-0.5523,0.4477-1,1-1h1c0.5523,0,1,0.4477,1,1v6.1509 C50.5,41.1561,50.0523,41.6038,49.5,41.6038z"/>
    <rect x="24" y="14.0943" width="24" height="16.3019" fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <rect x="24" y="45.6792" width="24" height="11.2075" fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Door;
    