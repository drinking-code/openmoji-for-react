
import React from 'react';

const NGButton = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <g id="color-2">
      <path fill="#92d3f5" d="M59.0349,59h-46.07A.9679.9679,0,0,1,12,58.0349v-46.07A.9679.9679,0,0,1,12.9651,11h46.07A.9679.9679,0,0,1,60,11.9651v46.07A.9679.9679,0,0,1,59.0349,59Z"/>
    </g>
  </g>
  <g id="line">
    <g id="NG_Button">
      <path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="M59.0349,59.3333h-46.07A.9679.9679,0,0,1,12,58.3682v-46.07a.9679.9679,0,0,1,.9651-.9651h46.07A.9679.9679,0,0,1,60,12.2984v46.07A.9679.9679,0,0,1,59.0349,59.3333Z"/>
      <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="22 42.833 22 27.833 32.714 42.833 32.714 27.833"/>
      <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M50.1964,29.1816a5.3366,5.3366,0,0,0-3.5535-1.3483h0a5.3572,5.3572,0,0,0-5.3572,5.3572v4.2857a5.3572,5.3572,0,0,0,5.3572,5.3571h0A5.3572,5.3572,0,0,0,52,37.4762V35.3053H47.7143"/>
    </g>
  </g>
</svg>

    );
};

export default NGButton;
    