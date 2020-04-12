
import React from 'react';

const HomeButton = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <polygon fill="#D0CFCE" stroke="none" points="17.1289,59.7384 16.0605,34.7399 16.0812,27.7956 36.1491,8.1103 55.9811,27.9203 55.9766,43.3584 55.0371,52.0185 54.9219,59.7384 41.7865,59.1623 41.8149,41.6273 30.2251,41.6273 30.149,59.1623"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M41.9901,59.9508H53.982c0.55,0,1-0.45,1-1v-24.938"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M17.058,34.0128v24.938c0,0.55,0.45,1,1,1h12.1346"/>
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="8.4925,35.5947 36.0155,7.9766 63.5958,35.3474"/>
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="41.8149,59.9327 41.8149,41.6273 30.2251,41.6273 30.2251,59.9327"/>
  </g>
</svg>

    );
};

export default HomeButton;
    