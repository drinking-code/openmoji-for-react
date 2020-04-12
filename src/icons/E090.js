
import React from 'react';

const FirstAid = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <polygon fill="#ea5a47" points="27.67 43.857 13.72 43.857 13.72 28.467 27.714 28.502 27.732 14.384 43.461 14.384 43.461 28.334 57.278 28.252 57.278 43.857 43.461 43.857 43.461 57.941 27.635 57.941 27.67 43.857"/>
  </g>
  <g id="line">
    <polygon fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="27.67 43.857 13.72 43.857 13.72 28.467 27.714 28.502 27.732 14.384 43.461 14.384 43.461 28.334 57.278 28.252 57.278 43.857 43.461 43.857 43.461 57.941 27.635 57.941 27.67 43.857"/>
  </g>
</svg>

    );
};

export default FirstAid;
    