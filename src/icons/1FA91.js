
import React from 'react';

const Chair = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#a57939" d="M17.5,8.5c4,11,10,31,5,49l-2,8h2s7-16,7-21h19l3,21h2v-21s1.2367-2.0532,0-7c-1-4-1.75-4.03-3-4-5.2545.125-21,1-21,1s-2.4645-22.4645-6-26C20.5,5.5,17.5,8.5,17.5,8.5Z"/>
    <path fill="#fcea2b" d="M24.587,44H54s.5339-1.07-1-7.2056c-1-4-.1437-3.53-8.5718-3.265S29.5,34.5,29.5,34.5s-1.8546-15.2833-4.5637-23.0281C24.3662,9.8423,21.8424,5.4021,18,8a2.4561,2.4561,0,0,0,0,1C23.8665,25.8218,24.587,44,24.587,44Z"/>
    <path fill="#f1b31c" d="M44.587,44H54c.231-3.732-.22-7.161-2-10l-7.5718-.4708S49,42,44.587,44Z"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.7592,8.2729a.4635.4635,0,0,0-.1517.5236C21.6062,19.8566,27.4554,39.6606,22.5,57.5l-1.7193,6.8773A.9035.9035,0,0,0,21.6572,65.5h1.1593a1.0322,1.0322,0,0,0,.9533-.6248c1.2445-2.9041,5.3848-15.1432,5.7137-19.9245a.4736.4736,0,0,1,.47-.4507H48.09a.4722.4722,0,0,1,.4675.4055L50.3743,64.62a1.0252,1.0252,0,0,0,1.0149.88h1.1757a.9352.9352,0,0,0,.9351-.9351V44.615a.4933.4933,0,0,1,.0506-.2126c.22-.46,1.0317-2.573-.0506-6.9024-1-4-1.75-4.03-3-4-4.7344.1127-17.986.8342-20.5627.9759a.4654.4654,0,0,1-.4876-.4177C29.083,30.8967,26.7417,11.7417,23.5,8.5A4.0406,4.0406,0,0,0,17.7592,8.2729Z"/>
    <line x1="30" x2="24.5" y1="44.5" y2="44.5" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="54" x2="47" y1="44.5" y2="44.5" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
  </g>
</svg>

    );
};

export default Chair;
    