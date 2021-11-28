import React from 'react';
import { StyledList, StyledListItemText } from './SidebarUser.styles';
import { ListItem, ListItemAvatar, Avatar } from '@mui/material';

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