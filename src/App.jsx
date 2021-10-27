import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Activos from './containers/Activos';

const drawerWidth = '16vw';
const typography = {
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

function App() {
  return (
    <Router>
      <ThemeProvider theme={activosTheme}>
        <Box sx={{ display: 'flex' }}>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
              },
            }}
            variant="permanent"
            anchor="left">
              <Sidebar />
          </Drawer>
          <Box
            component="main"
            sx={{ flexGrow: 1 }}>
            <Header />
            <Route path="/activos" exact render={() => <Activos />} />
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
