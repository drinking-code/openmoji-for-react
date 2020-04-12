
import React from 'react';

const LastTrackButton = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color"/>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M42.5161,55l-16.976-9.111l-14.2864-7.6675c-1.6717-0.8972-1.6717-3.5456,0-4.4428l14.2864-7.6675L42.5161,17"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M66,55l-17.0551-9.1111L34.592,38.2214c-1.6795-0.8972-1.6795-3.5456,0-4.4428l14.3529-7.6675L66,17"/>
    <line x1="6" x2="6" y1="55" y2="17" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
</svg>

    );
};

export default LastTrackButton;
    