import styled from 'styled-components';
import { Container, Box } from '@mui/material';

export const StyledContainer = styled(Container)`
  padding: 2rem 2rem 5rem 5rem;
  margin: 0;
  max-width: none;
  @media (max-width: 600px) {
    padding: 2rem!important;
  }
`
export const StyledBox = styled(Box)`
  background: #FCFCFC;
`
