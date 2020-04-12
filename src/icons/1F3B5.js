
import React from 'react';

const MusicalNote = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <polygon fill="#3F3F3F" stroke="none" points="26.324,22.8117 51.6188,17.5516 51.5493,12.875 26.105,18.5407"/>
    <circle cx="20.7561" cy="51.59" r="5.7867" fill="#3F3F3F" stroke="none"/>
    <circle cx="46.2061" cy="46.0127" r="5.787" fill="#3F3F3F" stroke="none"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="51.6188,17.5516 26.1735,23.2225 26.105,18.5407 51.5493,12.875"/>
    <circle cx="20.7563" cy="51.5901" r="5.7868" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="26.105" x2="26.5431" y1="18.5407" y2="51.5901" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="46.2063" cy="46.0129" r="5.7868" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="51.555" x2="51.9931" y1="12.9635" y2="46.0129" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
</svg>

    );
};

export default MusicalNote;
    