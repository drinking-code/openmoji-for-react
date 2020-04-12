
import React from 'react';

const BallotBoxWithBallot = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <g id="_1F5F3">
      <polygon fill="#d0cfce" points="42.147 32.46 39.735 38.34 25.83 32.638 25.903 32.46 14.484 32.46 14.484 59.633 57.508 59.633 57.508 32.46 42.147 32.46"/>
      <polygon fill="#9b9b9a" points="35.162 59.633 57.516 37.279 57.508 59.633 35.162 59.633"/>
      <rect x="24.2575" y="37.2698" width="23.6528" height="3.1959" fill="#d0cfce"/>
      <rect x="23.7083" y="37.861" rx="0.774" width="24.8607" height="1.8457" fill="#9b9b9a"/>
    </g>
  </g>
  <g id="line">
    <g id="_1F5F3-2">
      <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="42.41 32.46 57.508 32.46 57.508 57.369"/>
      <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="14.484 57.369 14.484 32.46 25.738 32.46"/>
      <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="37.054 37.241 25.83 32.638 34.144 12.367 48.048 18.07 40.247 37.091"/>
      <line x1="24.2722" x2="47.7203" y1="37.3039" y2="37.3039" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    </g>
  </g>
</svg>

    );
};

export default BallotBoxWithBallot;
    