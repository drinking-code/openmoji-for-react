
import React from 'react';

const Forceps = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color"/>
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M27.6,53.3225a2.8357,2.8357,0,0,0,2.1616-1.7863S43.4562,26.33,45.1433,20.0778"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M25.21,51.9654a3.0487,3.0487,0,0,1,.5465-2.7868S40.5987,24.63,45.1433,20.0172"/>
    <path transform="translate(16.9861 -19.0082) rotate(30)" d="M43.0153,18.66H44.91a.6.6,0,0,1,.6.6v6.4648a0,0,0,0,1,0,0H42.4153a0,0,0,0,1,0,0V19.26A.6.6,0,0,1,43.0153,18.66Z"/>
  </g>
</svg>

    );
};

export default Forceps;
    