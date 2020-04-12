
import React from 'react';

const CardIndex = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="11" y="18.1926" width="9" height="4.8074" fill="#ea5a47"/>
    <rect x="22.8604" y="18.1926" width="9" height="4.8074" fill="#b1cc33"/>
    <rect x="34.7209" y="18.1926" width="9" height="4.8074" fill="#92d3f5"/>
    <rect x="11" y="23" width="50" height="30" fill="#d0cfce"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.9008,18.1926h7.1985A.9008.9008,0,0,1,20,19.0934V23a0,0,0,0,1,0,0H11a0,0,0,0,1,0,0V19.0934A.9008.9008,0,0,1,11.9008,18.1926Z"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M23.7612,18.1926H30.96a.9008.9008,0,0,1,.9008.9008V23a0,0,0,0,1,0,0h-9a0,0,0,0,1,0,0V19.0934A.9008.9008,0,0,1,23.7612,18.1926Z"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M35.6216,18.1926H42.82a.9008.9008,0,0,1,.9008.9008V23a0,0,0,0,1,0,0h-9a0,0,0,0,1,0,0V19.0934A.9008.9008,0,0,1,35.6216,18.1926Z"/>
    <rect x="11" y="23" width="50" height="30" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default CardIndex;
    