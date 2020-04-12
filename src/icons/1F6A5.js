
import React from 'react';

const HorizontalTrafficLight = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#d0cfce" stroke="none" stroke-miterlimit="10" d="M54.09,46.91h-36c-3.85,0-7-3.15-7-7v-8c0-3.85,3.15-7,7-7h36 c3.85,0,7,3.15,7,7v8C61.09,43.76,57.94,46.91,54.09,46.91z"/>
    <circle cx="21.6177" cy="35.91" r="5.0001" fill="#b1cc33" stroke="none" stroke-miterlimit="10"/>
    <circle cx="35.6177" cy="35.91" r="5.0001" fill="#f4aa41" stroke="none" stroke-miterlimit="10"/>
    <circle cx="50.6177" cy="35.91" r="5.0001" fill="#ea5a47" stroke="none" stroke-miterlimit="10"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-miterlimit="10" d="M54.09,46.91h-36c-3.85,0-7-3.15-7-7v-8c0-3.85,3.15-7,7-7h36 c3.85,0,7,3.15,7,7v8C61.09,43.76,57.94,46.91,54.09,46.91z"/>
    <circle cx="21.6177" cy="35.91" r="5.0001" fill="none" stroke="#000000" stroke-miterlimit="10"/>
    <circle cx="35.6177" cy="35.91" r="5.0001" fill="none" stroke="#000000" stroke-miterlimit="10"/>
    <circle cx="50.6177" cy="35.91" r="5.0001" fill="none" stroke="#000000" stroke-miterlimit="10"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M53.91,46.91h-36c-3.85,0-7-3.15-7-7v-8c0-3.85,3.15-7,7-7h36c3.85,0,7,3.15,7,7v8C60.91,43.76,57.76,46.91,53.91,46.91z"/>
    <circle cx="21.4377" cy="35.91" r="5.0001" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="35.4377" cy="35.91" r="5.0001" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="50.4377" cy="35.91" r="5.0001" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
</svg>

    );
};

export default HorizontalTrafficLight;
    