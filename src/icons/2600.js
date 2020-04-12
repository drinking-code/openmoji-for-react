
import React from 'react';

const Sun = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <polygon fill="#FCEA2B" stroke="none" points="66,36 55.3235,41.1816 61.9819,51.0063 50.1418,50.1424 51.0056,61.9823 41.1813,55.3236 36,66 30.8184,55.3235 20.9937,61.9819 21.8576,50.1418 10.0177,51.0056 16.6764,41.1813 6,36 16.6765,30.8184 10.0181,20.9937 21.8582,21.8576 20.9944,10.0177 30.8187,16.6764 36,6 41.1816,16.6765 51.0063,10.0181 50.1424,21.8582 61.9823,20.9944 55.3236,30.8187"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <circle cx="36" cy="35.95" r="19.8276" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="66,36 55.3235,41.1816 61.9819,51.0063 50.1418,50.1424 51.0056,61.9823 41.1813,55.3236 36,66 30.8184,55.3235 20.9937,61.9819 21.8576,50.1418 10.0177,51.0056 16.6764,41.1813 6,36 16.6765,30.8184 10.0181,20.9937 21.8582,21.8576 20.9944,10.0177 30.8187,16.6764 36,6 41.1816,16.6765 51.0063,10.0181 50.1424,21.8582 61.9823,20.9944 55.3236,30.8187"/>
  </g>
</svg>

    );
};

export default Sun;
    