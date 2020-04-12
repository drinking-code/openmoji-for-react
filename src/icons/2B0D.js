
import React from 'react';

const UpDownBlackArrow = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <polygon id="_" fill="#3f3f3f" points="52.509 48.279 48.409 44.579 39.809 53.779 39.809 17.478 48.409 26.678 52.509 22.978 36.709 6.278 20.909 22.978 25.009 26.678 33.609 17.478 33.609 53.779 25.009 44.579 20.909 48.279 36.709 64.979 52.509 48.279"/>
  </g>
  <g id="line">
    <polygon id="_2" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="52.509 48.279 48.409 44.579 39.809 53.779 39.809 17.478 48.409 26.678 52.509 22.978 36.709 6.278 20.909 22.978 25.009 26.678 33.609 17.478 33.609 53.779 25.009 44.579 20.909 48.279 36.709 64.979 52.509 48.279"/>
  </g>
</svg>

    );
};

export default UpDownBlackArrow;
    