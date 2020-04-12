
import React from 'react';

const TakeoutBox = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="51" y="27" width="4" height="2" fill="#d22f27"/>
    <rect x="17" y="27" width="4" height="2" fill="#d22f27"/>
    <rect x="20" y="49" width="32" height="2" fill="#d22f27"/>
  </g>
  <g id="line">
    <g>
      <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="17.712 29.958 20.562 54.5 51.437 54.5 54.287 29.958"/>
      <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="54.269 29.956 51.437 54.5 20.562 54.5 17 23.625"/>
      <line x1="55" x2="54.2695" y1="23.625" y2="29.9563" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    </g>
    <line x1="15" x2="8" y1="22" y2="37" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="57" x2="64" y1="22" y2="37" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="20" x2="52" y1="22" y2="22" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="20" x2="22" y1="22" y2="37" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="52" x2="50" y1="22" y2="37" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="22" x2="50" y1="37" y2="37" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="21" x2="51" y1="51" y2="51" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="20" x2="51" y1="48" y2="48" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="18" x2="20" y1="26" y2="26" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="18" x2="20" y1="29" y2="29" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="52" x2="54" y1="26" y2="26" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="52" x2="54" y1="29" y2="29" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <g>
      <path fill="#d22f27" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M42,22,54.7087,10.7238A.9611.9611,0,0,0,53.35,9.3646L42,22"/>
      <path fill="#d22f27" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M38,22,49.32,6.549A.9549.9549,0,0,0,49.0291,5.19a.9967.9967,0,0,0-1.3592.2913L38,22"/>
    </g>
  </g>
</svg>

    );
};

export default TakeoutBox;
    