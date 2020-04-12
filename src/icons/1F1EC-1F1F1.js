
import React from 'react';

const Flag:Greenland = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#fff"/>
    <rect x="5" y="36" width="62" height="19" fill="#d22f27"/>
    <circle cx="24" cy="36" r="9" fill="#d22f27"/>
    <path fill="#fff" d="M24,45a9,9,0,0,0,9-9H15A9,9,0,0,0,24,45Z"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Flag:Greenland;
    