import React from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import { signInTheme } from '../theme/signInTheme.js';
import { SignInRoutes } from '../routes';



function Main() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={signInTheme} >
        <Switch>
        {SignInRoutes.map((page, index) => (
          <Route key={index} path={page.path} exact>
            <page.component/>
          </Route>
        ))}
        </Switch>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default Main;