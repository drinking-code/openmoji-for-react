
import React from 'react';

const IDButton = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#d0cfce" stroke="none" stroke-miterlimit="10" stroke-width="2" d="M59.0349,60H12.9651 C12.4343,60,12,59.5657,12,59.0349V12.9651C12,12.4343,12.4343,12,12.9651,12h46.0698C59.5657,12,60,12.4343,60,12.9651v46.0698 C60,59.5657,59.5657,60,59.0349,60z"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2" d="M59.0349,60H12.9651 C12.4343,60,12,59.5657,12,59.0349V12.9651C12,12.4343,12.4343,12,12.9651,12h46.0698C59.5657,12,60,12.4343,60,12.9651v46.0698 C60,59.5657,59.5657,60,59.0349,60z"/>
    <line x1="31.4661" x2="31.4661" y1="30.875" y2="40.875" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M40.0646,40.8564h-3.6434v-9.9627h3.6434c1.1485,0,2.0796,0.9311,2.0796,2.0796v5.8035 C42.1442,39.9253,41.2131,40.8564,40.0646,40.8564z"/>
  </g>
</svg>

    );
};

export default IDButton;
    