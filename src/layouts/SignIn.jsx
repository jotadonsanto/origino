import React from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import { signInTheme } from '../theme/signInTheme.js';
import Crear from '../pages/signin/cuenta/Crear';
import DatosPersonales from '../pages/signin/cuenta/DatosPersonales';
import Localizacion from '../pages/signin/cuenta/Localizacion';
import Activada from '../pages/signin/cuenta/Activada';
import EmailEnviado from '../pages/signin/EmailEnviado';
import Cadenas from '../pages/signin/establecimiento/Cadenas';

const pages = [
  {
    exact: true,
    path: '/signin/cuenta/crear',
    component: Crear,
  },
  {
    exact: true,
    path: '/signin/cuenta/datos_personales',
    component: DatosPersonales,
  },
  {
    exact: true,
    path: '/signin/cuenta/localizacion',
    component: Localizacion,
  },
  {
    exact: true,
    path: '/signin/cuenta/activada',
    component: Activada,
  },
  {
    exact: true,
    path: '/signin/email_enviado',
    component: EmailEnviado,
  },
  {
    exact: true,
    path: '/signin/establecimiento/cadenas',
    component: Cadenas,
  },
]

function Main() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={signInTheme} >
        <Switch>
        {pages.map((page, index) => (
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