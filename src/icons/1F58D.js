
import React from 'react';

const Crayon = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <polygon fill="#EA5A47" stroke="none" points="15.8466,59.4954 23.6833,54.7934 16.8591,47.9691 12.157,55.8059"/>
    <polygon fill="#EA5A47" stroke="none" points="24.5167,55.6267 16.8728,47.9829 16.0257,47.1357 53.2503,9.9112 61.7413,18.4022"/>
    <polygon fill="#d22f27" stroke="none" points="28.4351,51.7084 20.7912,44.0645 19.9441,43.2174 49.7237,13.4377 58.2147,21.9287"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.7888" d="M55.5203,56.0838"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.2166" d="M19.3526,43.2136"/>
    <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.2166" points="24.5167,55.6267 16.8728,47.9829 16.0257,47.1357 53.2503,9.9112 61.7413,18.4022"/>
    <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.2166" points="15.8466,59.4954 23.6833,54.7934 16.8591,47.9691 12.157,55.8059"/>
    <line x1="19.9938" x2="28.4028" y1="43.267" y2="51.676" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.2166"/>
    <line x1="49.7735" x2="58.1823" y1="13.4874" y2="21.8964" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.2166"/>
  </g>
</svg>

    );
};

export default Crayon;
    