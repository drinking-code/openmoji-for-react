
import React from 'react';

const WaningGibbousMoon = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <circle cx="36" cy="36" r="28" fill="#fcea2b" stroke="#3f3f3f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path fill="#3f3f3f" d="M55,35A28.001,28.001,0,0,1,28.4535,62.9626,27.9995,27.9995,0,1,0,36,8q-.7312,0-1.4535.0374A28.0059,28.0059,0,0,1,55,35Z"/>
  </g>
  <g id="line">
    <circle cx="36" cy="36" r="28" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M55,35A28.001,28.001,0,0,1,28.4535,62.9626,27.9995,27.9995,0,1,0,36,8q-.7312,0-1.4535.0374A28.0059,28.0059,0,0,1,55,35Z"/>
  </g>
</svg>

    );
};

export default WaningGibbousMoon;
    