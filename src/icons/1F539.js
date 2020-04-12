
import React from 'react';

const SmallBlueDiamond = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="21.7114" y="22.2114" width="27.5772" height="27.5772" transform="translate(-15.0581 35.6464) rotate(-45)" fill="#92d3f5"/>
  </g>
  <g id="line">
    <rect x="21.7114" y="22.2114" width="27.5772" height="27.5772" transform="translate(-15.0581 35.6464) rotate(-45)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default SmallBlueDiamond;
    