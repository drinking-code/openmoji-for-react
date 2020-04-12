
import React from 'react';

const HalfOrangeFruit = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#f1b31c" d="M49.3615,30.2721a7.1029,7.1029,0,0,0-7.8182-7.8181,7.0962,7.0962,0,0,0-11.043,0,7.1029,7.1029,0,0,0-7.8182,7.8181,7.071,7.071,0,0,0,0,11.0185A7.1026,7.1026,0,0,0,30.5,49.1087a7.0962,7.0962,0,0,0,11.043,0,7.1026,7.1026,0,0,0,7.8182-7.8181,7.071,7.071,0,0,0,0-11.0185Z"/>
    <circle cx="35.6816" cy="36" r="2" fill="#ffa7c0"/>
    <circle cx="36" cy="36" r="26" fill="#e27022"/>
    <circle cx="36" cy="36" r="19.631" fill="#f1b31c"/>
  </g>
  <g id="line">
    <circle cx="36" cy="36" r="26" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2.3636"/>
    <circle cx="36" cy="36" r="19.631" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="1.7846"/>
    <line x1="42.8883" x2="29.1117" y1="17.6172" y2="54.3828" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2.1812"/>
    <line x1="17.6172" x2="54.3828" y1="29.1117" y2="42.8883" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2.1812"/>
    <line x1="18.1306" x2="53.8694" y1="44.1279" y2="27.8721" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2.1812"/>
    <line x1="44.1279" x2="27.8721" y1="53.8694" y2="18.1306" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2.1812"/>
    <circle cx="35.6816" cy="36" r="4.3625" fill="#000000"/>
  </g>
</svg>

    );
};

export default HalfOrangeFruit;
    