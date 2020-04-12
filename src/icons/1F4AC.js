
import React from 'react';

const SpeechBalloon = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#fff" d="m17.09 50.75c-3.184-4.073-5.088-9.191-5.088-14.75 0-13.23 10.77-24 24-24s24 10.77 24 24-10.77 24-24 24c-1.955 0-3.855-0.2406-5.676-0.6839-5.919-1.481-10.33-4.341-13.24-8.567z"/>
    <circle cx="23.48" cy="54.97" r="5" fill="#fff"/>
    <circle cx="-15.8" cy="62.94" r="2.5" transform="scale(-1,1)" fill="#fff"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="m31.54 58.56c1.442 0.2858 2.93 0.4391 4.455 0.4391 12.68 0 23-10.32 23-23s-10.32-23-23-23-23 10.32-23 23c0 4.913 1.552 9.467 4.187 13.21"/>
    <circle cx="26.79" cy="36" r="2"/>
    <circle cx="36" cy="36" r="2"/>
    <circle cx="45.21" cy="36" r="2"/>
    <circle cx="-4.026" cy="64.73" r="2.5" transform="matrix(-.9831 .1829 .1829 .9831 0 0)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="-13.58" cy="57.88" r="4.981" transform="matrix(-.9831 .1829 .1829 .9831 0 0)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
  </g>
</svg>

    );
};

export default SpeechBalloon;
    