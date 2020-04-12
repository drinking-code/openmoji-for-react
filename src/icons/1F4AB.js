
import React from 'react';

const Dizzy = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#fcea2b" stroke="none" d="M14.8274,18.535c-0.3361-0.2255,80.195-10.75,29.9619,39.4441L32.69,48.4801 C32.69,48.4801,80.4392,29.907,14.8274,18.535z"/>
    <path fill="#f1b31c" stroke="none" d="M31.2981,48.3615l3.791,3.1118c11.0639-4.9912,39.6016-20.5748-0.4471-33.8447 C24.0006,17.1618,14,18.535,14,18.535C78.0026,29.5837,31.2981,48.3615,31.2981,48.3615z"/>
    <polygon fill="#fcea2b" stroke="none" points="35,30.4033 39.9443,40.4214 51,42.0279 43,49.826 44.8885,60.8371 35,55.6384 25.1115,60.8371 27,49.826 19,42.0279 30.0557,40.4214"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M48.6648,34.784c0.7196-5.4552-6.5085-11.5508-33.8374-16.2489c0,0,72.9938-9.9979,34.8066,33.0676"/>
    <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="35,30.4033 39.9443,40.4214 51,42.0279 44,49.826 45.8885,60.8371 35,55.6384 25.1115,60.8371 27,49.826 19,42.0279 30.0557,40.4214"/>
  </g>
</svg>

    );
};

export default Dizzy;
    