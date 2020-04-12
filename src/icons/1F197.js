
import React from 'react';

const OKButton = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#d0cfce" stroke="none" stroke-miterlimit="10" stroke-width="2" d="M59.0349,60H12.9651 C12.4343,60,12,59.5657,12,59.0349V12.9651C12,12.4343,12.4343,12,12.9651,12h46.0698C59.5657,12,60,12.4343,60,12.9651v46.0698 C60,59.5657,59.5657,60,59.0349,60z"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2" d="M59.0349,60H12.9651 C12.4343,60,12,59.5657,12,59.0349V12.9651C12,12.4343,12.4343,12,12.9651,12h46.0698C59.5657,12,60,12.4343,60,12.9651v46.0698 C60,59.5657,59.5657,60,59.0349,60z"/>
    <line x1="39.0516" x2="39.0516" y1="31.1524" y2="40.5976" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="39.0516" x2="44.4489" y1="37.2769" y2="31.1524" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="41.6496" x2="44.8838" y1="34.3288" y2="40.5976" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M31.4895,40.5976L31.4895,40.5976c-1.863,0-3.3733-1.5103-3.3733-3.3733v-2.6986c0-1.863,1.5103-3.3733,3.3733-3.3733l0,0 c1.863,0,3.3733,1.5103,3.3733,3.3733v2.6986C34.8628,39.0873,33.3525,40.5976,31.4895,40.5976z"/>
  </g>
</svg>

    );
};

export default OKButton;
    