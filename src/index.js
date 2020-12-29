import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider, createMuiTheme} from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#bef67a',
      main: '#8bc34a',
      dark: '#5a9216',
      contrastText: '#222222',
    },
    secondary: {
      light: '#747474',
      main: '#494949',
      dark: '#222222',
      contrastText: 'white',
    },
  },
  typography: {
    fontFamily: [
      'Arvo'
    ].join(','),
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
