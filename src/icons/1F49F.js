
import React from 'react';

const HeartDecoration = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="11" y="11" width="50" height="50" fill="#B399C8"/>
    <g id="line_2_">
      <path fill="#FFFFFF" d="M52,30.6393c0-4.7003-3.8103-8.5106-8.5106-8.5106c-3.2363,0-6.0501,1.8067-7.4894,4.4662 c-1.4392-2.6595-4.2531-4.4662-7.4894-4.4662C23.8103,22.1287,20,25.939,20,30.6393c0,2.0221,0.7083,3.8769,1.8862,5.337 l-0.0029,0.0023L36,53.4748l14.1167-17.4962l-0.0029-0.0023C51.2917,34.5161,52,32.6613,52,30.6393z"/>
    </g>
    <path fill="#FFFFFF" d="M22.6207,34.7299"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <rect x="11" y="11" width="50" height="50" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <g id="line_1_">
      <path fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M52,30.6393 c0-4.7003-3.8103-8.5106-8.5106-8.5106c-3.2363,0-6.0501,1.8067-7.4894,4.4662c-1.4392-2.6595-4.2531-4.4662-7.4894-4.4662 C23.8103,22.1287,20,25.939,20,30.6393c0,2.0221,0.7083,3.8769,1.8862,5.337l-0.0029,0.0023L36,53.4748l14.1167-17.4962 l-0.0029-0.0023C51.2917,34.5161,52,32.6613,52,30.6393z"/>
    </g>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M22.6207,34.7299"/>
  </g>
</svg>

    );
};

export default HeartDecoration;
    