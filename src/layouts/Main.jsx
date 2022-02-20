import React from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom'
import { StyledContainer, StyledDrawer, StyledBox } from './Main.styles';
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import { greenTheme } from '../theme/greenTheme.js';
import { blueTheme } from '../theme/blueTheme.js';
import { Box } from '@mui/material';

import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import { MainRoutes } from '../routes';





function Main() {
  const [theme, setTheme] = React.useState(greenTheme);
  function chooseColor(color) {
    if (color === 'blue') {
      setTheme(blueTheme);
    } else {
      setTheme(greenTheme);
    }
    }

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme} >
        <Box className="d-flex">
          <StyledDrawer
            variant="permanent"
            anchor="left">
              <Sidebar />
          </StyledDrawer>
          <StyledBox
            className="d-flex flex-column flex"
            component="main">
            <Header theme={theme} />
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
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default Main;