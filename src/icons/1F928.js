
import React from 'react';

const FaceWithRaisedEyebrow = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#FCEA2B" d="M36,13c-12.6823,0-23,10.3177-23,23s10.3177,23,23,23s23-10.3178,23-23C59.0001,23.3177,48.6823,13,36,13z"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="0.5" d="M84.5059,61.5229"/>
    <circle cx="36" cy="36" r="23" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M23.0708,27.7432c0.4132-0.344,2.2456-1.7915,4.9091-1.6364c2.1608,0.1259,3.61,1.2333,4.0909,1.6364"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M48.9292,27.0952c-0.4132,0.344-2.2456,1.7915-4.9091,1.6364c-2.1608-0.1259-3.61-1.2333-4.0909-1.6364"/>
    <path d="M30,35c0,1.6568-1.3448,3-3,3c-1.6553,0-3-1.3433-3-3c0-1.6552,1.3447-3,3-3C28.6552,32,30,33.3448,30,35"/>
    <path d="M48,35c0,1.6568-1.3447,3-3,3s-3-1.3433-3-3c0-1.6552,1.3447-3,3-3S48,33.3448,48,35"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M29.1321,47.1385 c4.6002-1.4165,9.8284-1.4698,13.7359,0"/>
  </g>
</svg>

    );
};

export default FaceWithRaisedEyebrow;
    