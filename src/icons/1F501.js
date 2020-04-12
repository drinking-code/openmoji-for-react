
import React from 'react';

const RepeatButton = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color"/>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M11.5002,45.8108C10.5366,43.6567,10,41.2649,10,38.7462v-1.1077c0-9.4639,7.5752-17.1359,16.9198-17.1359h30.9084"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M60.4944,25.968C61.4615,28.1337,62,30.5386,62,33.071v1.1137c0,9.5155-7.6025,17.2293-16.9806,17.2293H14"/>
    <line x1="57.8281" x2="49.6427" y1="20.5027" y2="12.2888" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="49.6427" x2="57.8281" y1="28.7165" y2="20.5027" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="14" x2="22.1854" y1="51.414" y2="43.2001" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="22.1854" x2="14" y1="59.6279" y2="51.414" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
</svg>

    );
};

export default RepeatButton;
    