
import React from 'react';

const Keycap:# = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="11.875" y="12.208" width="48" height="47.834" fill="#d0cfce"/>
  </g>
  <g id="line">
    <rect x="12.125" y="11.958" width="48" height="48" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="33.4535" x2="30.9399" y1="27.616" y2="44.634" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="40.8101" x2="38.2965" y1="27.616" y2="44.634" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="28.0658" x2="44.7833" y1="32.3567" y2="32.3397" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="26.9667" x2="43.6842" y1="39.8468" y2="39.8296" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Keycap:#;
    