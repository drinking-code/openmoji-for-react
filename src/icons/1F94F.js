
import React from 'react';

const FlyingDisc = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <ellipse cx="35.9999" cy="30.5" rx="11.5334" ry="27.8816" transform="translate(-4.9734 53.8973) rotate(-70)" fill="#92d3f5"/>
    <path fill="#61b2e4" d="M62.2,40.0361c-2.1785,5.9856-15.6748,6.5684-30.1447,1.3018s-17.22-8.3093-14.0934-12.5391c.9582-1.2961,5.2447,4.3094,21.9827,10.0928C54.4989,43.9205,64.3786,34.0505,62.2,40.0361Z"/>
  </g>
  <g id="line">
    <ellipse cx="35.9999" cy="30.5" rx="6.7991" ry="21.9789" transform="translate(-5.0564 53.7513) rotate(-69.7961)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <ellipse cx="35.9999" cy="30.5" rx="11.5334" ry="27.8816" transform="translate(-4.9734 53.8973) rotate(-70)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M39.8023,52.363c2.8865,1.5925,21.926,6.78,23.98,1.8"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M37.778,48.8451c2.3577,1.41,18.0633,6.2843,19.919,2.1969"/>
  </g>
</svg>

    );
};

export default FlyingDisc;
    