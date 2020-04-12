
import React from 'react';

const Flag:Cuba = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#fff"/>
    <rect x="5" y="32" width="62" height="8" fill="#1e50a0"/>
    <rect x="5" y="47" width="62" height="8" fill="#1e50a0"/>
    <rect x="5" y="17" width="62" height="8" fill="#1e50a0"/>
    <polygon fill="#d22f27" points="26 36 5 55 5 17 26 36"/>
    <polygon fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" points="11.413 39.046 13.736 32.046 15.739 38.939 10.175 34.785 17.175 34.613 11.413 39.046"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Flag:Cuba;
    