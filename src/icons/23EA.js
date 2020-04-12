
import React from 'react';

const FastReverseButton = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color"/>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M41,55l-18.7948-9.1111l-15.817-7.6675c-1.8509-0.8972-1.8509-3.5456,0-4.4428l15.817-7.6675L41,17"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M67,55l-18.8824-9.1111l-15.8908-7.6675c-1.8595-0.8972-1.8595-3.5456,0-4.4428l15.8908-7.6675L67,17"/>
  </g>
</svg>

    );
};

export default FastReverseButton;
    