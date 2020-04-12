
import React from 'react';

const Battery = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#d0cfce" stroke="none" d="M59.971,42.7985c0-0.5523,0.4477-1,1-1h4.143v-9.183h-4.143c-0.5523,0-1-0.4477-1-1 M59.971,31.6155v-7.159 H6.662v25.013h53.309v-6.671"/>
    <path fill="#d0cfce" stroke="none" d="M61.083,32.3485c-0.5523,0-1-0.4477-1-1v-7.159H36.967H6.773v25.013h11.736h41.577v-6.671 c0-0.5523,0.4477-1,1-1h4.143v-9.183H61.083z"/>
    <path fill="#b1cc33" stroke="none" d="M12.002,45.3665h32.239v-17.007H12.002V45.3665z"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M61.081,31.3475v-7.159 c0-0.5523-0.4477-1-1-1H6.772c-0.5523,0-1,0.4477-1,1v25.016c0,0.5523,0.4477,1,1,1h53.313c0.5523,0,1-0.4477,1-1v-6.674h5.143 v-11.183H61.081z"/>
    <rect x="11" y="27.3595" width="34.239" height="19.007" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Battery;
    