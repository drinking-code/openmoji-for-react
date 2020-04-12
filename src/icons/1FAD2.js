
import React from 'react';

const Olive = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <ellipse cx="35.9765" cy="36.145" rx="23.0446" ry="16.612" transform="translate(-15.0211 36.0258) rotate(-45)" fill="#b1cc33"/>
    <path fill="#5c9e31" d="M56.13,29.3742a28.57,28.57,0,0,1-7.4245,12.3719c-8.9995,9-21.6825,10.9075-28.3283,4.2617a13.7083,13.7083,0,0,1-3.8294-8.1371S12.6819,57.8985,30.999,56c0,0,18.0091-.288,24.7458-22.73Z"/>
    <path fill="#a57939" d="M47.9736,31.77a8.3972,8.3972,0,0,1-5.6728-2.6855c-2.8477-2.8477-3.5332-6.6221-1.5606-8.5948a4.3884,4.3884,0,0,1,4.1865-.9775,9.1721,9.1721,0,0,1,4.4092,2.5371h0c2.8477,2.8477,3.5332,6.6231,1.5606,8.5957A4.03,4.03,0,0,1,47.9736,31.77Z"/>
  </g>
  <g id="line">
    <ellipse cx="35.9765" cy="36.145" rx="23.0446" ry="16.612" transform="translate(-15.0211 36.0258) rotate(-45)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M50.2559,29.9382c-1.5521,1.5521-4.7673.8535-7.1813-1.56s-3.1127-5.6292-1.56-7.1814,4.7673-.8535,7.1813,1.56a8.2239,8.2239,0,0,1,2.2534,3.85"/>
  </g>
</svg>

    );
};

export default Olive;
    