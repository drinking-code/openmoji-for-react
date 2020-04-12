
import React from 'react';

const Axe = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <polygon fill="#a57939" points="38.465 11.46 38.436 43.582 39.639 47.205 39.614 62.911 38.405 62.913 34.781 62.919 33.573 62.921 33.598 47.214 34.812 43.588 34.841 11.466 38.465 11.46"/>
    <polygon fill="#a57939" points="34.812 13.588 34.841 10.466 38.465 10.46 38.436 13.582 34.812 13.588"/>
    <path fill="#d0cfce" d="M45,15v7c-9,0-15,1-18,4V11C30,14,36,15,45,15Z"/>
  </g>
  <g id="line">
    <polygon fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="38.465 22.212 38.436 43.334 39.639 46.957 39.614 62.663 38.405 62.665 34.781 62.671 33.573 62.673 33.598 46.967 34.812 43.34 34.841 22.7 38.465 22.212"/>
    <polygon fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="34.812 14.34 34.841 11.218 38.465 11.212 38.436 14.334 34.812 14.34"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M45,15v7c-9,0-15,1-18,4V11C30,14,36,15,45,15Z"/>
  </g>
</svg>

    );
};

export default Axe;
    