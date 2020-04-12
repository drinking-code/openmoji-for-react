
import React from 'react';

const Flag:Guyana = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#5c9e31"/>
    <polygon fill="#fcea2b" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="66 36 5 55 5 17 66 36"/>
    <polygon fill="#d22f27" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="26 36 5 55 5 17 26 36"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Flag:Guyana;
    