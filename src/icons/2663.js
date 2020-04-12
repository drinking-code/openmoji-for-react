
import React from 'react';

const ClubSuit = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <circle cx="19" cy="36.7" r="11.5" fill="#3F3F3F"/>
    <circle cx="36.2" cy="19.6" r="11.5" fill="#3F3F3F"/>
    <circle cx="53.4" cy="36.7" r="11.5" fill="#3F3F3F"/>
    <path fill="#3F3F3F" d="M38.7,38.8c1.2,7.9,7,20.5,8.9,21.3H36.2l0,0H24.9c2-0.9,8.4-15.1,9-22.8l0.3-0.9l4.8,1.5L38.7,38.8z"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M38.7,38.8 c1.2,7.9,7,20.5,8.9,21.3H36.2l0,0H24.9c2-0.9,8.4-15.1,9-22.8"/>
    <circle cx="36.2" cy="19.6" r="11.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <circle cx="53.4" cy="36.7" r="11.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <circle cx="19" cy="36.7" r="11.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default ClubSuit;
    