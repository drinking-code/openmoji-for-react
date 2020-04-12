
import React from 'react';

const Flag:EquatorialGuinea = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#d22f27"/>
    <rect x="5" y="30" width="62" height="12" fill="#fff"/>
    <rect x="5" y="17" width="62" height="13" fill="#5c9e31"/>
    <polygon fill="#1e50a0" points="26 36 5 55 5 17 26 36"/>
    <line x1="40" x2="40" y1="34.5" y2="38.5" fill="none" stroke="#6a462f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="38" x2="42" y1="33.5" y2="33.5" fill="#5c9e31" stroke="#5c9e31" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Flag:EquatorialGuinea;
    