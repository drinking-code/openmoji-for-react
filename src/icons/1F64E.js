
import React from 'react';

const PersonPouting = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#92d3f5" d="M17,60.9583v-4c0-4.9941,5.0078-9,10-9q9,7.5,18,0c4.9941,0,10,4.0059,10,9v4"/>
  </g>
  <g id="skin">
    <path fill="#fcea2b" d="M24.9365,30.9583c0,9,4.9365,14,11,14,5.9365,0,11.0635-5,11.0635-14a12.1371,12.1371,0,0,0-1-5.0005c-3-2.9995-7-8-7-8-4,3-7,6-13,7.0005C26,24.9583,24.9365,25.9578,24.9365,30.9583Z"/>
  </g>
  <g id="hair">
    <path fill="#f1b31c" d="M46.716,28.74c.03-1.626-7.6646-10.9092-7.716-10.7825-.761,1.8751-10.2252,6.7049-13.1392,7.8271-3.049,1.1741.1017,13.1734.1017,13.1734-4,0-4-6-4-13s4-14,14-14,14,7,14,14,0,13-4,13C46.3729,38.8607,46.6762,30.9167,46.716,28.74Z"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M26,38.9583c-4,0-4-6-4-13s4-14,14-14,14,7,14,14,0,13-4,13"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17,59.9583v-3c0-4.9941,5.0078-9,10-9q9,7.5,18,0c4.9941,0,10,4.0059,10,9v3"/>
    <path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2" d="M24.9365,30.9583c0,9,4.9365,14,11,14,5.9365,0,11.0635-5,11.0635-14a12.1371,12.1371,0,0,0-1-5.0005c-3-2.9995-7-8-7-8-4,3-7,6-13,7.0005C26,24.9583,24.9365,25.9578,24.9365,30.9583Z"/>
    <path d="M41.873,29.9583a2,2,0,0,1-4,0c0-1.1045,2.0225-2,3.127-2a3.2627,3.2627,0,0,1,.873,2"/>
    <path d="M34,29.9583a2,2,0,0,1-4,0,3.1184,3.1184,0,0,1,1-2c1.1045,0,3,.8955,3,2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M39,37.9583c-1-2-5-2-6,0"/>
  </g>
</svg>

    );
};

export default PersonPouting;
    