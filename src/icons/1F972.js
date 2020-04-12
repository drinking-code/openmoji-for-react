
import React from 'react';

const SmilingFaceWithTear = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <g id="color-2">
      <circle cx="36.0001" cy="36" r="22.9999" fill="#fcea2b"/>
    </g>
    <path fill="#92d3f5" d="M44.5416,46.2169a3.6376,3.6376,0,0,1-1.1052-2.5764c-.0405-3.2205,2.9651-6.34,3.0929-6.4712a.6891.6891,0,0,1,.9748-.0123c.1313.1281,3.2143,3.1713,3.2555,6.3924l0,0a3.6626,3.6626,0,0,1-6.2183,2.6673Z"/>
  </g>
  <g id="line">
    <circle cx="36" cy="36" r="23" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M44.1521,45.7678a20.0408,20.0408,0,0,1-17.967-.8385"/>
    <path d="M30,31a3,3,0,1,1-3-3,3.0011,3.0011,0,0,1,3,3"/>
    <path d="M48,31a3,3,0,1,1-3-3,3.001,3.001,0,0,1,3,3"/>
    <path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="M44.5416,46.2169a3.6376,3.6376,0,0,1-1.1052-2.5764c-.0405-3.2205,2.9651-6.34,3.0929-6.4712a.6891.6891,0,0,1,.9748-.0123c.1313.1281,3.2143,3.1713,3.2555,6.3924l0,0a3.6626,3.6626,0,0,1-6.2183,2.6673Z"/>
  </g>
</svg>

    );
};

export default SmilingFaceWithTear;
    