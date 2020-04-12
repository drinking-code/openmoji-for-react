
import React from 'react';

const Copy = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" x="0" y="0" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="23.8246" y="9.2081" width="32.1283" height="47.7648" fill="#9B9B9A"/>
    <rect x="19.9359" y="13.0968" width="32.1283" height="47.7648" fill="#FFFFFF"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="52.06,56.9698 55.95,56.9698 55.95,9.2098 23.82,9.2098 23.82,13.0998"/>
    <rect x="19.9359" y="13.0968" width="32.1283" height="47.7648" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="31.1709" x2="40.8291" y1="37.0208" y2="37.0208" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="36" x2="36" y1="41.8499" y2="32.1917" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Copy;
    