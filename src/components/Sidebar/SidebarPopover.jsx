import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

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

function SidebarPopover() {
  return (
    <Box sx={{ maxWidth: '960px', minHeight: '360px', overflowY: 'scroll' }}>
      <Stack
          direction="row"
          justifyContent="stretch"
          alignItems="stretch"
        >
        <MenuList dense sx={{ width: '25%', minWidth: '240px', pt: 0, pb: 0 }}>
          <StyledMenuItem className="unselectable">
            <StyledListItemText><strong>Las Marias</strong></StyledListItemText>
          </StyledMenuItem>
          <Divider sx={{ mt: '0!important', mb: '0!important', borderColor: '#DAF1DE' }} />
          <StyledMenuItem className="unselectable">
            <StyledListItemText>Activos</StyledListItemText>
          </StyledMenuItem>
          <Divider sx={{ mt: '0!important', mb: '0!important', borderColor: '#DAF1DE' }} />
          <StyledMenuItem>
            <StyledListItemText>Sub box 1/2</StyledListItemText>
          </StyledMenuItem>
          <StyledMenuItem selected>
            <StyledListItemText>Sub box 1/2</StyledListItemText>
          </StyledMenuItem>
          <StyledMenuItem selected>
            <StyledListItemText>Sub box 1/2</StyledListItemText>
          </StyledMenuItem>
        </MenuList>
        <MenuList dense sx={{ width: '25%', minWidth: '240px', pt: 0, pb: 0 }}>
          <StyledMenuItem className="unselectable">
            <StyledListItemText><strong>Las Marias</strong></StyledListItemText>
          </StyledMenuItem>
          <Divider sx={{ mt: '0!important', mb: '0!important', borderColor: '#DAF1DE' }} />
          <StyledMenuItem className="unselectable">
            <StyledListItemText>Activos</StyledListItemText>
          </StyledMenuItem>
          <Divider sx={{ mt: '0!important', mb: '0!important', borderColor: '#DAF1DE' }} />
          <StyledMenuItem>
            <StyledListItemText>Sub box 1/2</StyledListItemText>
          </StyledMenuItem>
          <StyledMenuItem selected>
            <StyledListItemText>Sub box 1/2</StyledListItemText>
          </StyledMenuItem>
          <StyledMenuItem >
            <StyledListItemText>Sub box 1/2</StyledListItemText>
          </StyledMenuItem>
        </MenuList>
        <MenuList dense sx={{ width: '25%', minWidth: '240px', pt: 0, pb: 0 }}>
          <StyledMenuItem className="unselectable">
            <StyledListItemText><strong>Las Marias</strong></StyledListItemText>
          </StyledMenuItem>
          <Divider sx={{ mt: '0!important', mb: '0!important', borderColor: '#DAF1DE' }} />
          <StyledMenuItem className="unselectable">
            <StyledListItemText>Activos</StyledListItemText>
          </StyledMenuItem>
          <Divider sx={{ mt: '0!important', mb: '0!important', borderColor: '#DAF1DE' }} />
          <StyledMenuItem>
            <StyledListItemText>Sub box 1/2</StyledListItemText>
          </StyledMenuItem>
          <StyledMenuItem >
            <StyledListItemText>Sub box 1/2</StyledListItemText>
          </StyledMenuItem>
          <StyledMenuItem selected>
            <StyledListItemText>Sub box 1/2</StyledListItemText>
          </StyledMenuItem>
        </MenuList>
        <MenuList dense sx={{ width: '25%', minWidth: '240px', pt: 0, pb: 0 }}>
          <StyledMenuItem className="unselectable">
            <StyledListItemText><strong>Las Marias</strong></StyledListItemText>
          </StyledMenuItem>
          <Divider sx={{ mt: '0!important', mb: '0!important', borderColor: '#DAF1DE' }} />
          <StyledMenuItem className="unselectable">
            <StyledListItemText>Activos</StyledListItemText>
          </StyledMenuItem>
          <Divider sx={{ mt: '0!important', mb: '0!important', borderColor: '#DAF1DE' }} />
          <StyledMenuItem selected>
            <StyledListItemText>Sub box 1/2</StyledListItemText>
          </StyledMenuItem>
          <StyledMenuItem>
            <StyledListItemText>Sub box 1/2</StyledListItemText>
          </StyledMenuItem>
          <StyledMenuItem>
            <StyledListItemText>Sub box 1/2</StyledListItemText>
          </StyledMenuItem>
        </MenuList>
        <MenuList dense sx={{ width: '25%', minWidth: '240px', pt: 0, pb: 0 }}>
          <StyledMenuItem className="unselectable">
            <StyledListItemText><strong>Las Marias</strong></StyledListItemText>
          </StyledMenuItem>
          <Divider sx={{ mt: '0!important', mb: '0!important', borderColor: '#DAF1DE' }} />
          <StyledMenuItem className="unselectable">
            <StyledListItemText>Activos</StyledListItemText>
          </StyledMenuItem>
          <Divider sx={{ mt: '0!important', mb: '0!important', borderColor: '#DAF1DE' }} />
          <StyledMenuItem selected>
            <StyledListItemText>Sub box 1/2</StyledListItemText>
          </StyledMenuItem>
          <StyledMenuItem>
            <StyledListItemText>Sub box 1/2</StyledListItemText>
          </StyledMenuItem>
          <StyledMenuItem>
            <StyledListItemText>Sub box 1/2</StyledListItemText>
          </StyledMenuItem>
        </MenuList>
        <MenuList dense sx={{ width: '25%', minWidth: '240px', pt: 0, pb: 0 }}>
          <StyledMenuItem className="unselectable">
            <StyledListItemText><strong>Las Marias</strong></StyledListItemText>
          </StyledMenuItem>
          <Divider sx={{ mt: '0!important', mb: '0!important', borderColor: '#DAF1DE' }} />
          <StyledMenuItem className="unselectable">
            <StyledListItemText>Activos</StyledListItemText>
          </StyledMenuItem>
          <Divider sx={{ mt: '0!important', mb: '0!important', borderColor: '#DAF1DE' }} />
          <StyledMenuItem selected>
            <StyledListItemText>Sub box 1/2</StyledListItemText>
          </StyledMenuItem>
          <StyledMenuItem>
            <StyledListItemText>Sub box 1/2</StyledListItemText>
          </StyledMenuItem>
          <StyledMenuItem>
            <StyledListItemText>Sub box 1/2</StyledListItemText>
          </StyledMenuItem>
        </MenuList>
      </Stack>
    </Box>
  );
}

export default SidebarPopover;