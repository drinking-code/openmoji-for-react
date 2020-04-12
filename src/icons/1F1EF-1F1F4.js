
import React from 'react';

const Flag:Jordan = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#5c9e31"/>
    <rect x="5" y="30" width="62" height="12" fill="#fff"/>
    <rect x="5" y="17" width="62" height="13"/>
    <polygon fill="#d22f27" points="26 36 5 55 5 17 26 36"/>
    <polygon fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" points="13 33.5 13.556 34.945 15.005 34.49 14.25 35.838 15.5 36.716 14.002 36.95 14.113 38.5 13 37.445 11.887 38.5 11.998 36.95 10.5 36.716 11.75 35.838 10.995 34.49 12.444 34.945 13 33.5"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Flag:Jordan;
    