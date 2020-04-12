
import React from 'react';

const CircledM = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="line-supplement">
    <g id="M_Button">
      <circle cx="36" cy="35.9583" r="28" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"/>
      <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="45.429 46.458 45.429 24.458 36 43.315 26.571 24.458 26.571 46.458"/>
    </g>
  </g>
  <g id="color">
    <circle cx="36" cy="36" r="28" fill="#1e50a0"/>
  </g>
  <g id="line"/>
  <g id="color-foreground">
    <g id="M_Button-2">
      <circle cx="36" cy="36" r="28" fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="2"/>
      <polyline fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="45.429 46.5 45.429 24.5 36 43.357 26.571 24.5 26.571 46.5"/>
    </g>
  </g>
</svg>

    );
};

export default CircledM;
    