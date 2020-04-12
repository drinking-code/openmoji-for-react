
import React from 'react';

const FirstQuarterMoon = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#fcea2b" d="M49.4515,44.8757a1.5009,1.5009,0,0,0,0-3,1.5009,1.5009,0,0,0,0,3Z"/>
    <path fill="#fcea2b" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M64,36A28,28,0,0,0,36,8V64A28,28,0,0,0,64,36Z"/>
    <path fill="#3f3f3f" stroke="#3f3f3f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8,36A28,28,0,0,0,36,64V8A28,28,0,0,0,8,36Z"/>
  </g>
  <g id="line">
    <circle cx="36" cy="36" r="28" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M64,36A28,28,0,0,0,36,8V64A28,28,0,0,0,64,36Z"/>
  </g>
</svg>

    );
};

export default FirstQuarterMoon;
    