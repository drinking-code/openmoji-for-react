
import React from 'react';

const Flag_CongoBrazzaville = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#d22f27"/>
    <polygon fill="#5c9e31" points="5 17 5 55 67 17 5 17"/>
    <polygon fill="#f1b31c" points="67 17 54 17 5 55 18 55 67 17"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Flag_CongoBrazzaville;
    