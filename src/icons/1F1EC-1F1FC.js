
import React from 'react';

const Flag:GuineaBissau = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#fcea2b"/>
    <rect x="5" y="36" width="62" height="19" fill="#5c9e31"/>
    <rect x="5" y="17" width="21" height="38" fill="#d22f27"/>
    <polygon stroke="#000" stroke-linecap="round" stroke-linejoin="round" points="15.5 33.5 17.045 38.5 13 35.41 18 35.41 13.955 38.5 15.5 33.5"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Flag:GuineaBissau;
    