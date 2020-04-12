
import React from 'react';

const Flag:BurkinaFaso = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#5c9e31"/>
    <rect x="5" y="17" width="62" height="19" fill="#d22f27"/>
    <polygon fill="#f1b31c" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" points="33.688 39.509 36.16 31.509 38.632 39.509 32.16 34.564 40.16 34.564 33.688 39.509"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Flag:BurkinaFaso;
    