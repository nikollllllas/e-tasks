<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import App from './App.jsx'
import theme from './styles/theme'
import GlobalStyles from './styles/global'
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './App.jsx';
import theme from './styles/theme';
import GlobalStyles from './styles/global';
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
<<<<<<< HEAD
  </React.StrictMode>
)
=======
  </React.StrictMode>,
);
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23
