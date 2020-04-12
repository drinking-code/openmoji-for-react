
import React from 'react';

const Snail = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#6A462F" stroke="#6A462F" stroke-miterlimit="10" stroke-width="2" d="M23,39c2.2654-7.9289,10-3,10-3c6,5,1,15-8,13 s-9-12-6-17s14-9,21-1c1.8184,2.0781,2,6,1,14l-1,5l-9,1"/>
    <path fill="#A57939" stroke="none" d="M11,54c18.4032,1.6003,30.4041,0.9994,34.4661,0.2956c0.9792-0.1697,1.901-0.575,2.6746-1.1989 C64.912,39.5719,63,31,58,30c-3.1009-0.6202-9.1515,10.3756-12,14c-1.5905,2.0237-5,4-9,4"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <line x1="55" x2="57" y1="27" y2="30" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="58.8333" x2="61" y1="29.3333" y2="25" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M23.0007,39c2.2654-7.9289,10-3,10-3c6,5,1,15-8,13s-9-12-6-17s14-9,21-1c1.8184,2.0781,3,5,1,12"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M11,55c18.4032,1.6003,30.4041-0.0006,34.4661-0.7044c0.9792-0.1697,1.901-0.575,2.6746-1.1989C64.912,39.5719,63,31,58,30 c-3.1009-0.6202-9.1515,10.3756-12,14c-1.5905,2.0237-5,5-9,5"/>
  </g>
</svg>

    );
};

export default Snail;
    