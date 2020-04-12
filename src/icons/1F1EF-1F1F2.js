
import React from 'react';

const Flag_Jamaica = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#5c9e31"/>
    <polygon points="36 36 5 55 5 17 36 36"/>
    <polygon points="36 36 67 55 67 17 36 36"/>
    <polygon fill="#fcea2b" points="5 23 5 17 12 17 67 49 67 55 60 55 5 23"/>
    <polygon fill="#fcea2b" points="67 23 67 17 60 17 5 49 5 55 12 55 67 23"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Flag_Jamaica;
    