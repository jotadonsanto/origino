import React from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import { originoTheme } from '../theme/originoTheme.js';
import Activos from '../pages/activos/Activos';

const pages = [
  {
    exact: true,
    path: '/signin',
    component: Activos,
  },
]

function Main() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={originoTheme} >
        {pages.map((page, index) => (
          <Route key={index} path={page.path} exact>
            <p>SignIn</p>
          </Route>
        ))}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default Main;