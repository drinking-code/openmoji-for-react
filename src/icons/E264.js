
import React from 'react';

const MoreInformation = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <polygon fill="#D0CFCE" stroke="none" points="56,32.8 39.2,32.8 39.2,16 32.8,16 32.8,32.8 16,32.8 16,39.2 32.8,39.2 32.8,56 39.2,56 39.2,39.2 56,39.2"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="56,32.8 39.2,32.8 39.2,16 32.8,16 32.8,32.8 16,32.8 16,39.2 32.8,39.2 32.8,56 39.2,56 39.2,39.2 56,39.2"/>
  </g>
</svg>

    );
};

export default MoreInformation;
    