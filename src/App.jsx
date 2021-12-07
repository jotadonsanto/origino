import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { StyledContainer, StyledDrawer, StyledBox } from './App.styles';
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import { activosTheme } from './theme/theme.js';
import { Box } from '@mui/material';
import "./theme/global.scss";

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Activos from './pages/Activos';
import ActivosCarga from './pages/ActivosCarga';
import ArchivoCarga from './pages/ArchivoCarga';

function App() {
  return (
    <Router>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={activosTheme} >
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
                <Route path="/" exact render={() => <Activos />} />
                <Route path="/activos/carga" exact render={() => <ActivosCarga />} />
                <Route path="/archivo/carga" exact render={() => <ArchivoCarga />} />
              </StyledContainer>
            </StyledBox>
          </Box>
        </ThemeProvider>
      </StyledEngineProvider>
    </Router>
  );
}

export default App;
