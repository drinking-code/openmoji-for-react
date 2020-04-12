
import React from 'react';

const RecordButton = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color"/>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <circle cx="36" cy="36" r="15" fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="36" cy="36" r="5" fill="#000000" stroke="none"/>
  </g>
</svg>

    );
};

export default RecordButton;
    