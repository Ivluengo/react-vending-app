import React from 'react';
import ReactDOM from 'react-dom';
import VendingApp from './VendingApp';

import {GlobalStyle} from './styled/GlobalStyle';

ReactDOM.render(
    <>
      <GlobalStyle />
      <VendingApp />
    </>,
  document.getElementById('root')
);