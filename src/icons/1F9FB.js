
import React from 'react';

const RollOfPaper = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#d0cfce" d="M44.6572,55.5807c3.4381-2.325,10.0736-7.3631,10.0736-7.3631V18.9432c-1.7678,1.5784-7.5955,4.3984-10.0736,5.1556"/>
    <ellipse cx="32.0767" cy="20.4671" rx="3.5538" ry="1.6226" fill="#fff"/>
  </g>
  <g id="line">
    <ellipse cx="32.406" cy="20.8484" rx="15.1368" ry="5.5336" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="M17.2692,51.9165c0,3.0611,6.7773,5.5315,15.1335,5.5315,8.367,0,12.8494-1.7918,16.5212-4.3771"/>
    <line x1="17.2692" x2="17.2692" y1="20.5582" y2="51.9194" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
    <g>
      <line x1="32.406" x2="32.406" y1="26.382" y2="28.882" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      <line x1="32.406" x2="32.406" y1="34.0952" y2="52.3414" fill="none" stroke="#000" stroke-dasharray="5.2132 5.2132" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      <line x1="32.406" x2="32.406" y1="54.9479" y2="57.4479" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    </g>
    <line x1="47.547" x2="47.547" y1="23.0135" y2="20.8439" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M44.6572,24.0988s7.2386-2.6577,10.0361-5.1556V48.2177s-5.212,5.6515-11.5388,7.8246"/>
    <ellipse cx="32.0767" cy="20.8439" rx="3.5538" ry="1.6226" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default RollOfPaper;
    