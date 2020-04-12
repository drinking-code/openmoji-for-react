
import React from 'react';

const Basketball = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" x="0" y="0" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <circle cx="36" cy="36" r="29" fill="#F4AA41"/>
    <path fill="#E27022" d="M50.7,11c4.8,5.2,7.8,12.1,7.8,19.8c0,16-13,29-29,29c-5.4,0-10.4-1.5-14.7-4C20.1,61.4,27.7,65,36,65 c16,0,29-13,29-29C65,25.3,59.3,16,50.7,11z"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <line x1="7" x2="65" y1="36" y2="36" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="36" x2="36" y1="7" y2="65" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M55.2,57.7c-5.6-5.6-9-13.2-9-21.8c0-8.5,3.4-16.2,9-21.8"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M16.9,14.2c5.6,5.6,9,13.3,9,21.8s-3.4,16.2-9,21.8"/>
    <circle cx="36" cy="36" r="29" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Basketball;
    