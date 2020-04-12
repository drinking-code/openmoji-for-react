
import React from 'react';

const EightSpokedAsterisk = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="line-supplement">
    <line x1="36" x2="36" y1="20.9811" y2="51.0189" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
    <line x1="51.0189" x2="20.9811" y1="36" y2="36" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
    <line x1="46.62" x2="25.38" y1="25.38" y2="46.62" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
    <line x1="46.62" x2="25.38" y1="46.62" y2="25.38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
  </g>
  <g id="color">
    <path fill="#5c9e31" d="M60,60.9583H12a.9448.9448,0,0,1-1-1v-48a.9448.9448,0,0,1,1-1H60a.9448.9448,0,0,1,1,1v48A.9448.9448,0,0,1,60,60.9583Z"/>
    <line x1="36" x2="36" y1="20.9394" y2="50.9772" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
    <line x1="51.0189" x2="20.9811" y1="35.9583" y2="35.9583" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
    <line x1="46.62" x2="25.38" y1="25.3383" y2="46.5783" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
    <line x1="46.62" x2="25.38" y1="46.5783" y2="25.3383" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M60,61H12a.9448.9448,0,0,1-1-1V12a.9448.9448,0,0,1,1-1H60a.9448.9448,0,0,1,1,1V60A.9448.9448,0,0,1,60,61Z"/>
  </g>
</svg>

    );
};

export default EightSpokedAsterisk;
    