
import React from 'react';

const Cable = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" x="0" y="0" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="10.25" y="50.8568" width="10.625" height="4.2312" fill="#9B9B9A"/>
    <rect x="51" y="17.0845" width="10.625" height="4.2312" fill="#D0CFCE"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M21,53.2763h35.5642c0,0,6.4358,0,6.4358-9.1931S56.8847,34.89,56.8847,34.89H17.5768c0,0-5.8499,0-5.8499-8.3035 s5.8499-7.3535,5.8499-7.3535H50.796"/>
    <rect x="10.25" y="50.8568" width="10.625" height="4.2312" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <rect x="51" y="17.0845" width="10.625" height="4.2312" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Cable;
    