import React from 'react';
import { MenuItems, StyledBox} from './SidebarMenu.styles';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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