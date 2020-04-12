
import React from 'react';

const Flag:NorfolkIsland = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#fff"/>
    <rect x="5" y="17" width="21" height="38" fill="#186648"/>
    <rect x="46" y="17" width="21" height="38" fill="#186648"/>
    <g>
      <polygon fill="#186648" stroke="#186648" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="36 26 32 30 36 29.2 40 30 36 26"/>
      <polygon fill="#186648" stroke="#186648" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="36 30 31 34 36 33.2 41 34 36 30"/>
      <polygon fill="#186648" stroke="#186648" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="36 34 30 38 36 37.2 42 38 36 34"/>
      <polygon fill="#186648" stroke="#186648" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="36 38 29 42 36 41.2 43 42 36 38"/>
      <line x1="36" x2="36" y1="40" y2="46" fill="none" stroke="#186648" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    </g>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Flag:NorfolkIsland;
    