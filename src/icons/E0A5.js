
import React from 'react';

const WarningStrip = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#fcea2b" d="M11.6022,27.0359a2.7339,2.7339,0,0,1,2.5041-1.9354h50.72a1.4722,1.4722,0,0,1,1.4959,1.9354L60.6105,48.9641A2.7341,2.7341,0,0,1,58.1063,50.9H7.3863a1.4721,1.4721,0,0,1-1.4958-1.9354Z"/>
    <path fill="#f1b31c" d="M60.4443,49.6138,63.939,36.1853A193.6507,193.6507,0,0,1,38.9863,45.14a218.0268,218.0268,0,0,1-28.8,5.76H58.7441A1.7112,1.7112,0,0,0,60.4443,49.6138Z"/>
    <polygon points="34.006 25.1 43.606 25.1 36.886 50.9 27.286 50.9 34.006 25.1"/>
    <polygon points="49.667 25.1 59.267 25.1 52.547 50.9 42.947 50.9 49.667 25.1"/>
    <polygon points="18.346 25.1 27.946 25.1 21.226 50.9 11.626 50.9 18.346 25.1"/>
    <path fill="none" d="M11.6022,27.0359a2.7339,2.7339,0,0,1,2.5041-1.9354h50.72a1.4722,1.4722,0,0,1,1.4959,1.9354L60.6105,48.9641A2.7341,2.7341,0,0,1,58.1063,50.9H7.3863a1.4721,1.4721,0,0,1-1.4958-1.9354Z"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9891,27.0475a2.6542,2.6542,0,0,1,2.4573-1.947h51.38a1.4939,1.4939,0,0,1,1.5192,1.9413L60.9171,48.9582A2.6938,2.6938,0,0,1,58.4363,50.9H7.3863a1.5161,1.5161,0,0,1-1.5426-1.947Z"/>
    <line x1="38.6705" x2="31.9505" y1="25.1005" y2="50.8995" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="54.0007" x2="47.2807" y1="25.1005" y2="50.8995" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="23.0104" x2="16.2904" y1="25.1005" y2="50.8995" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default WarningStrip;
    