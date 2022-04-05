import React from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom'
import { StyledContainer, StyledBox } from './Main.styles';
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import { SidebarContextProvider } from './../context/SidebarContext';
import { greenTheme } from '../theme/greenTheme.js';
import { blueTheme } from '../theme/blueTheme.js';
import { Box } from '@mui/material';

import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import { MainRoutes } from '../routes';





function Main() {
  // For theme choosing
  const [theme, setTheme] = React.useState(greenTheme);
  function chooseColor(color) {
    if (color === 'blue') {
      setTheme(blueTheme);
    } else {
      setTheme(greenTheme);
    }
  }

  // For menu toggling
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const toggleMobileOpen = (value) => {
    setMobileOpen(value);
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme} >
        <SidebarContextProvider>
          <Box className="d-flex">
            <Sidebar mobileOpen={mobileOpen} toggleMobileOpen={toggleMobileOpen} />
            <StyledBox
              className="d-flex flex-column flex"
              component="main">
              <Header theme={theme} mobileOpen={mobileOpen} toggleMobileOpen={toggleMobileOpen} />
              <StyledContainer>
                <Switch>
                {MainRoutes.map((page, index) => (
                  <Route key={index} path={page.path} exact>
                    <page.component onLoad={chooseColor}/>
                  </Route>
                ))}
                </Switch>
              </StyledContainer>
            </StyledBox>
          </Box>
        </SidebarContextProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default Main;