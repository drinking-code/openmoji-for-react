
import React from 'react';

const Flag:Curaçao = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#1e50a0"/>
    <rect x="5" y="41" width="62" height="6" fill="#f1b31c"/>
    <polygon fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" points="17.5 26 19.045 31 15 27.91 20 27.91 15.955 31 17.5 26"/>
    <polygon fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" points="11.5 21 13.045 26 9 22.91 14 22.91 9.955 26 11.5 21"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Flag:Curaçao;
    