
import React from 'react';

const EcgWaves = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color"/>
  <g id="line">
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="11 36.873 20.227 36.873 25.713 29.641 30.95 43.107 36.686 27.397 42.047 44.603 48.157 36.873 61 36.873"/>
  </g>
</svg>

    );
};

export default EcgWaves;
    