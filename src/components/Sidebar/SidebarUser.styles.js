import styled from 'styled-components'
import { List, ListItemText } from '@mui/material';

export const StyledList = styled(List)`
  width: 100%;
  max-width: 360px;
`
export const StyledListItemText = styled(ListItemText)`
  .MuiTypography-body1 {
    font-size: 12px;
    font-weight: 700;
  }
  .MuiTypography-body2 {
    font-size: 12px;
    font-weight: 500;
  }
`