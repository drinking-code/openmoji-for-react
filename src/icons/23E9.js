
import React from 'react';

const FastForwardButton = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color"/>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M31,17l18.7948,9.1111l15.817,7.6675c1.8509,0.8972,1.8509,3.5456,0,4.4428l-15.817,7.6675L31,55"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M5,17l18.8824,9.1111l15.8908,7.6675c1.8595,0.8972,1.8595,3.5456,0,4.4428L23.8824,45.889L5,55"/>
  </g>
</svg>

    );
};

export default FastForwardButton;
    