import React from 'react';
import { BrowserRouter as Route } from 'react-router-dom'
import { StyledContainer, StyledDrawer, StyledBox } from './Main.styles';
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import { originoTheme } from '../theme/originoTheme.js';
import { Box } from '@mui/material';

import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Activos from '../pages/activos/Activos';
import ActivosCarga from '../pages/activos/ActivosCarga';
import ArchivoCarga from '../pages/archivos/ArchivoCarga';
import ArchivoVerificacion from '../pages/archivos/ArchivoVerificacion';

const pages = [
  {
    exact: true,
    path: '/',
    component: Activos,
  },
  {
    exact: true,
    path: '/archivo/verificacion',
    component: ArchivoVerificacion,
  },
  {
    exact: true,
    path: '/activos/carga',
    component: ActivosCarga,
  },
  {
    exact: true,
    path: '/archivo/carga',
    component: ArchivoCarga,
  },
]

function Main() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={originoTheme} >
        <Box className="d-flex">
          <StyledDrawer
            variant="permanent"
            anchor="left">
              <Sidebar />
          </StyledDrawer>
          <StyledBox
            className="d-flex flex-column flex"
            component="main">
            <Header />
            <StyledContainer>
              {pages.map((page, index) => (
                <Route key={index} path={page.path} exact>
                  <page.component/>
                </Route>
              ))}
            </StyledContainer>
          </StyledBox>
        </Box>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default Main;