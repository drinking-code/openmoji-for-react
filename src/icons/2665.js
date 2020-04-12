
import React from 'react';

const HeartSuit = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#EA5A47" d="M60.7,26.2c0-7.2-5.9-13.1-13.1-13.1c-5,0-9.3,2.8-11.5,6.9c-2.2-4.1-6.6-6.9-11.5-6.9	c-7.2,0-13.1,5.9-13.1,13.1c0,3.1,1.1,6,2.9,8.2l0,0l21.8,27l21.8-27l0,0C59.6,32.2,60.7,29.4,60.7,26.2z"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M60.7,26.2 c0-7.2-5.9-13.1-13.1-13.1c-5,0-9.3,2.8-11.5,6.9c-2.2-4.1-6.6-6.9-11.5-6.9c-7.2,0-13.1,5.9-13.1,13.1c0,3.1,1.1,6,2.9,8.2l0,0 l21.8,27l21.8-27l0,0C59.6,32.2,60.7,29.4,60.7,26.2z"/>
  </g>
</svg>

    );
};

export default HeartSuit;
    