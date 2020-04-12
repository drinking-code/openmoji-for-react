
import React from 'react';

const Sparkle = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="line-supplement">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M35.1062,18.8152s-.7537,16.3242-16.1286,16.37a.6482.6482,0,1,0,0,1.2963h.0046s16.3242,1.0989,16.37,16.4738l-.0005.1462a.6482.6482,0,0,0,1.2963,0c.0457-15.375,16.37-16.62,16.37-16.62h.0046a.6482.6482,0,1,0,0-1.2963c-15.3749-.0457-16.62-16.37-16.62-16.37a.6482.6482,0,0,0-1.2963,0Z"/>
  </g>
  <g id="color">
    <path fill="#5c9e31" d="M60,61H12a.9448.9448,0,0,1-1-1V12a.9448.9448,0,0,1,1-1H60a.9448.9448,0,0,1,1,1V60A.9448.9448,0,0,1,60,61Z"/>
    <path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M35.1062,18.8569s-.7537,16.3242-16.1286,16.37a.6482.6482,0,1,0,0,1.2963h.0046s16.3242,1.0989,16.37,16.4738l-.0005.1462a.6482.6482,0,0,0,1.2963,0c.0457-15.375,16.37-16.62,16.37-16.62h.0046a.6482.6482,0,1,0,0-1.2963c-15.3749-.0457-16.62-16.37-16.62-16.37a.6482.6482,0,0,0-1.2963,0Z"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M60,60.9583H12a.9448.9448,0,0,1-1-1v-48a.9448.9448,0,0,1,1-1H60a.9448.9448,0,0,1,1,1v48A.9448.9448,0,0,1,60,60.9583Z"/>
  </g>
</svg>

    );
};

export default Sparkle;
    