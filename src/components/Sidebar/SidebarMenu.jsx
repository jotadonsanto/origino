import React from 'react';
import styled from 'styled-components';
import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faClipboardList, faIdCard, faKey, faTag, faCommentAltCheck, faCalendar } from '@fortawesome/pro-light-svg-icons';

const MenuItems = [
  {
    name: 'Dashboard',
    icon: faHome,
  },
  {
    name: 'Mercado',
    icon: faShoppingCart,
  },
  {
    name: 'NFT',
    icon: faClipboardList,
  },
  {
    name: 'Titularidad',
    icon: faIdCard,
  },
  {
    name: 'Permisos',
    icon: faKey,
  },
  {
    name: 'Tags',
    icon: faTag,
  },
  {
    name: 'Eventos',
    icon: faCalendar,
  },
  {
    name: 'Actividades',
    icon: faCommentAltCheck,
  }
]
const StyledBox = styled(Box)`
  flex: 1;
  z-index: 0;
  padding-top: 14rem;
`


function SidebarMenu() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <StyledBox>
      <List component="nav" aria-label="main mailbox folders">
        {MenuItems.map((item, index) => (
          <ListItemButton
            key={index}
            selected={selectedIndex === index}
            onClick={(event) => handleListItemClick(event, index)}
          >
            <ListItemIcon>
              <FontAwesomeIcon icon={item.icon} />
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemButton>
        ))}
      </List>
    </StyledBox>
  );
}

export default SidebarMenu;