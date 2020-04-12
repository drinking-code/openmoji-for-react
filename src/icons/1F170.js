
import React from 'react';

const AButton(bloodType) = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="line-supplement">
    <g id="A_Button">
      <path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2" d="M59.0349,60.1374h-46.07A.9679.9679,0,0,1,12,59.1723v-46.07a.9679.9679,0,0,1,.9651-.9651h46.07A.9679.9679,0,0,1,60,13.1025v46.07A.9679.9679,0,0,1,59.0349,60.1374Z"/>
      <g>
        <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="45.429 46.313 36 24.313 26.571 46.313"/>
        <line x1="29.7143" x2="42.2857" y1="41.0457" y2="41.0457" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      </g>
    </g>
  </g>
  <g id="color">
    <g id="color-2">
      <path fill="#d22f27" d="M59.0349,60h-46.07A.9679.9679,0,0,1,12,59.0349v-46.07A.9679.9679,0,0,1,12.9651,12h46.07A.9679.9679,0,0,1,60,12.9651v46.07A.9679.9679,0,0,1,59.0349,60Z"/>
    </g>
  </g>
  <g id="line"/>
  <g id="color-foreground">
    <g id="A_Button-2">
      <path fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="2" d="M59.0349,60h-46.07A.9679.9679,0,0,1,12,59.0349v-46.07A.9679.9679,0,0,1,12.9651,12h46.07A.9679.9679,0,0,1,60,12.9651v46.07A.9679.9679,0,0,1,59.0349,60Z"/>
      <g>
        <polyline fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="45.429 46.176 36 24.176 26.571 46.176"/>
        <line x1="29.7143" x2="42.2857" y1="40.9084" y2="40.9084" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      </g>
    </g>
  </g>
</svg>

    );
};

export default AButton(bloodType);
    