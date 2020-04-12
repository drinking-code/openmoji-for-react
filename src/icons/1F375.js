
import React from 'react';

const TeacupWithoutHandle = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#FFFFFF" stroke="none" d="M19.9055,55.7995h32.1874C62.8891,49.3081,68,36.2917,68,20.7519H4 C4,36.2917,9.1109,49.3081,19.9055,55.7995z"/>
    <rect x="18.3238" y="29.4186" width="14.019" height="17.5238" fill="#b1cc33" stroke="none"/>
    <polygon fill="#5c9e31" stroke="none" points="31,30 21,47 23,46.9424 32.3429,46.9424 32,30"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M19.5,20.3161H4c0,15.5398,5.1109,28.5562,15.9055,35.0476h32.1874C62.8891,48.8723,68,35.8559,68,20.3161H31.5"/>
    <line x1="25.5" x2="25.3334" y1="20.5" y2="31.4186" fill="none" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
    <rect x="18.3238" y="29.4186" width="14.019" height="17.5238" fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
</svg>

    );
};

export default TeacupWithoutHandle;
    