
import React from 'react';

const FaceWithRollingEyes = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <circle cx="36" cy="36" r="23" fill="#FCEA2B"/>
    <circle cx="46" cy="32" r="6.5" fill="#FFFFFF"/>
    <circle cx="26" cy="32" r="6.5" fill="#FFFFFF"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <circle id="SVGID_5_" cx="46.0556" cy="28" r="2.5556"/>
    <circle id="SVGID_9_" cx="26.0556" cy="28" r="2.5556"/>
    <circle cx="36" cy="36" r="23" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="46" cy="32" r="6.5" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="26" cy="32" r="6.5" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="31" x2="41" y1="49.4967" y2="49.4967" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
</svg>

    );
};

export default FaceWithRollingEyes;
    