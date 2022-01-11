import styled from 'styled-components';
import { drawerWidth } from '../theme/originoTheme.js';
import { Container, Box, Drawer } from '@mui/material';

export const StyledContainer = styled(Container)`
  padding: 2rem 2rem 5rem 5rem;
  margin: 0;
  max-width: none;
`
export const StyledDrawer = styled(Drawer)`
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
export const StyledBox = styled(Box)`
  background: #FCFCFC;
`
