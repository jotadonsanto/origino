import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';
import { activosTheme, drawerWidth } from './theme/theme.js';
import { Container, Box, Drawer } from '@mui/material';
import "./theme/global.scss";

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Activos from './pages/Activos';
import CargaActivos from './pages/CargaActivos';

const StyledContainer = styled(Container)`
  padding: 2rem 2rem 5rem 5rem;
  margin: 0;
  max-width: none;
`
const StyledDrawer = styled(Drawer)`
  width: ${drawerWidth};
  min-width: 240px;
  flex-shrink: 0;
  & .MuiDrawer-paper {
    width: ${drawerWidth};
    min-width: 240px;
    box-sizing: border-box;
    border: none;
    box-shadow: 0px 4px 35px rgba(109, 102, 119, 0.2);
  }
`
const StyledBox = styled(Box)`
  background: #FCFCFC;
`
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
