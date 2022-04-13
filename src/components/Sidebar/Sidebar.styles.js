import styled from 'styled-components';
import { drawerWidth } from '../../theme/greenTheme.js';
import { Drawer } from '@mui/material';

export const StyledDrawer = styled(Drawer)`
  width: ${drawerWidth};
  min-width: 240px;
  height: 100vh;
  flex-shrink: 0;
  & .MuiDrawer-paper {
    width: ${drawerWidth};
    min-width: 240px;
    box-sizing: border-box;
    border: none;
    box-shadow: 0px 4px 35px rgba(109, 102, 119, 0.2);
  }
`
