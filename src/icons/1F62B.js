
import React from 'react';

const TiredFace = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#FCEA2B" d="M36,13.2002c-12.5719,0-22.7998,10.2279-22.7998,22.7998c0,12.5718,10.2279,22.7998,22.7998,22.7998 c12.5718,0,22.7998-10.228,22.7998-22.7998C58.7998,23.4281,48.5718,13.2002,36,13.2002z"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <circle cx="36" cy="36" r="23" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
    <path d="m31.78 31"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="m21.88 23.92c5.102-0.06134 7.273-1.882 8.383-3.346"/>
    <path stroke="#000" stroke-miterlimit="10" stroke-width="2" d="m46.24 47.56c0-2.592-2.867-7.121-10.25-6.93-6.974 0.1812-10.22 4.518-10.22 7.111s4.271-1.611 10.05-1.492c6.317 0.13 10.43 3.903 10.43 1.311z"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="m23.16 28.47c5.215 1.438 5.603 0.9096 8.204 1.207 1.068 0.1221-2.03 2.67-7.282 4.397"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="m50.12 23.92c-5.102-0.06134-7.273-1.882-8.383-3.346"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="m48.84 28.47c-5.215 1.438-5.603 0.9096-8.204 1.207-1.068 0.1221 2.03 2.67 7.282 4.397"/>
  </g>
</svg>

    );
};

export default TiredFace;
    