
import React from 'react';

const Copyright = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <circle cx="36" cy="36.1661" r="23" fill="#D0CFCE" stroke="none"/>
    <path fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width="2" d="M47.0598,45.2754"/>
    <path fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width="2" d="M48.0598,46.0893"/>
    <path fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width="2" d="M45.4664,21.78"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-miterlimit="10" d="M49.5153,16.245"/>
    <path fill="none" stroke="#000000" stroke-miterlimit="10" d="M49.5153,17.0589"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M30.3679,21.9589"/>
    <circle cx="36" cy="35.9065" r="23" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M43.4255,46.1597c-1.5761,1.3979-3.65,2.2468-5.9225,2.2468l0,0c-4.931,0-8.9286-3.9975-8.9286-8.9286v-7.1429v7.1429v-7.1429 c0-4.9311,3.9975-8.9286,8.9286-8.9286l0,0c2.2725,0,4.3464,0.8489,5.9225,2.2471"/>
  </g>
</svg>

    );
};

export default Copyright;
    