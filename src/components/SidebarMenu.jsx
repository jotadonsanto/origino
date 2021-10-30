import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Icon from '@mui/material/Icon';

const MenuItems = [
  {
    name: 'Dashboard',
    icon: 'home',
  },
  {
    name: 'Mercado',
    icon: 'shoppingCart',
  },
  {
    name: 'NFT',
    icon: 'description',
  },
  {
    name: 'Titularidad',
    icon: 'assignmentInd',
  },
  {
    name: 'Permisos',
    icon: 'vpnkey',
  },
  {
    name: 'Tags',
    icon: 'label',
  },
  {
    name: 'Eventos',
    icon: 'event',
  },
  {
    name: 'Actividades',
    icon: 'calendarViewDay',
  },
  {
    name: 'Configuración',
    icon: 'settings',
  }
]

function SidebarMenu() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ flex: '1', zIndex: 0, paddingTop: '14rem' }}>
      <List component="nav" aria-label="main mailbox folders">
        {MenuItems.map((item, index) => (
          <ListItemButton
            key={index}
            selected={selectedIndex === index}
            onClick={(event) => handleListItemClick(event, index)}
          >
            <ListItemIcon>
              <Icon>{item.icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}

export default SidebarMenu;