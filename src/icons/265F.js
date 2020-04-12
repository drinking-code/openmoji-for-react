
import React from 'react';

const ChessPawn = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <polygon fill="#3f3f3f" points="53.533 60.1 16.928 60.1 27.58 48.157 30.8 35.363 41.152 37.079 44.987 48.082 53.533 60.1"/>
    <polyline points="43.531 45.449 53.533 60.1 40.586 60.1"/>
    <rect x="20.662" y="29.3371" width="32.2564" height="3.7256" fill="#3f3f3f"/>
    <circle cx="35.9999" cy="17" r="9.9999" fill="#3f3f3f"/>
    <path d="M41.381,8.58a9.9888,9.9888,0,0,1-13.8006,13.8A9.994,9.994,0,1,0,41.381,8.58Z"/>
  </g>
  <g id="line">
    <circle cx="36" cy="17" r="10" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21.5338,29.3371a2.0189,2.0189,0,0,0,0,4"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M30.8,35.6464C30.8,46.6134,18.9431,59.22,16.9277,60.1H36"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M41.25,36.8969C42.0826,47.55,53.1331,59.2536,55.0723,60.1H36"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M52.0466,33.3371a2.0189,2.0189,0,0,0,0-4"/>
    <line x1="21.5338" x2="52.0466" y1="29.3371" y2="29.3371" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="21.5338" x2="52.0466" y1="33.3371" y2="33.3371" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default ChessPawn;
    