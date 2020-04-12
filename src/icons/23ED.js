
import React from 'react';

const NextTrackButton = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color"/>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M29.4839,17l16.976,9.1111l14.2864,7.6675c1.6717,0.8972,1.6717,3.5456,0,4.4428l-14.2864,7.6675L29.4839,55"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M6,17l17.0551,9.1111l14.3529,7.6675c1.6795,0.8972,1.6795,3.5456,0,4.4428l-14.3529,7.6675L6,55"/>
    <line x1="66" x2="66" y1="17" y2="55" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
</svg>

    );
};

export default NextTrackButton;
    