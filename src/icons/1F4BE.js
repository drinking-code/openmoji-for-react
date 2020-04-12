
import React from 'react';

const FloppyDisk = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="11.1359" y="11" width="50" height="50" fill="#3F3F3F" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <polyline fill="#D0CFCE" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="56.1359,60 56.1359,35.1616 16.1359,35.1616 16.1359,60"/>
    <polyline fill="#9B9B9A" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="16.1359,12 16.1359,29.6067 47.0488,29.6067 47.0488,12"/>
    <rect x="19.9563" y="38.96" width="32.0306" height="5.7713" fill="#61B2E4" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <rect x="11.1359" y="11" width="50" height="50" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="56.1359,60 56.1359,35.1616 16.1359,35.1616 16.1359,60"/>
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="16.1359,12 16.1359,29.6067 47.0488,29.6067 47.0488,12"/>
    <rect x="19.9563" y="38.96" width="32.0306" height="5.7713" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
</svg>

    );
};

export default FloppyDisk;
    