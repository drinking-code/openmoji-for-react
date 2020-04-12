
import React from 'react';

const Timer = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <circle cx="35.9047" cy="36.0138" r="27.0345" fill="#fcea2b"/>
    <circle cx="36.0058" cy="36.0369" r="21.8709" fill="#fff"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M55.1092,25.38a21.8626,21.8626,0,1,1-8.0938-8.2451"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M62.9392,35.9973a27.0463,27.0463,0,1,1-5.265-16.0382"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="47.394 21.578 58.432 20.418 57.272 9.38"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="49.975 36.354 35.987 36.354 35.891 36.354 35.891 18.52"/>
    <line x1="35.8906" x2="35.8906" y1="53.9106" y2="50.0661" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="21.143 36.354 18.086 36.354 18.086 36.354"/>
    <circle cx="35.8906" cy="36.3538" r="3.7371"/>
    <circle cx="48.6938" cy="47.9371" r="1.4802"/>
    <circle cx="23.0873" cy="24.7172" r="1.4802"/>
    <circle cx="23.0873" cy="47.9371" r="1.4802"/>
  </g>
</svg>

    );
};

export default Timer;
    