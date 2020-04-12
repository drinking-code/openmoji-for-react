
import React from 'react';

const SpadeSuit = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#3F3F3F" d="M39.4,51.9c0.8,3.6,5.4,9.5,7.3,10.3H36H25.3c1.9-0.8,6.6-6.8,7.3-10.3L36,48L39.4,51.9z"/>
    <path fill="#3F3F3F" d="M12.3,42c0,7,5.6,12.6,12.6,12.6c4.8,0,9-2.7,11.1-6.6c2.1,3.9,6.3,6.6,11.1,6.6c7,0,12.6-5.6,12.6-12.6 c0-3-1-5.7-2.8-7.9l0,0L36,8.1l-20.9,26l0,0C13.3,36.2,12.3,39,12.3,42z"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M39.4,52.1 c0.8,3.6,5.4,9.3,7.3,10.1H36H25.3c1.9-0.8,6.6-6.6,7.3-10.1"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.3,42 c0,7,5.6,12.6,12.6,12.6c4.8,0,9-2.7,11.1-6.6c2.1,3.9,6.3,6.6,11.1,6.6c7,0,12.6-5.6,12.6-12.6c0-3-1-5.7-2.8-7.9l0,0L36,8.1 l-20.9,26l0,0C13.3,36.2,12.3,39,12.3,42z"/>
  </g>
</svg>

    );
};

export default SpadeSuit;
    