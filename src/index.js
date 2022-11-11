import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import AuthContext from 'features/auth/components/AuthContext';
import { getAuth } from 'firebase/auth';
import { createTheme, ThemeProvider } from '@mui/material';

const container = document.getElementById('root');
const root = createRoot(container);

const theme = createTheme({
  typography: {
    fontFamily: `'Inter', sans-serif`,
    fontSize: 15,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AuthContext auth={getAuth()}>
        <App />
      </AuthContext>
    </ThemeProvider>
  </Provider>
  // </React.StrictMode>
);
