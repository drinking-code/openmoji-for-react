
import React from 'react';

const Tablet = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="13.3528" y="8.1195" width="44.8785" height="55.4381" fill="#D0CFCE" stroke="none"/>
    <polygon fill="#FFFFFF" stroke="none" points="58.2313,25.7465 40.6043,8.1195 19.9355,8.1195 19.9142,8.1407 58.2313,46.4578"/>
    <rect x="17.8806" y="13.0368" width="36.1591" height="41.4387" fill="#3F3F3F" stroke="none"/>
    <polygon fill="#9B9B9A" stroke="none" points="54.0397,42.2662 54.0397,21.5549 45.5216,13.0368 24.8103,13.0368"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M13.4698,62.5391V9.1669c0-0.55,0.45-1,1-1h43.0444c0.55,0,1,0.45,1,1v53.3722c0,0.55-0.45,1-1,1H14.4698 C13.9198,63.5391,13.4698,63.0891,13.4698,62.5391z"/>
    <circle cx="35.992" cy="59.0842" r="2" fill="#000000" stroke="none"/>
    <rect x="17.8806" y="13.0368" width="36.1591" height="41.4387" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Tablet;
    