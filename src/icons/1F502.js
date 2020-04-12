
import React from 'react';

const RepeatSingleButton = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color"/>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M10.575,43.2029C10.2,41.7851,10,40.2948,10,38.7571v-1.1077c0-9.4639,7.5752-17.1359,16.9198-17.1359h30.9084"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M14,51.4249"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M60.4944,25.9789C61.4615,28.1446,62,30.5495,62,33.0819v1.1137c0,9.5155-7.6025,17.2293-16.9806,17.2293H28.6192"/>
    <line x1="57.8281" x2="49.6427" y1="20.5135" y2="12.2997" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="49.6427" x2="57.8281" y1="28.7274" y2="20.5135" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="16.6469,46.4723 19.6258,44.2406 19.6258,55.001"/>
  </g>
</svg>

    );
};

export default RepeatSingleButton;
    