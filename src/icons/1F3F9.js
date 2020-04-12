
import React from 'react';

const BowAndArrow = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <g id="_1F3F9">
      <path fill="none" stroke="#a57939" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.8" d="M51.88,55.5863A27.0167,27.0167,0,0,0,16.3837,20.09"/>
      <path fill="#d22f27" d="M31.1285,40.8418l-7.098,7.098v6.8521a.6024.6024,0,0,0,1.0283.4259l5.8933-5.8933a.6027.6027,0,0,0,.1764-.4259Z"/>
      <path fill="#ea5a47" d="M31.1285,40.8418l-7.098,7.098H17.1784a.6024.6024,0,0,1-.4259-1.0283l5.8933-5.8933a.6027.6027,0,0,1,.4259-.1764Z"/>
    </g>
  </g>
  <g id="line">
    <g>
      <line x1="19.2278" x2="50.4542" y1="21.5167" y2="52.7424" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      <path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="M50.2183,57.2486a2.3515,2.3515,0,0,1-.4964-2.5908,24.6677,24.6677,0,0,0-32.41-32.41,2.3493,2.3493,0,0,1-1.8567-4.3162A29.3663,29.3663,0,0,1,54.0381,56.5145a2.3526,2.3526,0,0,1-3.82.7341Z"/>
      <line x1="57.966" x2="22.1582" y1="14.0638" y2="49.8716" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="52.596 14.064 57.966 14.064 57.966 19.153"/>
    </g>
  </g>
</svg>

    );
};

export default BowAndArrow;
    