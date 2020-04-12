
import React from 'react';

const Chicken = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#EA5A47" stroke="none" d="M44.625,26.25C44.625,26.25,49,19,47,18s-5,1-5,1s2-7-2-7s-5,4-5,4s-1.4567-8.2961-7-6 c-3.4645,1.4351-5,5,0,15"/>
    <path fill="#FCEA2B" stroke="none" d="M36,64c0,0,30-1,15-29c0,0-4-11-15-11c-3.1038,0-5.6503,0.7166-7.7294,1.7902 C22.9815,28.5217,20.7178,33.5643,20,35C19,37,4,62,36,64z"/>
    <path fill="#F1B31C" stroke="none" d="M36,43c0,0,18-1,0,18C36,61,18,43,36,43z"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M44.625,26.25C44.625,26.25,49,19,47,18s-5,1-5,1s2-7-2-7s-5,4-5,4s-1.4567-8.2961-7-6c-3.4645,1.4351-5,5,0,15"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M36,64c0,0,30-1,15-29c0,0-4-11-15-11c-3.1038,0-5.6503,0.7166-7.7294,1.7902C22.9815,28.5217,20.7178,33.5643,20,35 C19,37,4,62,36,64z"/>
    <circle cx="27" cy="39" r="2" fill="#000000" stroke="none"/>
    <circle cx="45" cy="39" r="2" fill="#000000" stroke="none"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M36,43c0,0,18-1,0,18C36,61,18,43,36,43z"/>
  </g>
</svg>

    );
};

export default Chicken;
    