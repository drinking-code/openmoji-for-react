
import React from 'react';

const Simple = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <ellipse cx="36" cy="36" rx="25" ry="25" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -14.9117 36)" fill="#FCEA2B" stroke="none"/>
    <path fill="#F1B31C" stroke="none" d="M37.4047,57.8288c-1.1317,1.1317-2.3078,2.1903-3.5108,3.2004c7.0546,0.5441,14.3056-1.8734,19.7134-7.2812 c9.8019-9.8019,9.8334-25.6625,0.0703-35.4256c-0.1668-0.1668-0.3489-0.3079-0.5192-0.469 C53.6602,32.2447,48.4137,46.8198,37.4047,57.8288z"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <circle cx="36" cy="36" r="25" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Simple;
    