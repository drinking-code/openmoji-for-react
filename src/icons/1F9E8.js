
import React from 'react';

const Firecracker = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="line-supplement">
    <g>
      <line x1="62" x2="67.6569" y1="23" y2="21.5858" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <line x1="55" x2="56.4142" y1="14.3431" y2="20" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <line x1="60" x2="63" y1="20" y2="15" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
    </g>
  </g>
  <g id="color">
    <rect x="3.5162" y="31.2797" rx="1" width="40" height="13" transform="translate(-19.8266 27.6939) rotate(-45)" fill="#d22f27"/>
    <g>
      <line x1="62" x2="67.6569" y1="23" y2="21.5858" fill="none" stroke="#fcea2b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <line x1="55" x2="56.4142" y1="14.3431" y2="20" fill="none" stroke="#fcea2b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
      <line x1="60" x2="63" y1="20" y2="15" fill="none" stroke="#fcea2b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
    </g>
  </g>
  <g id="line">
    <rect x="3.5162" y="31.2797" rx="1" width="40" height="13" transform="translate(-19.8266 27.6939) rotate(-45)" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M58,23.28s-2.7574,6.8285-7,4,.4721-8.7639-4-11c-4-2-9.3417,7.3573-9.3417,7.3573"/>
  </g>
</svg>

    );
};

export default Firecracker;
    