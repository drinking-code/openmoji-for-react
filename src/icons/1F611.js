
import React from 'react';

const ExpressionlessFace = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#FCEA2B" d="M36,13c-12.6823,0-23,10.3177-23,23c0,12.6822,10.3177,23,23,23c12.6822,0,23-10.3178,23-23 C59,23.3177,48.6822,13,36,13z"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <circle cx="36" cy="36" r="23" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="27" x2="45" y1="43" y2="43" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="25" x2="30" y1="31" y2="31" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="43" x2="48" y1="31" y2="31" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
</svg>

    );
};

export default ExpressionlessFace;
    