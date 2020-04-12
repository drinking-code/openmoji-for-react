
import React from 'react';

const Coffin = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#A57939" stroke="#A57939" stroke-miterlimit="10" stroke-width="2" d="M31.6322,67.6h9.0635 c1.3055,0,2.4611-0.8442,2.858-2.0879L55.9064,26.807c0.271-0.8492,0.1504-1.7749-0.3292-2.5262L43.772,5.7859 C43.2209,4.9225,42.2675,4.4,41.2432,4.4H31.0847c-1.0242,0-1.9777,0.5225-2.5288,1.3859L16.7507,24.2807 c-0.4796,0.7514-0.6002,1.6771-0.3292,2.5262l12.3527,38.7051C29.1711,66.7558,30.3267,67.6,31.6322,67.6z"/>
    <line x1="36.3342" x2="36.3342" y1="22" y2="38" fill="#f4aa41" stroke="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="31.5342" x2="41.1342" y1="26.6333" y2="26.6333" fill="#f4aa41" stroke="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
    <polygon fill="#6A462F" stroke="#6A462F" stroke-linejoin="round" stroke-miterlimit="10" points="39.25,4.4 47.5,26.5 39.25,67.6 41.5,67.5 56,25.382 41.5,4.5"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <line x1="36.3342" x2="36.3342" y1="22" y2="38" fill="none" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="31.5342" x2="41.1342" y1="26.6333" y2="26.6333" fill="none" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2" d="M31.6322,67.6h9.0635 c1.3055,0,2.4611-0.8442,2.858-2.0879L55.9064,26.807c0.271-0.8492,0.1504-1.7749-0.3292-2.5262L43.772,5.7859 C43.2209,4.9225,42.2675,4.4,41.2432,4.4H31.0847c-1.0242,0-1.9777,0.5225-2.5288,1.3859L16.7507,24.2807 c-0.4796,0.7514-0.6002,1.6771-0.3292,2.5262l12.3527,38.7051C29.1711,66.7558,30.3267,67.6,31.6322,67.6z"/>
  </g>
</svg>

    );
};

export default Coffin;
    