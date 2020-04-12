
import React from 'react';

const SmallOrangeDiamond = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="22.7114" y="22.2114" width="27.5772" height="27.5772" transform="translate(-14.7652 36.3536) rotate(-45)" fill="#e27022"/>
  </g>
  <g id="line">
    <rect x="22.7114" y="22.2114" width="27.5772" height="27.5772" transform="translate(-14.7652 36.3536) rotate(-45)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default SmallOrangeDiamond;
    