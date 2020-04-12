
import React from 'react';

const GeigerCounter = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="16" y="12" rx="6" width="36" height="49" fill="#f4aa41"/>
    <circle cx="34" cy="26" r="10" fill="#fff"/>
    <ellipse cx="34" cy="31.5" rx="8.3475" ry="4.5" fill="#d0cfce"/>
    <path fill="#e27022" d="M52,55V18a6.0176,6.0176,0,0,0-6-6V61A6.0176,6.0176,0,0,0,52,55Z"/>
    <rect x="32" y="31" width="4" height="25" fill="#f1b31c"/>
  </g>
  <g id="line">
    <g>
      <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M24.7536,45.1329a.6288.6288,0,1,1-.3145-.5449A.6289.6289,0,0,1,24.7536,45.1329Z"/>
      <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M21.6082,45.1329a2.5152,2.5152,0,0,1,1.258-2.18l-1.2584-2.18a5.0306,5.0306,0,0,0-2.516,4.3592Z"/>
      <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M25.3829,47.3125a2.52,2.52,0,0,1-2.5167,0l-1.2584,2.18a5.0391,5.0391,0,0,0,5.0335,0Z"/>
      <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M25.3829,42.9533a2.5152,2.5152,0,0,1,1.258,2.18h2.5164a5.0308,5.0308,0,0,0-2.516-4.3592Z"/>
    </g>
    <rect x="16" y="12" rx="6" width="36" height="49" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M42.3475,31.5a9.9923,9.9923,0,0,0-16.695,0"/>
    <line x1="29" x2="30.7966" y1="23" y2="27.4935" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M36,35.7991a10,10,0,1,0-4,0"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M32,50.5547a4,4,0,1,0,4,0"/>
    <rect x="32" y="31" rx="1" width="4" height="25" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default GeigerCounter;
    