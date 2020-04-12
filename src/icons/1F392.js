
import React from 'react';

const Backpack = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#D22F27" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M56,31.0833c0-11.0457-8.9543-20-20-20s-20,8.9543-20,20v33.875h40V31.0833z"/>
    <path fill="#EA5A47" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M51.6465,52.9649v7.6214H20.3535v-7.492v1.9266v-24.416c0-8.6413,7.0052-15.6465,15.6465-15.6465s15.6465,7.0052,15.6465,15.6465 v24.416"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M56,31.0833c0-11.0457-8.9543-20-20-20s-20,8.9543-20,20v33.875h40V31.0833z"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M51.6465,52.9649v7.6214H20.3535v-7.492v1.9266v-24.416c0-8.6413,7.0052-15.6465,15.6465-15.6465s15.6465,7.0052,15.6465,15.6465 v24.416"/>
    <line x1="23.9041" x2="46.898" y1="49.4554" y2="49.4554" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M31,9c0-2.7614,2.2386-5,5-5s5,2.2386,5,5"/>
  </g>
</svg>

    );
};

export default Backpack;
    