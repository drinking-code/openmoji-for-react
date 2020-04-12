
import React from 'react';

const Leo = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="11.88" y="12.21" width="48" height="47.83" fill="#b399c8"/>
  </g>
  <g id="line">
    <rect x="12.12" y="11.96" width="48" height="48" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m34.44 37.72c-0.735-3.912-1.132-7.879-1.186-11.86 0-5.93 9.487-8.301 11.86-2.372 1.888 7.085-11.79 27.93-2.372 28.46 4.744 0 3.988-5.356 3.988-5.356"/>
    <circle cx="29.13" cy="39.22" r="5.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" paint-order="normal"/>
  </g>
</svg>

    );
};

export default Leo;
    