import styled from 'styled-components';
import { IconButton } from '@mui/material';

export const StyledIconButton = styled(IconButton)`
  background-color: #FFA589;
  &:hover {
    background-color: rgba(255, 165, 137, 0.8);
  }
  svg {
    color: white;
    width: 2rem!important;
    height: 2rem;
  }
`