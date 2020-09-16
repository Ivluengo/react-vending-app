import React from 'react';
import ReactDOM from 'react-dom';
import VendingApp from './VendingApp';

import {GlobalStyle} from './components/GlobalStyle/GlobalStyle';

ReactDOM.render(
    <>
      <GlobalStyle />
      <VendingApp />
    </>,
  document.getElementById('root')
);