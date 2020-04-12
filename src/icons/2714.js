
import React from 'react';

const CheckMark = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color"/>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="#000000" stroke="none" d="M19.3413,39.65c3.1933,4.5057,5.8674,9.2499,7.9125,14.3846c0.8312,2.087,4.2258,2.6461,4.8214,0 c2.8382-12.6094,8.2115-27.1753,20.6865-33.0059c2.9126-1.3613,0.3767-5.6729-2.5236-4.3174 C36.62,23.0762,30.3584,38.9128,27.2539,52.7054c1.6071,0,3.2143,0,4.8214,0c-2.2113-5.552-4.9583-10.6994-8.4166-15.579 C21.813,34.5222,17.4753,37.017,19.3413,39.65L19.3413,39.65z"/>
  </g>
</svg>

    );
};

export default CheckMark;
    