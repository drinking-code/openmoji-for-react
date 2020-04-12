
import React from 'react';

const Ring = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#D0CFCE" stroke="none" d="M37.625,25.0417c8.7995,0,15.9583,7.1589,15.9583,15.9583S46.4245,56.9583,37.625,56.9583 c-8.7995,0-15.9583-7.1589-15.9583-15.9583S28.8255,25.0417,37.625,25.0417 M37.625,21.0417 c-11.0227,0-19.9583,8.9357-19.9583,19.9583s8.9356,19.9583,19.9583,19.9583S57.5833,52.0227,57.5833,41 S48.6477,21.0417,37.625,21.0417L37.625,21.0417z"/>
    <polygon fill="#61B2E4" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="41.3137,17 33.6463,17 32.6463,11.9568 42.3137,11.9568"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <circle cx="37.625" cy="41" r="19.9583" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="27.9329" x2="31.1832" y1="11.9583" y2="18.4279" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="46.8751" x2="43.6249" y1="11.9568" y2="18.4264" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="41.3137,17 33.6463,17 32.6463,11.9568 42.3137,11.9568"/>
  </g>
</svg>

    );
};

export default Ring;
    