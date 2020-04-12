
import React from 'react';

const FlatShoe = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path id="Flat_Shoe_Color_1" fill="#ffa7c0" stroke="#ffa7c0" stroke-miterlimit="10" stroke-width="2" d="M27.2945,41.6824c.0425,1.86,5.8332,2.5639,8.711,2.4895,28.0063-.7235,30.06-2.3123,29.3884-8.65-.3686-3.4781-9.1188-6.3021-17.1146-5.4966-.73.0736-1.352,1.8762-2.082,2.0023-10.7675,1.8608-27.8342,2.56-35.93-6.0744C8.9452,25.7546,5.38,35.1224,6.7246,41.3042Z"/>
    <rect id="Flat_Shoe_Color_2" x="6.4266" y="40.7702" width="13.9118" height="3.4175" fill="#3f3f3f"/>
  </g>
  <g id="line">
    <path id="Flat_Shoe_Line_1" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.4266,40.77c-1.6929-8.08,2.5186-15.0156,3.84-14.8167,8.0961,8.6347,25.0328,7.9741,35.8,6.1134.8436-.1458,1.5456-2.1011,2.3879-2.1769,7.8729-.7088,15.0151,1.6183,16.6208,4.7477,3.0354,5.916-.5294,10.9388-36.6264,9.27a38.6434,38.6434,0,0,1-3.7006-1.4289"/>
    <rect id="Flat_Shoe_Line_2" x="6.4266" y="40.7702" width="13.9118" height="3.4175" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default FlatShoe;
    