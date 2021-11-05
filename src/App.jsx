import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Activos from './containers/Activos';
import CargaActivos from './containers/CargaActivos';

const drawerWidth = '16vw';
const typography = {
  fontFamily: ['Ubuntu', 'Open Sans'].join(','),
  h3: {
    fontWeight: 500,
  }
}
const palette = {
  primary: {
    light: '#DAFFD7',
    main: '#55E148',
    dark: '#61B15A',
    contrastText: '#ecffe9',
  },
  secondary: {
    light: '',
    main: '#666',
    dark: '',
    contrastText: '',
  },
  text: {
    primary: "#666",
    secondary: "#00000",
  }
}
const activosTheme = createTheme({
  palette: palette,
  typography: typography,
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: palette.primary.dark,
            backgroundColor: palette.primary.light,
            ".MuiIcon-root": {
              color: palette.primary.dark,
            },
            ".MuiTypography-root": {
              fontWeight: 500,
            },
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: `'Ubuntu', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'`,
        },
      },
    },
  },
});

const StyledContainer = styled(Container)`
  padding: 2rem 2rem 1.7rem 7vw;
  margin: 0;
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
              <Route path="/activos" exact render={() => <Activos />} />
              <Route path="/carga" exact render={() => <CargaActivos />} />
            </StyledContainer>
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
