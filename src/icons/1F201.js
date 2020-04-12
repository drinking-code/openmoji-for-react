
import React from 'react';

const JapaneseHereButton = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="11.8049" y="11.6024" rx="1.6991" width="48.9841" height="48.9841" fill="#d0cfce"/>
  </g>
  <g id="line">
    <g>
      <path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="5" stroke-width="2" d="M17.3676,26.2186h16.53a.43.43,0,0,1,.43.43V48.9454"/>
      <line x1="34.3267" x2="17.3676" y1="46.2827" y2="46.2827" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="5" stroke-width="2"/>
      <path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="5" stroke-width="2" d="M37.4746,26.2186h16.53a.43.43,0,0,1,.4295.43V48.9454"/>
      <line x1="54.4338" x2="37.4746" y1="46.2827" y2="46.2827" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="5" stroke-width="2"/>
      <rect x="11.8049" y="11.6024" rx="1.6991" width="48.9841" height="48.9841" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
    </g>
  </g>
</svg>

    );
};

export default JapaneseHereButton;
    