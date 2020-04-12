
import React from 'react';

const Flatbread = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <circle cx="36" cy="36" r="23" fill="#fcea2b"/>
    <path fill="#f1b31c" d="M54.6948,22.61a23,23,0,0,1-40.6742,20.182A23.0012,23.0012,0,1,0,54.6948,22.61Z"/>
  </g>
  <g id="line">
    <circle cx="36" cy="36" r="23" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="46.2638" x2="25.0506" y1="25.8938" y2="47.107" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="48.0355" x2="33.8933" y1="34.7365" y2="48.8786" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="27.1018" x2="23.5662" y1="35.016" y2="38.5515" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="37.7084" x2="30.6373" y1="24.4094" y2="31.4804" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="29.1529" x2="22.0818" y1="22.925" y2="29.996" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Flatbread;
    