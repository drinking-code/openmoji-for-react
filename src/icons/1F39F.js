
import React from 'react';

const AdmissionTickets = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" x="0" y="0" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#D22F27" d="M57.6,35.9c0-4.9,3.9-9.1,9.4-10.6v-5.2H5v5.5c4.9,1.7,8.4,5.7,8.4,10.3S9.9,44.6,5,46.3v5.5h62v-5.2 C61.6,45.1,57.6,40.9,57.6,35.9z"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.2157" d="M57.1,35.6 c0-4.9,3.9-9.1,9.4-10.6v-5.2h-62v5.5c4.9,1.7,8.4,5.7,8.4,10.3s-3.5,8.6-8.4,10.3v5.5h62v-5.2C61.1,44.7,57.1,40.5,57.1,35.6z"/>
    <rect x="18.5" y="25" width="34" height="20" fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.0945"/>
  </g>
  <g id="color-foreground">
    <rect x="18.5" y="25" width="34" height="20" fill="none" stroke="#FFFFFF" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.1"/>
  </g>
</svg>

    );
};

export default AdmissionTickets;
    