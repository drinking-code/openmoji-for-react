
import React from 'react';

const ENDArrow = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <g>
      <polyline fill="#3f3f3f" points="56 27.5 56 30.567 28.156 30.567 28.156 39 15.5 27.5"/>
      <polyline fill="#3f3f3f" points="56 27.5 56 24.433 28.156 24.433 28.156 16 15.5 27.5"/>
    </g>
  </g>
  <g id="line">
    <g>
      <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="56 27.5 56 30.567 28.156 30.567 28.156 39 15.5 27.5"/>
      <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="56 27.5 56 24.433 28.156 24.433 28.156 16 15.5 27.5"/>
    </g>
    <g>
      <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="28.273 43.464 22.559 43.464 22.559 53.464 28.273 53.464"/>
      <line x1="22.5587" x2="26.8444" y1="48.4635" y2="48.4635" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    </g>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="32.755 53.506 32.755 43.506 39.898 53.506 39.898 43.506"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M44.8131,43.445H49.196a2.08,2.08,0,0,1,2.08,2.08v5.8408a2.08,2.08,0,0,1-2.08,2.08H44.8131a0,0,0,0,1,0,0v-10A0,0,0,0,1,44.8131,43.445Z"/>
  </g>
</svg>

    );
};

export default ENDArrow;
    