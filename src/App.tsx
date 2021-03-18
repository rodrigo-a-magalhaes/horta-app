import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import Routes from './Routes';
import GlobalStyles from './theme/GlobalStyles';
import Theme from './theme/Theme';

function App() {
  return (
    <ThemeProvider theme={Theme} >
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
