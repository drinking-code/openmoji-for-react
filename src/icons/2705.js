
import React from 'react';

const CheckMarkButton = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#B1CC33" stroke="none" d="M53.1887,52.843H20.5794c-0.3752,0-0.6794-0.2955-0.6794-0.66v-31.68c0-0.3645,0.3042-0.66,0.6794-0.66 h21.5062h1.2918h2.0097h6.6745h1.1271c0.3752,0,0.6794,0.2955,0.6794,0.66v31.68C53.8681,52.5475,53.5639,52.843,53.1887,52.843z"/>
    <path fill="#FFFFFF" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M30.66,30.538c-1.85-2.61-6.18-0.11-4.32,2.52c3.19,4.51,5.87,9.25,7.91,14.38c0.84,2.09,4.23,2.65,4.83,0 c2.83-12.6,8.21-27.17,20.68-33c2.91-1.36,0.38-5.67-2.52-4.32c-11.43,5.35-17.68,17.36-21.23,29.25 C34.45,36.318,32.68,33.378,30.66,30.538z"/>
    <path fill="none" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M47.6549,25.4633"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M53,22.642v30.476c0,0.3645-0.2955,0.66-0.66,0.66H20.66c-0.3645,0-0.66-0.2955-0.66-0.66v-31.68c0-0.3645,0.2955-0.66,0.66-0.66 h20.0814h0.5672"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M30.66,30.538c-1.85-2.61-6.18-0.11-4.32,2.52c3.19,4.51,5.87,9.25,7.91,14.38c0.84,2.09,4.23,2.65,4.83,0 c2.83-12.6,8.21-27.17,20.68-33c2.91-1.36,0.38-5.67-2.52-4.32c-11.43,5.35-17.68,17.36-21.23,29.25 C34.45,36.318,32.68,33.378,30.66,30.538z"/>
  </g>
</svg>

    );
};

export default CheckMarkButton;
    