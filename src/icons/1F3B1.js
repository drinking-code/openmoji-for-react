
import React from 'react';

const Pool8Ball = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" x="0" y="0" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <circle cx="36" cy="35.9583" r="29" fill="#3F3F3F"/>
    <circle cx="36" cy="35.9583" r="15" fill="#FFFFFF"/>
    <path fill-opacity="0.6" d="M50.738,10.9985c4.8254,5.1792,7.7822,12.1224,7.7822,19.7596c0,16.0162-12.9837,29-29,29 c-5.3519,0-10.3612-1.4558-14.6646-3.9839C20.1448,61.4195,27.6533,64.9583,36,64.9583c16.0162,0,29-12.9838,29-29 C65,25.327,59.2692,16.047,50.738,10.9985z"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <circle cx="36" cy="35.9583" r="29" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="36" cy="32.5951" r="3.3632" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="36" cy="40.3103" r="4.352" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Pool8Ball;
    