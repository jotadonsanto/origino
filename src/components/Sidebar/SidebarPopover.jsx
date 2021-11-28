import React from 'react';
import { MenuItems, StyledBox, StyledListItemText, StyledMenuItem, StyledMenuList, StyledDivider } from './SidebarPopover.styles';
import { Box, Stack, Button } from '@mui/material';

function SidebarPopover() {
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <StyledBox>
      <Stack
          direction="row"
          justifyContent="stretch"
          alignItems="stretch"
        >
        {MenuItems.map((item) => (
        <StyledMenuList dense>
          <StyledMenuItem className="unselectable">
            <StyledListItemText><strong>{item.title}</strong></StyledListItemText>
          </StyledMenuItem>
          <StyledDivider />
          <StyledMenuItem className="unselectable">
            <StyledListItemText>{item.subtitle}</StyledListItemText>
          </StyledMenuItem>
          <StyledDivider />

            {item.child.map((item, index) => (
            <StyledMenuItem
              key={index}
              selected={selectedIndex === item.id}
              onClick={(event) => handleListItemClick(event, item.id)}>
              <StyledListItemText>{item.title}</StyledListItemText>
            </StyledMenuItem>
            ))}

            {selectedIndex != null &&
              <Box className="d-flex justify-center align-center">
                <Button className="mt-3" variant="contained">SELECCIONAR</Button>
              </Box>
            }
        </StyledMenuList>
        ))}
      </Stack>
    </StyledBox>
  );
}

export default SidebarPopover;