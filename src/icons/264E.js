
import React from 'react';

const Libra = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="12" y="12" width="48" height="48" fill="#b399c8"/>
  </g>
  <g id="line">
    <rect x="12" y="12" width="48" height="48" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m30.53 39.5h-10.53"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m52 39.5h-9.53"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m52 44.5h-32"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m30.53 39.5a8.443 8.443 0 0 1-1.83-9.201 8.443 8.443 0 0 1 7.8-5.212 8.443 8.443 0 0 1 7.8 5.212 8.443 8.443 0 0 1-1.83 9.201" paint-order="normal"/>
  </g>
</svg>

    );
};

export default Libra;
    