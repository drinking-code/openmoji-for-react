
import React from 'react';

const Keyboard = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" x="0" y="0" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="4" y="24" width="64" height="24" fill="#FFFFFF"/>
    <polygon fill="#D0CFCE" points="59,24 68,24 68,48 32,48"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <rect x="4" y="24" width="64" height="24" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <path d="M41,44H9c-0.6,0-1-0.4-1-1V29c0-0.6,0.4-1,1-1h32c0.6,0,1,0.4,1,1v14C42,43.6,41.6,44,41,44z"/>
    <path d="M63,44h-8c-0.6,0-1-0.4-1-1V29c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1v14C64,43.6,63.6,44,63,44z"/>
    <path d="M49.3,40.3v-0.7c0-0.6-0.4-1-1-1h-0.7c-0.6,0-1,0.4-1,1v0.7c0,0.6-0.4,1-1,1H45c-0.6,0-1,0.4-1,1V43c0,0.6,0.4,1,1,1h1.7 h2.7H51c0.6,0,1-0.4,1-1v-0.7c0-0.6-0.4-1-1-1h-0.7C49.8,41.3,49.3,40.9,49.3,40.3z"/>
    <path d="M51,34h-6c-0.6,0-1-0.4-1-1v-4c0-0.6,0.4-1,1-1h6c0.6,0,1,0.4,1,1v4C52,33.6,51.6,34,51,34z"/>
  </g>
  <g id="color-foreground">
    <path fill="#3F3F3F" d="M41,44H9c-0.6,0-1-0.4-1-1V29c0-0.6,0.4-1,1-1h32c0.6,0,1,0.4,1,1v14C42,43.6,41.6,44,41,44z"/>
    <path fill="#3F3F3F" d="M63,44h-8c-0.6,0-1-0.4-1-1V29c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1v14C64,43.6,63.6,44,63,44z"/>
    <path fill="#3F3F3F" d="M49.3,40.3v-0.7c0-0.6-0.4-1-1-1h-0.7c-0.6,0-1,0.4-1,1v0.7c0,0.6-0.4,1-1,1H45c-0.6,0-1,0.4-1,1V43 c0,0.6,0.4,1,1,1h1.7h2.7H51c0.6,0,1-0.4,1-1v-0.7c0-0.6-0.4-1-1-1h-0.7C49.8,41.3,49.3,40.9,49.3,40.3z"/>
    <path fill="#3F3F3F" d="M51,34h-6c-0.6,0-1-0.4-1-1v-4c0-0.6,0.4-1,1-1h6c0.6,0,1,0.4,1,1v4C52,33.6,51.6,34,51,34z"/>
  </g>
</svg>

    );
};

export default Keyboard;
    