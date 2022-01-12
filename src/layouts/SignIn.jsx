import React from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import { signInTheme } from '../theme/signInTheme.js';
import Alta from '../pages/signin/Alta';

const pages = [
  {
    exact: true,
    path: '/signin',
    component: Alta,
  },
]

function Main() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={signInTheme} >
        {pages.map((page, index) => (
          <Route key={index} path={page.path} exact>
            <page.component/>
          </Route>
        ))}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default Main;