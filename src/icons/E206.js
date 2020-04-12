
import React from 'react';

const ParkingGarage = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="12.0687" y="12.2354" width="48.3378" height="47.8639" fill="#61B2E4" stroke="none"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M59.1766,59.9266l-45.9998,0.1466c-0.5523,0.0018-1.0014-0.4445-1.0032-0.9968L12.027,13.0766 c-0.0018-0.5523,0.4445-1.0014,0.9968-1.0032l45.9998-0.1466c0.5523-0.0018,1.0014,0.4445,1.0032,0.9968l0.1466,45.9998 C60.1752,59.4757,59.7289,59.9248,59.1766,59.9266z"/>
    <line x1="19.062" x2="36.0365" y1="27.0479" y2="18.0001" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="53.0619" x2="36.0365" y1="26.9522" y2="18.0001" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M30.0226,53.0078v-22h8.3889c3.0263,0,5.4793,2.4533,5.4793,5.4796l0,0c0,3.0263-2.453,5.4793-5.4793,5.4793h-8.3889"/>
  </g>
</svg>

    );
};

export default ParkingGarage;
    