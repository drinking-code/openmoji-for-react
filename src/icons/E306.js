
import React from 'react';

const Plaster = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="21.8271" y="30.6635" rx="4.3256" width="29.3048" height="10.5971" fill="#f4aa41"/>
  </g>
  <g id="line">
    <rect x="21.8271" y="30.656" rx="4.005" width="29.3048" height="10.5971" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="31.8075" x2="31.8075" y1="33.396" y2="38.4981" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="40.7099" x2="40.7099" y1="33.396" y2="38.4981" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <circle cx="35.0351" cy="34.7092" r="0.8056"/>
    <circle cx="37.7646" cy="34.7092" r="0.8056"/>
    <circle cx="35.0351" cy="37.1999" r="0.8056"/>
    <circle cx="37.7646" cy="37.1999" r="0.8056"/>
  </g>
</svg>

    );
};

export default Plaster;
    