
import React from 'react';

const BowlWithSpoon = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#FFFFFF" stroke="none" d="M7,36c0,16.0166,12.9834,29,29,29s29-12.9834,29-29H7z"/>
    <path fill="#9b9b9a" stroke="none" d="M50,23c0,0,3,1,6,1c0.25,0,2.75,0,3,0c3,0,6-1,6-1c0,2.7617-2.2383,5-5,5c-0.916,0-4.084,0-5,0 C52.2383,28,50,25.7617,50,23"/>
    <path fill="#d0cfce" stroke="none" d="M49,36c0,16.0156-4,29-13,29c16.0166,0,29-12.9844,29-29H49z"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M7,36c0,16.0166,12.9834,29,29,29s29-12.9834,29-29H7z"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M8,23h42c0,0,3,1,6,1c0.25,0,2.75,0,3,0c3,0,6-1,6-1c0,2.7617-2.2383,5-5,5c-0.916,0-4.084,0-5,0c-2.7617,0-5-2.2383-5-5"/>
  </g>
</svg>

    );
};

export default BowlWithSpoon;
    