
import React from 'react';

const PleadingFace = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <polygon id="SVGID" fill="#fcea2b" points="35.94 12.58 27.04 14.31 21.58 17.43 16.54 22.66 13 30.24 13 42.96 18.77 52.65 27.04 58.27 35.94 60 43.34 58.81 51.28 54.35 56.55 48 59.64 38.51 58.87 30.28 54.94 22.13 50.6 17.67 43.13 13.7"/>
  </g>
  <g id="line">
    <circle cx="36" cy="36" r="23" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m26.46 46.57c1.877-1.542 5.824-2.494 10-2.415 3.834 0.0726 7.293 1.003 9 2.415"/>
    <circle cx="27.76" cy="31.38" r="6.5" fill="#fff"/>
    <circle cx="27.56" cy="31.38" r="6.5" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="44.45" cy="31.38" r="6.5" fill="#fff"/>
    <circle cx="44.65" cy="31.38" r="6.5" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="27.56" cy="30.39" r="4.619" fill-rule="evenodd" paint-order="stroke fill markers"/>
    <circle cx="44.65" cy="30.39" r="4.619" fill-rule="evenodd" paint-order="stroke fill markers"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m52.32 24.93c-1.185-2.421-3-5-9-4"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19.95 24.93c1.185-2.421 3-5 9-4"/>
    <circle cx="26.08" cy="29.6" r="2" fill="#fff"/>
    <circle cx="43.17" cy="29.6" r="2" fill="#fff"/>
  </g>
</svg>

    );
};

export default PleadingFace;
    