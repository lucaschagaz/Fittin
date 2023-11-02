import React from 'react';
import {Routes} from './Routes/routes';
import {ThemeProvider} from 'styled-components';

import {Theme} from './Styles/Theme/ligth';

export const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Routes />
    </ThemeProvider>
  );
};
