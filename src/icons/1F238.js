
import React from 'react';

const JapaneseApplicationButton = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <g id="color-2">
      <path fill="#d0cfce" d="M59.0349,60h-46.07A.9679.9679,0,0,1,12,59.0349v-46.07A.9679.9679,0,0,1,12.9651,12h46.07A.9679.9679,0,0,1,60,12.9651v46.07A.9679.9679,0,0,1,59.0349,60Z"/>
    </g>
  </g>
  <g id="line">
    <path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="M59.0349,60h-46.07A.9679.9679,0,0,1,12,59.0349v-46.07A.9679.9679,0,0,1,12.9651,12h46.07A.9679.9679,0,0,1,60,12.9651v46.07A.9679.9679,0,0,1,59.0349,60Z"/>
    <line x1="25.5" x2="46.5" y1="41.5" y2="41.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="46.5" x2="25.5" y1="33.5" y2="33.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="47.5 43.5 47.5 26.5 24.5 26.5 24.5 43.5"/>
    <line x1="36.5" x2="36.5" y1="21.5" y2="51.5" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default JapaneseApplicationButton;
    