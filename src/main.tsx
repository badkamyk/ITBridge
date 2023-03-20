import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import ErrorPage from './layouts/components/ErrorPage';
import ContactFormContainer from './features/Form/containers/ContactFormContainer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#626ee3',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f50057',
      contrastText: '#fff',
    },
    info: {
      main: '#00b0ff',
      contrastText: '#fff',
    },
  },
});

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/contact',
        element: <ContactFormContainer />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <CssBaseline />
    </ThemeProvider>
  </React.StrictMode>
);
