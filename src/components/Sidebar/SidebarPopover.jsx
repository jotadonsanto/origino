import React from 'react';
import styled from 'styled-components';
import { Box, Stack, Divider, MenuList, MenuItem, ListItemText, Button } from '@mui/material';

const StyledListItemText = styled(ListItemText)`
  span{
    font-size: 1.22rem;
    strong {
      font-weight: 500;
      color: #454D4E;
    }
  }
`
const StyledMenuItem = styled(MenuItem)`
  padding: 8px 48px;
  color: #747C7C;
  border-right: 1px solid #DAF1DE;
  &.Mui-selected{
    background-color: #DAF1DE;
    color: #1A1B1B;
  }
  &.unselectable {
    pointer-events: none;
    &:hover {
      background-color: inherit;
    }
  }
`
const StyledBox = styled(Box)`
  overflow-y: scroll;
  min-height: 360px;
  max-width: 960px;
`
const StyledMenuList = styled(MenuList)`
  width: 25%;
  min-width: 240px;
  padding-top: 0;
  padding-bottom: 0;
`
const StyledDivider = styled(Divider)`
  border-color: #DAF1DE;
  margin-top: 0!important;
  margin-bottom: 0!important;
`
const MenuItems = [
  {
    title: 'Las Marias',
    subtitle: 'Activos',
    child: [{
      title: 'SubBox 189634',
      id: 1,
    },
    {
      title: 'SubBox 18913',
      id: 2,
    },
    {
      title: 'SubBox 18913',
      id: 3,
    },
    {
      title: 'SubBox 18913',
      id: 4,
    }],
  },
];

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