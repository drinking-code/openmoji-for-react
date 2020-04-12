
import React from 'react';

const MobileMessage = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="15.1768" y="7.9919" rx="3.68" ry="3.68" width="34.0431" height="55.9423" fill="#9b9b9a"/>
    <path fill="#3f3f3f" d="M45.3881,55.0093H19.0087a.9748.9748,0,0,1-.9727-.9727V15.13a.9748.9748,0,0,1,.9727-.9727H45.3881a.9747.9747,0,0,1,.9727.9727V54.0366A.919.919,0,0,1,45.3881,55.0093Z"/>
    <path fill="#fcea2b" d="M31.137,22.0732a3.6908,3.6908,0,0,0-3.68,3.68v14.996a.3105.3105,0,0,0,.46.276l4.6-4.048a.676.676,0,0,1,.552-.184H58.5534a3.6908,3.6908,0,0,0,3.68-3.68v-7.36a3.6908,3.6908,0,0,0-3.68-3.68Z"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46.3608,39.5475V54.0366a.919.919,0,0,1-.9727.9727H19.0087a.9748.9748,0,0,1-.9727-.9727V15.13a.9748.9748,0,0,1,.9727-.9727H45.3881a.9747.9747,0,0,1,.9727.9727v3.902"/>
    <circle cx="32.1984" cy="59.2655" r="1.9453" fill="#000000"/>
    <polygon fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="27.335 11.24 37.062 11.24 37.062 11.24 27.335 11.24"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M49.22,39.5475V60.2543a3.6908,3.6908,0,0,1-3.68,3.68H18.8568a3.6908,3.6908,0,0,1-3.68-3.68V11.6719a3.6908,3.6908,0,0,1,3.68-3.68H45.54a3.6908,3.6908,0,0,1,3.68,3.68v7.36"/>
    <path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="M31.137,22.0732a3.6908,3.6908,0,0,0-3.68,3.68v14.996a.3105.3105,0,0,0,.46.276l4.6-4.048a.676.676,0,0,1,.552-.184H58.5534a3.6908,3.6908,0,0,0,3.68-3.68v-7.36a3.6908,3.6908,0,0,0-3.68-3.68Z"/>
  </g>
</svg>

    );
};

export default MobileMessage;
    