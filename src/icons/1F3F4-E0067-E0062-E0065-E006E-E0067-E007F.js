
import React from 'react';

const Flag:England = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#fff"/>
    <polygon fill="#d22f27" stroke="#d22f27" stroke-miterlimit="10" stroke-width="2" points="67 33 39 33 39 17 33 17 33 33 5 33 5 39 33 39 33 55 39 55 39 39 67 39 67 33"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Flag:England;
    