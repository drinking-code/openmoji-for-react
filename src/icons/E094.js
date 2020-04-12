
import React from 'react';

const Signpost = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="31.0713" y="10.4815" width="7.9472" height="55.1819" fill="#6a462f"/>
    <polygon fill="#a57939" points="31.071 18.66 31.071 10.481 39.018 10.481 39.018 16.558 31.071 18.66"/>
    <polygon fill="#a57939" points="42.605 14.992 58.181 14.992 62.873 21.172 58.181 27.421 42.605 27.421 42.605 14.992"/>
    <polygon fill="#6a462f" points="27.425 27.091 11.848 27.091 7.157 33.271 11.848 39.521 27.425 39.521 27.425 27.091"/>
    <polygon fill="#6a462f" points="42.605 23.216 60.975 18.672 62.873 21.172 58.181 27.421 42.605 27.421 42.605 23.216"/>
    <polygon fill="#a57939" points="7.157 33.271 27.425 27.091 11.848 27.091 7.157 33.271"/>
  </g>
  <g id="line">
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="18.23 27.091 11.848 27.091 7.157 33.271 11.848 39.521 27.425 39.521 27.425 33.982"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="46.711 14.992 58.181 14.992 62.873 21.172 58.181 27.421 42.605 27.421 42.605 23.216"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="31.071 65.663 31.071 10.481 39.018 10.481 39.018 65.663"/>
  </g>
</svg>

    );
};

export default Signpost;
    