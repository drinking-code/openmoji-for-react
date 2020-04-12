
import React from 'react';

const BaggageClaim = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="43" y="21" width="18" height="33" fill="#61b2e4"/>
    <rect x="11" y="21" width="32" height="33" fill="#92d3f5"/>
  </g>
  <g id="line">
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="17 21.552 11.343 21.552 11.343 53.313 17 53.313"/>
    <rect x="17.194" y="21.5522" width="37.6119" height="31.7612" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="55.138 21.517 60.798 21.568 60.515 53.328 54.855 53.277"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="45 21.552 54.657 21.552 54.657 53.313 45 53.313"/>
    <circle cx="15.5224" cy="58.3284" r="1.6716"/>
    <circle cx="9.6716" cy="58.3284" r="1.6716"/>
    <circle cx="62.3284" cy="58.3284" r="1.6716"/>
    <circle cx="56.4776" cy="58.3284" r="1.6716"/>
    <circle cx="50.6269" cy="58.3284" r="1.6716"/>
    <circle cx="44.7761" cy="58.3284" r="1.6716"/>
    <circle cx="38.9254" cy="58.3284" r="1.6716"/>
    <circle cx="33.0746" cy="58.3284" r="1.6716"/>
    <circle cx="27.2239" cy="58.3284" r="1.6716"/>
    <circle cx="21.3731" cy="58.3284" r="1.6716"/>
    <g>
      <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M28,21V17s0-4,4.7143-4H39"/>
      <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M44,21V17s0-4-4.7143-4H33"/>
    </g>
  </g>
</svg>

    );
};

export default BaggageClaim;
    