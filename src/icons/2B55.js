
import React from 'react';

const HollowRedCircle = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#EA5A47" stroke="none" d="M35.5661,6.4066c-16.0162,0-29,12.9838-29,29c0,16.0164,12.9838,29,29,29s29-12.9836,29-29 C64.5661,19.3903,51.5823,6.4066,35.5661,6.4066z M35.5661,55.4066c-11.0457,0-20-8.9543-20-20s8.9543-20,20-20s20,8.9543,20,20 S46.6118,55.4066,35.5661,55.4066z"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-miterlimit="10" d="M48.5153,25.5046"/>
    <path fill="none" stroke="#000000" stroke-miterlimit="10" d="M66,37.6554"/>
    <path fill="none" stroke="#000000" stroke-miterlimit="10" d="M48.5153,26.3185"/>
    <circle cx="35.7952" cy="35.9372" r="29" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <circle cx="35.7952" cy="35.9372" r="20" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default HollowRedCircle;
    