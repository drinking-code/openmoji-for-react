
import React from 'react';

const SolarCell = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <polygon fill="#92D3F5" stroke="none" points="51,53 5,53 17,19 63,19"/>
    <polygon fill="#61B2E4" stroke="none" points="15.25,53 51,53 58.92,30.56"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="51,53 5,53 17,19 63,19"/>
    <line x1="40" x2="28" y1="19" y2="53" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="58.5022" x2="66" y1="31.7562" y2="53" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
</svg>

    );
};

export default SolarCell;
    