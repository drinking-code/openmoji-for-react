
import React from 'react';

const Forward = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color"/>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="46.8146,33.4278 55,25.2139 46.8146,17"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M32.3288,54.4975c-8.0865,0-14.6418-6.5554-14.6418-14.6418s6.5554-14.6418,14.6418-14.6418h21.7298"/>
  </g>
</svg>

    );
};

export default Forward;
    