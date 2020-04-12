
import React from 'react';

const FlowerPlayingCards = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="17" y="5.0503" width="38" height="62" fill="#d22f27"/>
    <circle cx="30.9868" cy="21.3538" r="10" fill="#fff"/>
    <path fill="#3f3f3f" d="M55,48.1415c-19.5-19.5-38,.0252-38,.0252V67H55Z"/>
  </g>
  <g id="line">
    <rect x="17" y="5.0503" width="38" height="62" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <circle cx="30.9868" cy="21.3538" r="10" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17,48.1667s18.5-19.5,38,0"/>
  </g>
</svg>

    );
};

export default FlowerPlayingCards;
    