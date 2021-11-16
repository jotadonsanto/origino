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
    <Box sx={{ maxWidth: '960px', minHeight: '360px', overflowY: 'scroll' }}>
      <Stack
          direction="row"
          justifyContent="stretch"
          alignItems="stretch"
        >
        {MenuItems.map((item) => (
        <MenuList dense sx={{ width: '25%', minWidth: '240px', pt: 0, pb: 0}}>
          <StyledMenuItem className="unselectable">
            <StyledListItemText><strong>{item.title}</strong></StyledListItemText>
          </StyledMenuItem>
          <Divider sx={{ mt: '0!important', mb: '0!important', borderColor: '#DAF1DE' }} />
          <StyledMenuItem className="unselectable">
            <StyledListItemText>{item.subtitle}</StyledListItemText>
          </StyledMenuItem>
          <Divider sx={{ mt: '0!important', mb: '0!important', borderColor: '#DAF1DE' }} />

            {item.child.map((item, index) => (
            <StyledMenuItem
              key={index}
              selected={selectedIndex === item.id}
              onClick={(event) => handleListItemClick(event, item.id)}>
              <StyledListItemText>{item.title}</StyledListItemText>
            </StyledMenuItem>
            ))}

            {selectedIndex != null &&
              <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Button sx={{ mt: 3 }} variant="contained">SELECCIONAR</Button>
              </Box>
            }
        </MenuList>
        ))}
      </Stack>
    </Box>
  );
}

export default SidebarPopover;