
import React from 'react';

const GlassOfMilk = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" x="0" y="0" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <polyline fill="#FFFFFF" points="53.545,27.9395 48.35,67 24.6,67 18.6794,28.0487"/>
    <polygon fill="#D0CFCE" points="43.404,29 38.35,67 48.35,67 53.404,29"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="48.35,67 24.6,67 17,17 55,17"/>
    <line x1="19" x2="54" y1="28" y2="28" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2"/>
  </g>
</svg>

    );
};

export default GlassOfMilk;
    