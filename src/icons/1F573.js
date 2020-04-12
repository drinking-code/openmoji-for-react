
import React from 'react';

const Hole = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <ellipse cx="36" cy="36" rx="32.5" ry="13.5" fill="#3F3F3F"/>
    <path fill="#9B9B9A" d="M36,32.5c13.5192,0,25.1072,3.3025,30.0053,8c1.6051-1.5394,2.4947-3.228,2.4947-5 c0-7.1797-14.5507-13-32.5-13s-32.5,5.8203-32.5,13c0,1.772,0.8896,3.4606,2.4947,5C10.8928,35.8025,22.4808,32.5,36,32.5z"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <ellipse cx="36" cy="36" rx="32.5" ry="13.5" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2" d="M36,32.5c13.5192,0,25.1072,3.3025,30.0053,8 c1.6051-1.5394,2.4947-3.228,2.4947-5c0-7.1797-14.5507-13-32.5-13s-32.5,5.8203-32.5,13c0,1.772,0.8896,3.4606,2.4947,5 C10.8928,35.8025,22.4808,32.5,36,32.5z"/>
  </g>
</svg>

    );
};

export default Hole;
    