
import React from 'react';

const Duplicate = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="12.8019" y="24.0856" width="34.8816" height="34.9435" fill="#D0CFCE" stroke="none"/>
    <rect x="24.8936" y="12.0814" width="34.9009" height="34.7857" fill="#FFFFFF" stroke="none"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M46.8015,51.984v7.013c0,0.55-0.45,1-1,1h-33c-0.55,0-1-0.45-1-1v-33c0-0.5523,0.4477-1,1-1h7.0819"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M58.8017,46.9968h-33c-0.55,0-1-0.45-1-1v-33c0-0.5523,0.4477-1,1-1h33c0.55,0,1,0.45,1,1v33 C59.8017,46.5468,59.3517,46.9968,58.8017,46.9968z"/>
  </g>
</svg>

    );
};

export default Duplicate;
    