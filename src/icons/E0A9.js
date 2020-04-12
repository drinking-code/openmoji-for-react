
import React from 'react';

const LocationIndicatorRed = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#d22f27" d="M52.5733,29.11c0-9.3149-7.1338-16.8923-15.9034-16.8923S20.7665,19.795,20.7665,29.114c.0027.4653.2238,11.6088,12.9612,31.2452a3.4626,3.4626,0,0,0,2.8174,1.9343c1.8394,0,3.0941-2.0266,3.2162-2.2327C52.58,40.4135,52.58,29.5534,52.5733,29.11ZM36.67,35.9135a7.0826,7.0826,0,1,1,7.0826-7.0826A7.0907,7.0907,0,0,1,36.67,35.9135Z"/>
    <path fill="#ea5a47" d="M52.5733,29.11c0-9.3149-7.1338-16.8923-15.9034-16.8923a14.96,14.96,0,0,0-3.8645.5254c8.3948.4493,15.0989,7.8225,15.0989,16.849.0068.4436.0068,11.3036-12.812,30.9509a5.8543,5.8543,0,0,1-.5865.7972,2.8549,2.8549,0,0,0,2.0393.9534c1.8394,0,3.0941-2.0266,3.2162-2.2327C52.58,40.4135,52.58,29.5534,52.5733,29.11Z"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M36.5451,62.2935a3.4628,3.4628,0,0,1-2.8174-1.9343C20.99,40.7228,20.7692,29.5793,20.7665,29.114c0-9.3191,7.1337-16.8964,15.9034-16.8964S52.5733,19.7949,52.5733,29.11c.0068.4436.0068,11.3036-12.812,30.9509C39.6392,60.2669,38.3845,62.2935,36.5451,62.2935Z"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M36.67,35.9135a7.0826,7.0826,0,1,1,7.0827-7.0826A7.0906,7.0906,0,0,1,36.67,35.9135Z"/>
  </g>
</svg>

    );
};

export default LocationIndicatorRed;
    