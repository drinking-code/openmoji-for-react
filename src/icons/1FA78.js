
import React from 'react';

const DropOfBlood = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#ea5a47" d="M56,46.7065C56,58.4814,47.0458,68.003,36,68.003s-20-9.5455-20-21.32c0,0-.2191-14.3086,16.6559-40.1878,0,0,3.1666-5.37,6.3541-.3523C55.8851,32.0216,56,46.7065,56,46.7065"/>
    <path fill="#d22f27" d="M36,3.9991C48.875,14.375,55.875,44.8744,55.875,44.8744c0,15.0006-8.8293,23.1265-19.875,23.1265,0,0,22-18.1265,0-64.0018"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M56,46.7065C56,58.4814,47.0458,68.003,36,68.003s-20-9.5455-20-21.32c0,0-.2191-14.3086,16.6559-40.1878,0,0,3.1666-5.37,6.3541-.3523C55.8851,32.0216,56,46.7065,56,46.7065"/>
  </g>
</svg>

    );
};

export default DropOfBlood;
    