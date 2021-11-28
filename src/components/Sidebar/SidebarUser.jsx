import React from 'react';
import styled from 'styled-components'
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';

const StyledList = styled(List)`
  width: 100%;
  max-width: 360px;
`
const StyledListItemText = styled(ListItemText)`
  .MuiTypography-body1 {
    font-size: 12px;
    font-weight: 700;
  }
  .MuiTypography-body2 {
    font-size: 12px;
    font-weight: 500;
  }
`

function SidebarUser() {
  return (
    <StyledList>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            SD
          </Avatar>
        </ListItemAvatar>
        <StyledListItemText primary="Mi cuenta" secondary="Rol del usuario" />
      </ListItem>
    </StyledList>
  );
}

export default SidebarUser;