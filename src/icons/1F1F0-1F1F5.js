
import React from 'react';

const Flag:NorthKorea = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#d22f27"/>
    <circle cx="22.5873" cy="36.013" r="8.5" fill="#fff"/>
    <polygon fill="#d22f27" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" points="19.122 41.513 22.628 30.513 25.921 41.442 17.087 34.758 28.087 34.643 19.122 41.513"/>
    <rect x="5" y="49" width="62" height="6" fill="#1e50a0" stroke="#fff" stroke-miterlimit="10"/>
    <rect x="5" y="17" width="62" height="6" fill="#1e50a0" stroke="#fff" stroke-miterlimit="10"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Flag:NorthKorea;
    