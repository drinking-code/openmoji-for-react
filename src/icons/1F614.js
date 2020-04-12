
import React from 'react';

const PensiveFace = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#FCEA2B" d="M36,13c-12.6823,0-23,10.3177-23,23c0,12.6822,10.3177,23,23,23c12.6822,0,23-10.3178,23-23 C59,23.3177,48.6822,13,36,13z"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <circle cx="36" cy="36" r="23" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="27" x2="45" y1="46" y2="46" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M23,33.0774c0.4132,0.344,2.2456,1.7915,4.9091,1.6364c2.1608-0.1259,3.61-1.2333,4.0909-1.6364"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M41,33.0774c0.4132,0.344,2.2456,1.7915,4.9091,1.6364c2.1608-0.1259,3.61-1.2333,4.0909-1.6364"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M19.9385,27.2501c0.4872,0.2275,2.6277,1.1608,5.1639,0.3327c2.0576-0.6718,3.1771-2.1117,3.5396-2.6239"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M52.642,27.2501c-0.4872,0.2275-2.6277,1.1608-5.1639,0.3327c-2.0576-0.6718-3.1771-2.1117-3.5396-2.6239"/>
  </g>
</svg>

    );
};

export default PensiveFace;
    