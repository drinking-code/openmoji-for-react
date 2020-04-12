
import React from 'react';

const UpwardsButton = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color"/>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path id="_xD83D__xDD3C_" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M14.8653,55L25,36.1176l9.9304-18.5018c0.4407-0.8211,1.6984-0.8211,2.1391,0L47,36.1176L57.1347,55"/>
  </g>
</svg>

    );
};

export default UpwardsButton;
    