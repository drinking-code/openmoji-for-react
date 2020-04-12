
import React from 'react';

const LeftArrow = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <polygon id="_x2B05__xFE0F_" fill="#3F3F3F" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="22.7876,51.5343 5,35.0363 22.7876,18.5382 26.5766,22.6138 16.1809,32.2554 67,32.2554 67,37.8171 16.1809,37.8171 26.5766,47.4587"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <polygon id="_x2B05__xFE0F_" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="22.7876,51.5343 5,35.0363 22.7876,18.5382 26.5766,22.6138 16.1809,32.2554 67,32.2554 67,37.8171 16.1809,37.8171 26.5766,47.4587"/>
  </g>
</svg>

    );
};

export default LeftArrow;
    