
import React from 'react';

const TradeMark = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <circle cx="36" cy="36.0006" r="23" fill="#d0cfce"/>
  </g>
  <g id="line">
    <circle cx="36" cy="36.0006" r="23" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="48 44.334 48 28.834 41.357 42.12 34.714 28.834 34.714 44.334"/>
    <line x1="22" x2="30.8571" y1="28.8344" y2="28.8344" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="26.4286" x2="26.4286" y1="28.8344" y2="44.3344" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default TradeMark;
    