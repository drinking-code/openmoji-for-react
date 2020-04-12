
import React from 'react';

const GraduationCap = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <polyline fill="#3F3F3F" stroke="#3F3F3F" stroke-miterlimit="10" stroke-width="2" points="56,27.9166 56,45.896 16,45.896 16,27.9166"/>
    <line x1="8.7932" x2="8.7932" y1="28.5" y2="36.9063" fill="#F1B31C" stroke="#F1B31C" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="8.7932" cy="36.9063" r="2" fill="#F1B31C" stroke="none"/>
    <polygon fill="#F1B31C" stroke="#F1B31C" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.747" points="10.7932,45.896 7,45.896 8.8966,37.7763 8.8966,37.7763"/>
    <rect x="4" y="22.875" width="64" height="5.0417" fill="#3F3F3F" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <polyline fill="#3F3F3F" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.747" points="56,30.9166 56,45.896 16,45.896 16,30.9166"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <circle cx="36" cy="22.0023" r="3" fill="#000000" stroke="none"/>
    <rect x="4" y="22.875" width="64" height="5.0417" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.747" points="56,30.9166 56,45.896 16,45.896 16,30.9166"/>
  </g>
</svg>

    );
};

export default GraduationCap;
    