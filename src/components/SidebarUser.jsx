import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

function SidebarUser() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            SD
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Nombre del usuario" secondary="Rol del usuario" />
      </ListItem>
    </List>
  );
}

export default SidebarUser;