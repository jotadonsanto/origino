import styled from 'styled-components';
import { Box, Divider, MenuList, MenuItem, ListItemText } from '@mui/material';

export const MenuItems = [
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

export const StyledListItemText = styled(ListItemText)`
  span{
    font-size: 1.22rem;
    strong {
      font-weight: 500;
      color: #454D4E;
    }
  }
`
export const StyledMenuItem = styled(MenuItem)`
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
export const StyledBox = styled(Box)`
  overflow-y: scroll;
  min-height: 360px;
  max-width: 960px;
`
export const StyledMenuList = styled(MenuList)`
  width: 25%;
  min-width: 240px;
  padding-top: 0;
  padding-bottom: 0;
`
export const StyledDivider = styled(Divider)`
  border-color: #DAF1DE;
  margin-top: 0!important;
  margin-bottom: 0!important;
`