
import React from 'react';

const Mountain = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" x="0" y="0" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#3F3F3F" d="M52,42.2c0,0-0.2-6.2-0.3-6.8s-0.7-1.6-1-2.1L48.2,29L42,24.5l-7.2,5.4l2.6,4.5l4.9-0.4l10.2,13.3L52,42.2z"/>
    <polyline fill="#9B9B9A" points="50,39 53.4,48.1 60,56 12,56 16,49 18,37 25,18 29,22 33,25 37,33 42,33 50,39"/>
    <path fill="none" stroke="#9B9B9A" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M50,39"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="60,55 53.4,48.1 50,39"/>
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="37,33 33,25 29,22 25,18 18,37 16,49 12,55"/>
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="31,24 32,33 42,33 50,39 49,45 50,50 48,52 45,55"/>
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="39,28 43,25 47,29 50,34"/>
  </g>
</svg>

    );
};

export default Mountain;
    