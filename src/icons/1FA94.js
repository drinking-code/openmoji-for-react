
import React from 'react';

const DiyaLamp = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#a57939" d="M6.5,34.5s4,2.5,4.35,4.1815C12.2991,43.0449,17.7225,56,37.6875,56,61.0625,56,64.5,35.5,64.5,35.5H11Z"/>
    <path fill="#6a462f" d="M50.21,37.0055S49.5,51.5,44.5,54.5s18-2,20-19Z"/>
    <path fill="#ea5a47" d="M5.8906,30s0-11.2658,1.6094-12.8752S9.1094,30,9.1094,30Z"/>
    <path fill="#f1b31c" d="M6.6953,30.5s0-5.6329.8047-6.4376S8.3047,30.5,8.3047,30.5Z"/>
    <path fill="#fcea2b" d="M7.1286,30s0-1.6.3714-1.9712S7.8714,30,7.8714,30Z"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5,34.5s4,2.5,4.35,4.1815C12.2991,43.0449,17.7225,56,37.6875,56,61.0625,56,64.5,35.5,64.5,35.5s-20.85,1.01-27.8063,1C30.2654,36.4905,11,35.5,11,35.5Z"/>
    <line x1="7.5" x2="7.5" y1="34.5" y2="32" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M5.8287,30.5s0-11.6991,1.6713-13.37S9.1713,30.5,9.1713,30.5Z"/>
  </g>
</svg>

    );
};

export default DiyaLamp;
    