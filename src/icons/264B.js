
import React from 'react';

const Cancer = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="12" y="12" width="48" height="47.83" fill="#b399c8"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="3" d="m33.61 30.26a5.559 5.559 0 1 1-5.559-5.558 5.56 5.56 0 0 1 5.559 5.558z"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="m25.7 25.26s10.84-4.787 23.81 3.012"/>
    <path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="3" d="m38.39 41a5.559 5.559 0 1 1 5.56 5.56 5.561 5.561 0 0 1-5.56-5.56z"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="m46.3 46s-10.84 4.787-23.81-3.012"/>
    <rect x="12" y="12" width="48" height="48" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Cancer;
    