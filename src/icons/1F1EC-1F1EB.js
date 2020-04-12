
import React from 'react';

const Flag:FrenchGuiana = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#fcea2b"/>
    <polygon fill="#5c9e31" points="67 17 67 55 5 17 67 17"/>
    <polygon fill="#d22f27" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" points="33.703 39.269 36.242 31.823 38.431 39.155 32.35 34.737 40 34.553 33.703 39.269"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Flag:FrenchGuiana;
    