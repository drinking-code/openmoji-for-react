
import React from 'react';

const ToggleButton = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#d0cfce" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M51.0984,45.9794H21.0578c-5.5116,0-9.9797-4.4681-9.9797-9.9797v0c0-5.5116,4.4681-9.9797,9.9797-9.9797h30.0406 c5.5116,0,9.9797,4.4681,9.9797,9.9797v0C61.0781,41.5114,56.6101,45.9794,51.0984,45.9794z"/>
    <circle cx="20.9228" cy="36" r="10.0009" fill="#ea5a47" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="#ea5a47" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M27.5214,28.4459c4.0892,3.7129,4.3944,10.0377,0.6815,14.127s-10.0377,4.3943-14.127,0.6815"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M51.0984,45.9794H21.0578c-5.5116,0-9.9797-4.4681-9.9797-9.9797v0c0-5.5116,4.4681-9.9797,9.9797-9.9797h30.0406 c5.5116,0,9.9797,4.4681,9.9797,9.9797v0C61.0781,41.5114,56.6101,45.9794,51.0984,45.9794z"/>
    <circle cx="20.9228" cy="36" r="10.0009" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M27.5214,28.4459c4.0892,3.7129,4.3944,10.0377,0.6815,14.127s-10.0377,4.3943-14.127,0.6815"/>
  </g>
</svg>

    );
};

export default ToggleButton;
    