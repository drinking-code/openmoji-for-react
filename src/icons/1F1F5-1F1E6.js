
import React from 'react';

const Flag:Panama = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#fff"/>
    <rect x="5" y="36" width="31" height="19" fill="#1e50a0"/>
    <rect x="36" y="17" width="31" height="19" fill="#d22f27"/>
    <polygon fill="#1e50a0" stroke="#1e50a0" stroke-linecap="round" stroke-linejoin="round" points="18.962 29.167 20.621 24.167 22.052 29.091 18.078 26.124 23.078 26.001 18.962 29.167"/>
    <polygon fill="#d22f27" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" points="50.962 48.167 52.621 43.167 54.052 48.091 50.078 45.124 55.078 45.001 50.962 48.167"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Flag:Panama;
    