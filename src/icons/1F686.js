
import React from 'react';

const Train = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="21.6" y="11" rx="3.0558" ry="3.0558" width="28.8" height="33.6" fill="#d0cfce"/>
    <rect x="25" y="18" width="22" height="10" fill="#3f3f3f"/>
    <rect x="25" y="35" width="5" height="5" fill="#fcea2b"/>
    <rect x="42" y="35" width="5" height="5" fill="#fcea2b"/>
  </g>
  <g id="line">
    <line x1="25" x2="12" y1="48" y2="61" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="60" x2="47" y1="61" y2="48" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="13" x2="59.3326" y1="57.9356" y2="58.2" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="17" x2="55.3326" y1="53.9356" y2="54.2" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="21" x2="51.3326" y1="49.9356" y2="50.2" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M47,19v8.8H26"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="26 40 30 40 30 36"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="43 40 47 40 47 36"/>
    <rect x="21.6" y="11" rx="3.0558" ry="3.0558" width="28.8" height="33.6" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Train;
    