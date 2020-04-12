
import React from 'react';

const Droplet = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#92D3F5" stroke="none" d="M56.0001,46.7065c0,11.7749-8.9543,21.2965-20,21.2965s-20-9.5455-20-21.3204 c0,0-0.2191-14.3086,16.6559-40.1878c0,0,3.1666-5.3703,6.3541-0.3523C55.8851,32.0216,56.0001,46.7065,56.0001,46.7065"/>
    <path fill="#61B2E4" stroke="none" d="M36,3.9991C48.875,14.375,55.875,44.8744,55.875,44.8744c0,15.0006-8.8293,23.1265-19.875,23.1265 C36,68.0009,58,49.8744,36,3.9991"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M56.0001,46.7065c0,11.7749-8.9543,21.2965-20,21.2965s-20-9.5455-20-21.3204c0,0-0.2191-14.3086,16.6559-40.1878 c0,0,3.1666-5.3703,6.3541-0.3523C55.8851,32.0216,56.0001,46.7065,56.0001,46.7065"/>
  </g>
</svg>

    );
};

export default Droplet;
    