
import React from 'react';

const Flag:SouthSudan = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#5c9e31"/>
    <rect x="5" y="17" width="62" height="13"/>
    <rect x="5" y="30" width="62" height="12" fill="#d22f27" stroke="#fff" stroke-miterlimit="10"/>
    <polygon fill="#1e50a0" points="26 36 5 55 5 17 26 36"/>
    <polygon fill="#f1b31c" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" points="13.5 33.5 15.045 38.5 11 35.41 16 35.41 11.955 38.5 13.5 33.5"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Flag:SouthSudan;
    