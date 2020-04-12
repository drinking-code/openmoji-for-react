
import React from 'react';

const Ibeacon = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <circle cx="36" cy="32" r="5" fill="#3F3F3F" stroke="none"/>
    <polygon fill="#D0CFCE" stroke="none" points="34,62 38,62 36,37"/>
    <polyline fill="#9B9B9A" stroke="none" points="36,37 38,62 35.9802,62 36,37"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <circle cx="36" cy="32" r="5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="35,38 33,63 39,63 37,38"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M42.2646,50.9847C50.2388,48.3541,56,40.8554,56,32c0-11.0457-8.9543-20-20-20s-20,8.9543-20,20 c0,8.8554,5.7612,16.3541,13.7354,18.9847"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M41.5884,45.9128C47.1024,43.6956,51,38.3073,51,32c0-8.2843-6.7157-15-15-15s-15,6.7157-15,15 c0,6.3073,3.8976,11.6956,9.4116,13.9128"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M40.8953,40.7148C43.9401,39.0007,46,35.743,46,32c0-5.5229-4.4772-10-10-10s-10,4.4771-10,10c0,3.743,2.0599,7.0007,5.1047,8.7148"/>
  </g>
</svg>

    );
};

export default Ibeacon;
    