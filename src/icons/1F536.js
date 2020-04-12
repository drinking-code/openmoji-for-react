
import React from 'react';

const LargeOrangeDiamond = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <rect id="Diamond_Color_1" x="18.3411" y="18.2994" width="35.3178" height="35.3178" transform="translate(35.9705 -14.9239) rotate(45)" fill="#f4aa41"/>
  </g>
  <g id="line">
    <rect id="Diamond_Line_1" x="18.3411" y="18.2994" width="35.3178" height="35.3178" transform="translate(35.9705 -14.9239) rotate(45)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

    );
};

export default LargeOrangeDiamond;
    