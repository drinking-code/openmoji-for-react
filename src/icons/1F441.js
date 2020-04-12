
import React from 'react';

const Eye = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <ellipse cx="35.75" cy="36.4282" rx="34.8096" ry="20.4282" fill="#FFFFFF" stroke="none"/>
    <ellipse cx="35.75" cy="36.4282" rx="34.8096" ry="20.4282" fill="#FFFFFF" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="36" cy="35.9583" r="15.484" fill="#a57939" stroke="none"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <ellipse cx="35.75" cy="36.4282" rx="34.8096" ry="20.4282" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="36" cy="35.9583" r="8.4416" fill="#000000" stroke="none"/>
    <circle cx="36" cy="35.9583" r="8.4416" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="36" cy="35.9583" r="15.484" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Eye;
    