
import React from 'react';

const Trolleybus = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="31" y="21" width="14" height="3" fill="#3f3f3f"/>
    <path fill="#d0cfce" d="M18,48h-.0853A2.9232,2.9232,0,0,1,15,45.0853V26.9147A2.9232,2.9232,0,0,1,17.9147,24H58.0853A2.9232,2.9232,0,0,1,61,26.9147V45.0853A2.9232,2.9232,0,0,1,58.0853,48H58"/>
    <rect x="15" y="38" width="45" height="9" fill="#61b2e4"/>
    <rect x="17" y="27" width="8" height="9" fill="#92d3f5"/>
    <rect x="30" y="27" width="7" height="7" fill="#92d3f5"/>
    <rect x="40" y="27" width="7" height="7" fill="#92d3f5"/>
    <rect x="50" y="27" width="7" height="7" fill="#92d3f5"/>
    <rect x="16" y="38" width="5" height="3" fill="#fff"/>
    <circle cx="54" cy="48" r="4" fill="#d0cfce"/>
    <circle cx="22" cy="48" r="4" fill="#d0cfce"/>
  </g>
  <g id="line">
    <line x1="50" x2="26.1209" y1="48" y2="48" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="30.909 24 30.909 21 46 21 46 24"/>
    <line x1="38.4546" x2="47" y1="21" y2="11" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <circle cx="22" cy="48" r="4" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <circle cx="54" cy="48" r="4" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="18 36 25 36 25 27.9"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="30.875 34 37 34 37 27.875"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="40.875 34 47 34 47 27.875"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="50.875 34 57 34 57 27.875"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18,48h-.0853A2.9232,2.9232,0,0,1,15,45.0853V26.9147A2.9232,2.9232,0,0,1,17.9147,24H58.0853A2.9232,2.9232,0,0,1,61,26.9147V45.0853A2.9232,2.9232,0,0,1,58.0853,48H58"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="17 41 21 41 21 39"/>
  </g>
</svg>

    );
};

export default Trolleybus;
    