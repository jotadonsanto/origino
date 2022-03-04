import React, { useContext } from 'react';
import SidebarContext from './../../context/SidebarContext';
import { Items, StyledBox} from './SidebarMenu.styles';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SidebarMenu() {
  const { menu } = useContext(SidebarContext);
  console.log(menu);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <StyledBox>
      <List component="nav" aria-label="main mailbox folders">
        {Items[menu].map((item, index) => (
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