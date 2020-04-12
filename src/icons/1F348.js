
import React from 'react';

const Melon = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#b1cc33" d="m52.6 12.6a28.14 28.14 0 0 1-39.8 39.8z"/>
    <path fill="#f4aa41" d="m49.62 15.76c8.22 8.247 8.118 25.21-0.115 33.45-8.233 8.233-24.75 8.335-32.99 0.115z"/>
    <path fill="#e27022" d="m41.67 23.53a12.9 12.9 0 0 1-17.94 17.94z"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2.251" d="m52.01 12.6c0.1676 0.1676 0.3326 0.3368 0.4951 0.5076 10.49 11.02 10.32 28.47-0.4976 39.29-10.99 10.99-28.81 10.99-39.8 0.002471z"/>
    <path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2.251" d="m49.11 15.44c8.167 8.299 9.065 22.67-0.05274 32.99-8.942 10.13-25.08 8.628-33.27 0.3566z"/>
    <path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2.345" d="m41.09 23.53a12.9 12.9 0 0 1-17.94 17.94z"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.251" d="m31.79 51.06c3.369 0.5372 9.099-0.9131 13.52-5.585 3.186-3.371 5.996-9.423 5.673-13.39"/>
    <circle cx="50.54" cy="28.03" r="1.173"/>
  </g>
</svg>

    );
};

export default Melon;
    