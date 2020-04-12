
import React from 'react';

const Sort = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" x="0" y="0" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="16" y="33" width="31" height="6" fill="#FFFFFF"/>
    <rect x="16" y="21" width="39.9858" height="6" fill="#FFFFFF"/>
    <rect x="16" y="45" width="26" height="6" fill="#FFFFFF"/>
    <rect x="16" y="24" width="40" height="3" fill="#D0CFCE"/>
    <rect x="16" y="36" width="31" height="3" fill="#D0CFCE"/>
    <rect x="16.3333" y="48" width="26" height="3" fill="#D0CFCE"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <rect x="16" y="21" width="40" height="6" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <rect x="16" y="33" width="31" height="6" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <rect x="16.3333" y="45" width="26" height="6" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Sort;
    