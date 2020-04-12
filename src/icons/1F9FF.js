
import React from 'react';

const NazarAmulet = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <circle cx="36.2835" cy="35.9583" r="29" fill="#1e50a0"/>
    <path fill="#1e50a0" d="M52.1725,11.4337a29.2845,29.2845,0,0,1-40.46,40.4591,29.3,29.3,0,1,0,40.46-40.4591Z"/>
    <circle cx="36.2835" cy="35.9583" r="18.5" fill="#fff"/>
    <circle cx="36.2835" cy="35.9583" r="13" fill="#92d3f5"/>
    <path fill="#61b2e4" d="M43.0813,24.0672A13.5574,13.5574,0,0,1,24.35,42.7979,13.5644,13.5644,0,1,0,43.0813,24.0672Z"/>
  </g>
  <g id="line">
    <circle cx="36.2835" cy="35.9583" r="29" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <circle cx="36.2835" cy="35.9583" r="19.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <circle cx="36.2835" cy="35.9583" r="13" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <circle cx="36.2835" cy="35.9583" r="6" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default NazarAmulet;
    