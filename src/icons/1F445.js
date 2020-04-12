
import React from 'react';

const Tongue = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="none" stroke="none" d="M15.625,21.75c0,0,18.6733,0,41.75,0"/>
    <path fill="#ea5a47" stroke="none" d="M56.9668,16.7774c0,6-41.7793,7.8191-41.3418,1.0066C5.9695,53.0227,24.9617,60.375,36.5,60.375 S68.3952,54.3545,56.9668,16.7774z"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M62.4167,12.5C56.2812,19.625,48.9688,22.1893,36,22.1875C23.0312,22.1893,15.7188,19.625,9.5833,12.5"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M62.4167,12.5C56.2812,19.625,48.9688,22.1893,36,22.1875C23.0312,22.1893,15.7188,19.625,9.5833,12.5"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M57.375,21.75C66.5,55.1875,48.0383,60.375,36.5,60.375s-30-5.1875-20.875-38.625"/>
    <line x1="36.5" x2="36.5" y1="60.375" y2="34.1955" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Tongue;
    