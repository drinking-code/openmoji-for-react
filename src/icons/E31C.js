
import React from 'react';

const EyePain = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <circle cx="36.1436" cy="39.6511" r="8.8964" fill="#a57939"/>
  </g>
  <g id="line">
    <ellipse cx="36" cy="39.9211" rx="20" ry="11.7371" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <circle cx="36.1436" cy="39.6511" r="4.8502"/>
    <circle cx="36.1436" cy="39.6511" r="4.8502" fill="none"/>
    <circle cx="36.1436" cy="39.6511" r="8.8964" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="43.135 24.35 45.118 20.313 47.144 22.465 49.635 17.393"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="24.316 16.259 26.649 20.104 23.745 20.653 26.675 25.483"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="36.48 22.682 36.29 18.188 33.569 19.342 33.331 13.696"/>
  </g>
  <g id="color-foreground">
    <polyline fill="none" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="43.135 24.35 45.118 20.313 47.144 22.465 49.635 17.393"/>
    <polyline fill="none" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="24.316 16.259 26.649 20.104 23.745 20.653 26.675 25.483"/>
    <polyline fill="none" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="36.48 22.682 36.29 18.188 33.569 19.342 33.331 13.696"/>
  </g>
</svg>

    );
};

export default EyePain;
    