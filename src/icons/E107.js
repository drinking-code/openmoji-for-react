
import React from 'react';

const PageMove = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <polyline fill="#D0CFCE" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="36,15.9159 52,32.0335 52,56.0007 20,56.0007 20,15.9159 36,15.9159"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="36,15.9159 52,32.0335 52,56.0007 20,56.0007 20,15.9159 36,15.9159"/>
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="36,15.9159 35.9661,32.0335 46.5393,32.0335"/>
    <line x1="59.4865" x2="64.7021" y1="31.0472" y2="36.2629" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="59.4865" x2="64.7021" y1="41.521" y2="36.3054" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="12.7021" x2="7.4865" y1="41.521" y2="36.3054" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="12.7021" x2="7.4865" y1="31.0472" y2="36.2629" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
</svg>

    );
};

export default PageMove;
    