import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { StyledContainer, StyledDrawer, StyledBox } from './App.styles';
import { ThemeProvider } from '@mui/material/styles';
import { activosTheme } from './theme/theme.js';
import { Box } from '@mui/material';
import "./theme/global.scss";

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Activos from './pages/Activos';
import CargaActivos from './pages/CargaActivos';

function App() {
  return (
    <Router>
      <ThemeProvider theme={activosTheme}>
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
              <Route path="/carga" exact render={() => <CargaActivos />} />
            </StyledContainer>
          </StyledBox>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
