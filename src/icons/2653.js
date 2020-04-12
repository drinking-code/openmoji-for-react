
import React from 'react';

const Pisces = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="12" y="12" width="48" height="47.83" fill="#b399c8"/>
  </g>
  <g id="line">
    <rect x="12" y="12" width="48" height="48" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="m23.39 50.52s7.057-4.043 6.983-14.52c0.0732-10.48-6.983-14.52-6.983-14.52"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="m48.61 21.48s-7.057 4.043-6.984 14.52c-0.0719 10.48 6.984 14.52 6.984 14.52"/>
    <line x1="48.18" x2="23.82" y1="36.52" y2="36.52" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
  </g>
</svg>

    );
};

export default Pisces;
    