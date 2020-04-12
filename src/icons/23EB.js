
import React from 'react';

const FastUpButton = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color"/>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M17,41l9.1111-18.7948l7.6675-15.817c0.8972-1.8509,3.5456-1.8509,4.4428,0l7.6675,15.817L55,41"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M17,67l9.1111-18.8824l7.6675-15.8908c0.8972-1.8595,3.5456-1.8595,4.4428,0l7.6675,15.8908L55,67"/>
  </g>
</svg>

    );
};

export default FastUpButton;
    