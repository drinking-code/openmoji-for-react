
import React from 'react';

const PageFacingUp = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <polyline fill="#D0CFCE" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="36,10.9583 55.9577,31.0626 55.9577,60.9583 16.0423,60.9583 16.0423,10.9583 36,10.9583"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="36,10.9583 55.9577,31.0626 55.9577,60.9583 16.0423,60.9583 16.0423,10.9583 36,10.9583"/>
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="36,10.9583 35.9577,31.0626 49.1463,31.0626"/>
  </g>
</svg>

    );
};

export default PageFacingUp;
    