
import React from 'react';

const Razor = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#92d3f5" d="M32.5,22.5s0,38,1,42,4,4,5,0c2.0308-8.123,1-42,1-42"/>
    <path fill="#92d3f5" d="M22.5,15.5s10,5,10,7h7c0-1.6987,7.214-5.5616,9.3876-6.6869.3855-.2.6124-.3131.6124-.3131Z"/>
    <rect x="20" y="6.5" rx="2.2437" ry="2.2437" width="32" height="9" fill="#d0cfce"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M32.5,22.5s0,38,1,42,4,4,5,0c2.0308-8.123,1-42,1-42"/>
    <rect x="20" y="6.5" rx="2.2437" ry="2.2437" width="32" height="9" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M22.5,15.5s10,5,10,7"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M39.5,22.5c0-1.6987,7.214-5.5616,9.3876-6.6869.3855-.2.6124-.3131.6124-.3131"/>
    <line x1="20" x2="52" y1="11" y2="11" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Razor;
    