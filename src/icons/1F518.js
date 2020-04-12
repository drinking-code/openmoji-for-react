
import React from 'react';

const RadioButton = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <circle cx="36" cy="36" r="22" fill="#3F3F3F" stroke="none" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="36" cy="36" r="12.7559" fill="#9B9B9A" stroke="none" stroke-miterlimit="10" stroke-width="2"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <circle cx="36" cy="36" r="22" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="36" cy="36" r="12.7559" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2"/>
  </g>
</svg>

    );
};

export default RadioButton;
    