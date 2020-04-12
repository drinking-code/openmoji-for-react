
import React from 'react';

const WomansHat = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#A57939" stroke="#A57939" stroke-miterlimit="10" stroke-width="2" d="M36,16c11.0457,0,20,8.9543,20,20v10.0481 v4.7459H16v-4.7459V36C16,24.9543,24.9543,16,36,16"/>
    <polygon fill="#B1CC33" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="62.1381,46.1136 46.6142,38.4016 31.0902,46.1136 31.0902,30.6897 46.6142,38.4016 62.1381,30.6897"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M56,43.0481"/>
    <line x1="4" x2="68" y1="50.7941" y2="50.7941" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="62.1381,46.1136 46.6142,38.4016 31.0902,46.1136 31.0902,30.6897 46.6142,38.4016 62.1381,30.6897"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M16,46.0481V36c0-11.0457,8.9543-20,20-20c8.4569,0,15.6878,5.2488,18.6127,12.6665"/>
  </g>
</svg>

    );
};

export default WomansHat;
    