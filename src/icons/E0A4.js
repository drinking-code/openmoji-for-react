
import React from 'react';

const NoStencil = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#ea5a47" d="M60.1208,60.08h-46a1.0021,1.0021,0,0,1-1-1v-46a1.0021,1.0021,0,0,1,1-1h46a1.0021,1.0021,0,0,1,1,1v46A.9448.9448,0,0,1,60.1208,60.08Z"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="M60.1208,60.08h-46a1.0021,1.0021,0,0,1-1-1v-46a1.0021,1.0021,0,0,1,1-1h46a1.0021,1.0021,0,0,1,1,1v46A.9448.9448,0,0,1,60.1208,60.08Z"/>
    <g>
      <path d="M34.8139,30.073a1,1,0,0,0-1,1v6.6943l-2.11-2.6943v3.2429l2.323,2.9661a1,1,0,0,0,1.7871-.6162V31.073A.9994.9994,0,0,0,34.8139,30.073Z"/>
      <path d="M30.4112,33.4227l-2.3229-2.9659a1,1,0,0,0-1.7871.6162v9.5928a1,1,0,0,0,2,0V33.9714l2.11,2.6941Z"/>
    </g>
    <g>
      <path d="M42.8007,39.5713a2.3891,2.3891,0,0,1-1.78-2.3323v-2.74a2.3879,2.3879,0,0,1,1.78-2.3314V30.1362a4.3593,4.3593,0,0,0-3.78,4.3626v2.74a4.36,4.36,0,0,0,3.78,4.3636Z"/>
      <path d="M44.0932,30.1363v2.0313a2.3878,2.3878,0,0,1,1.7793,2.3312v2.74a2.4947,2.4947,0,0,1-1.7793,2.32v2.04a4.4833,4.4833,0,0,0,3.7793-4.3593v-2.74A4.3591,4.3591,0,0,0,44.0932,30.1363Z"/>
    </g>
  </g>
</svg>

    );
};

export default NoStencil;
    