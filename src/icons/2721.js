
import React from 'react';

const StarOfDavid = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect x="12" y="12.08" width="48" height="47.83" fill="#b399c8"/>
  </g>
  <g id="line">
    <rect x="12" y="12" width="48" height="48" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.696" d="m36 18.67 14.97 25.96-14.97-1.113e-6h-14.97l7.486-12.98 7.482-12.98" paint-order="stroke fill markers"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.696" d="m21.01 27.39 29.97 0.01892-14.97 25.93-7.5-12.97-7.502-12.97" paint-order="stroke fill markers"/>
  </g>
</svg>

    );
};

export default StarOfDavid;
    