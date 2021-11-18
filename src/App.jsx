import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';
import { activosTheme, drawerWidth } from './theme/theme.js';
import { Container, Box, Drawer } from '@mui/material';
import "./theme/global.css";

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Activos from './containers/Activos';
import CargaActivos from './containers/CargaActivos';

const StyledContainer = styled(Container)`
  padding: 2rem 2rem 5rem 5rem;
  margin: 0;
  max-width: none;
`
function App() {
  return (
    <Router>
      <ThemeProvider theme={activosTheme}>
        <Box sx={{ display: 'flex' }}>
          <Drawer
            sx={{
              width: drawerWidth,
              minWidth: '240px',
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                minWidth: '240px',
                boxSizing: 'border-box',
                border: 'none',
                boxShadow: '0px 4px 35px rgba(109, 102, 119, 0.2)'
              },
            }}
            variant="permanent"
            anchor="left">
              <Sidebar />
          </Drawer>
          <Box
            component="main"
            sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, background: '#FCFCFC' }}>
            <Header />
            <StyledContainer sx={{ p: 2 }}>
              <Route path="/" exact render={() => <Activos />} />
              <Route path="/carga" exact render={() => <CargaActivos />} />
            </StyledContainer>
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
