
import React from 'react';

const QuestionMark = (size) => {
    if (!size) size = '1.2em';
    return (
        <svg width={size} height={size} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <g id="color">
    <path fill="#d22f27" stroke-miterlimit="10" d="m48.72 20.15c0.3051 9.298-8.021 12.75-10.82 19.21v7.565c0 1.39-1.11 2.5-2.5 2.5-1.38 0-2.5-1.11-2.5-2.5v-9.865c3.493-6.142 10.38-7.469 10.67-17.06 0-5.66-6.543-6.151-7.988-6.175h-0.05c-5.767 1.187-6.135 4.99-7.289 9.549-0.6671 1.521-1.564 2.045-2.9 2.03-1.36-0.2401-2.26-1.54-2.02-2.9 0.5877-2.752 0.758-6.639 2.35-8.502 2.71-3.14 4.819-4.957 9.179-5.167 0.24 0 0.49-0.01 0.73-0.01 0.09 0 0.18 0 0.27 0.01 8.27 0.2401 12.6 2.992 12.87 11.32z"/>
    <circle cx="34.95" cy="58.84" r="3" fill="#d22f27" stroke-miterlimit="10"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <circle cx="35.3" cy="58.84" r="2.625" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.75"/>
    <path d="m35.67 10.07c6.57 0 12.03 3.431 12.03 10.21 0 3.671-0.48 6.526-3.71 9.755-3.956 3.956-7.184 6.346-7.208 8.549-0.0651 5.826-5e-3 8.278-0.0044 8.36a1.476 1.476 0 0 1-1.464 1.487h-0.0115a1.476 1.476 0 0 1-1.476-1.464c-5e-4 -0.0819-0.0607-2.561 0.0044-8.416 0.0358-3.231 3.63-6.127 8.385-10.88 2.178-2.174 2.474-4.716 2.474-7.127 0-3.282-2.965-7.587-8.984-7.587-5.338 0-8.499 3.467-8.499 9.552a1.434 1.434 0 0 1-1.395 1.587 1.552 1.552 0 0 1-1.505-1.759c0-9.882 7.291-12.27 11.36-12.27m0-2c-4.964 0-13.36 3.005-13.36 14.27a3.519 3.519 0 0 0 3.505 3.759 3.418 3.418 0 0 0 3.395-3.587c0-3.445 1.128-7.552 6.499-7.552 4.817 0 6.984 3.267 6.984 5.587 0 2.364-0.3155 4.144-1.886 5.712-0.7515 0.75-1.474 1.454-2.157 2.12-3.933 3.833-6.775 6.602-6.815 10.15-0.055 4.946-0.0218 7.539-5e-3 8.424a3.476 3.476 0 1 0 6.952-0.0248l-0.0012-0.075c-0.0164-0.8595-0.0488-3.384 0.0056-8.248 0.0092-0.8384 2.102-2.822 3.948-4.572 0.8091-0.767 1.726-1.636 2.675-2.585 3.577-3.577 4.296-6.926 4.296-11.17 0-7.301-5.638-12.21-14.03-12.21z"/>
  </g>
</svg>

    );
};

export default QuestionMark;
    