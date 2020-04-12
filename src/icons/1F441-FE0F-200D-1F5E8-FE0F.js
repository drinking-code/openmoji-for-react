
import React from 'react';

const EyeInSpeechBubble = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#FFFFFF" d="M7.6875,31.4375c7.1875,11.9375,20.4718,18.9653,29.5625,21.5c4.5378,1.2652,16.125,9.75,16.125,9.75 S50.4832,54.1918,50,51.25c-1.8349-11.1713,13.0625-12.5,14.5311-20.4657C56,10.9583,26-6.6875,7.6875,31.4375z"/>
    <circle cx="36" cy="30.5" r="14.2224" fill="#A57939"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M7.6875,31.4375c7.1875,11.9375,20.4718,18.9653,29.5625,21.5c4.5378,1.2652,16.125,9.75,16.125,9.75S50.4832,54.1918,50,51.25 c-1.8349-11.1713,13.0625-12.5,14.5311-20.4657C56,10.9583,26-6.6875,7.6875,31.4375z"/>
    <circle cx="36" cy="30.5" r="7.7815"/>
    <circle cx="36" cy="30.5" r="14.2224" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="36" cy="30.5" r="7.7815" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
</svg>

    );
};

export default EyeInSpeechBubble;
    