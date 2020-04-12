
import React from 'react';

const PetriDish = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <circle cx="36.0526" cy="36.3321" r="21.5814" fill="#d0cfce"/>
    <circle cx="36.0526" cy="36.3321" r="16.9387" fill="#92d3f5"/>
  </g>
  <g id="line">
    <circle cx="36.0526" cy="36.3321" r="16.9387" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="36.0526" cy="36.3321" r="21.5814" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="27.922" x2="32.0375" y1="28.9292" y2="26.219" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="28.3639" x2="26.9281" y1="42.5787" y2="37.8648" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="45.7305" x2="40.8795" y1="34.5571" y2="33.6905" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="40.4157" x2="41.6773" y1="44.4103" y2="39.6469" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="33.0563" cy="35.0695" r="0.8293" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="40.8696" cy="27.549" r="0.8293" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="35.2804" cy="47.5386" r="0.8293" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
</svg>

    );
};

export default PetriDish;
    