
import React from 'react';

const Banjo = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#a57939" d="M59.65,9.6142c-.0625.0039-4.9,4.8677-5.9621,5.5117-1.541,1.0313-2.5045,3.7789-2.6432,3.9146L29.1194,39.7588a15.9732,15.9732,0,0,1,1.9548,2.1867l22.8869-21.65a7.5276,7.5276,0,0,0,3.3142-1.9664c.3054-.3617,4.6013-4.24,4.97-4.97C63.0017,11.8616,60.1521,9.5815,59.65,9.6142Z"/>
    <path fill="#ea5a47" d="M34.708,38.4357a.8932.8932,0,0,0-.2148.2158.9811.9811,0,0,1,.2163-.2139Z"/>
    <path fill="#ea5a47" d="M30.4344,41.4778c-.0324-.0472-.0661-.0932-.1-.14C30.3683,41.3846,30.402,41.4307,30.4344,41.4778Z"/>
    <circle cx="21.3487" cy="49.3419" r="12" fill="#d0cfce"/>
  </g>
  <g id="line">
    <line x1="15.2475" x2="20.3487" y1="50.252" y2="55.1946" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M54.6873,19.6056a5.0443,5.0443,0,0,0,2.2362-.58c.6314-.3969,3.5323-3.3609,5.1821-5.068a1.6979,1.6979,0,0,0-.0232-2.3817l-1.529-1.5289a1.6943,1.6943,0,0,0-2.379-.0257c-1.8269,1.7649-5.1332,4.9724-5.4614,5.3846a3.3166,3.3166,0,0,0-.4651,1.4471,1.7237,1.7237,0,0,1-.4994,1.0055L29.5532,39.4956"/>
    <circle cx="21.3487" cy="49.3419" r="12" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Banjo;
    