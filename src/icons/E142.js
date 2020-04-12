
import React from 'react';

const Picture = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="6" y="41" width="60" height="13" fill="#B1CC33" stroke="none"/>
    <polygon fill="#5C9E31" stroke="none" points="42,41 66,41 66,54 31,54"/>
    <rect x="6" y="18" width="60" height="23" fill="#92D3F5" stroke="none"/>
    <polygon fill="#61B2E4" stroke="none" points="61,18 66,18 66,41 42,41"/>
    <polygon fill="#D0CFCE" stroke="none" points="22,43 33,32 44,43"/>
    <polygon fill="#D0CFCE" stroke="none" points="28.5464,43.0464 45.0464,26.5464 60.75,42.25"/>
    <path fill="#9b9b9a" stroke="#9b9b9a" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M40.3077,43"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <rect x="6" y="18" width="60" height="36" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="44,43 22,43 33,32 39.9976,38.9976"/>
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="39.7969,33.2031 45,28 60,43 43.9995,43"/>
  </g>
</svg>

    );
};

export default Picture;
    