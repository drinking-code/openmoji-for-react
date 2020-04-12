
import React from 'react';

const Basket = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <polygon fill="#a57939" points="36 35.129 17.213 35.084 22.09 58.34 36 58.34 49.91 58.34 54.787 35.084 36 35.129"/>
    <polygon fill="#a57939" points="15.092 27.478 15.092 35.15 56.608 35.15 57.357 27.478 15.092 27.478"/>
    <path fill="#a57939" d="M31.6746,32.2975,22.4853,17.56c-1.1159-1.79-.83-3.9827.638-4.8982h0c1.4682-.9156,3.5631-.207,4.6791,1.5827L38.9357,32.2975Z"/>
  </g>
  <g id="line">
    <polygon fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="36 35.129 17.213 35.084 22.09 58.34 36 58.34 49.91 58.34 54.787 35.084 36 35.129"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M31.6746,32.2975,22.4853,17.56c-1.1159-1.79-.83-3.9827.638-4.8982h0c1.4682-.9156,3.5631-.207,4.6791,1.5827L38.9357,32.2975Z"/>
    <g>
      <line x1="39.1761" x2="47.8885" y1="37.7919" y2="47.3696" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      <line x1="28.9154" x2="44.7347" y1="37.6497" y2="55.2642" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      <line x1="23.845" x2="36.383" y1="41.5015" y2="55.6997" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      <line x1="25.2828" x2="26.6673" y1="54.0989" y2="55.4775" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      <line x1="24.5639" x2="32.5746" y1="46.4652" y2="37.7919" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      <line x1="26.8759" x2="43.3942" y1="55.3523" y2="37.7919" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      <line x1="36.383" x2="48.4451" y1="55.6997" y2="43.2164" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      <line x1="44.7347" x2="46.8963" y1="55.2642" y2="53.4424" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    </g>
    <circle cx="33.8738" cy="29.8369" r="0.8858"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="36.383 27.427 57.357 27.427 57.357 35.092 14.643 35.092 14.643 27.427 27.849 27.427"/>
  </g>
</svg>

    );
};

export default Basket;
    