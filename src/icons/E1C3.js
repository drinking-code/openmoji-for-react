
import React from 'react';

const Switch = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <polyline fill="#9B9B9A" stroke="none" points="39.9375,46.8438 57.9497,34.3934 63.6066,40.0503 51.0938,58.0625"/>
    <path fill="#D0CFCE" stroke="none" d="M51.5385,60C49.7175,51.9868,42.5643,46,34,46s-15.7175,5.9868-17.5385,14H51.5385z"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <line x1="10" x2="58" y1="60" y2="60" fill="none" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M51.5385,60 C49.7175,51.9868,42.5643,46,34,46s-15.7175,5.9868-17.5385,14H51.5385z"/>
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="39.9375,46.8438 57.9497,34.3934 63.6066,40.0503 51.0938,58.0625"/>
  </g>
</svg>

    );
};

export default Switch;
    