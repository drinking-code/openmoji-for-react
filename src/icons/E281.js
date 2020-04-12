
import React from 'react';

const IncredulousFace = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#FCEA2B" d="M36,13c-12.6823,0-23,10.3177-23,23c0,12.6822,10.3177,23,23,23c12.6822,0,23-10.3178,23-23 C59,23.3177,48.6822,13,36,13z"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <circle cx="36" cy="36" r="23" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M47.472,24.5833c-0.449,0.2959-2.431,1.5305-5.0607,1.0799c-2.1334-0.3656-3.4503-1.6274-3.8834-2.0815"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M24.528,24.5833c0.449,0.2959,2.431,1.5305,5.0607,1.0799c2.1334-0.3656,3.4503-1.6274,3.8834-2.0815"/>
    <path stroke="#000000" stroke-miterlimit="10" stroke-width="2" d="M41,45c0,2.2091-2.7909,4-5,4s-5-1.7909-5-4s2.7909-3,5-3 S41,42.7909,41,45z"/>
    <path d="M30,31c0,1.6568-1.3448,3-3,3c-1.6553,0-3-1.3433-3-3c0-1.6552,1.3447-3,3-3C28.6552,28,30,29.3448,30,31"/>
    <path d="M48,31c0,1.6568-1.3447,3-3,3s-3-1.3433-3-3c0-1.6552,1.3447-3,3-3S48,29.3448,48,31"/>
  </g>
</svg>

    );
};

export default IncredulousFace;
    