
import React from 'react';

const OrthodoxCross = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="12" y="12" width="48" height="47.83" fill="#b399c8"/>
  </g>
  <g id="line">
    <line x1="36" x2="36" y1="53" y2="19" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
    <line x1="47" x2="25" y1="28.5" y2="28.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
    <line x1="40.54" x2="31.46" y1="22.74" y2="22.74" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
    <line x1="40.74" x2="31.26" y1="49.63" y2="46.04" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
    <rect x="12" y="12" width="48" height="48" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default OrthodoxCross;
    