
import React from 'react';

const Aries = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="12" y="12" width="48" height="48" fill="#b399c8"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="m36 48.84c3.087-16.36 6.337-26.33 11.64-25.68 2.611 0.586 3.711 3.609 2.58 5.817"/>
    <rect x="12" y="12" width="48" height="48" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="m36 48.84c-3.087-16.36-6.337-26.33-11.64-25.68-2.611 0.586-3.711 3.609-2.58 5.817"/>
  </g>
</svg>

    );
};

export default Aries;
    