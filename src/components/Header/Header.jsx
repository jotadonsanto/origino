import React from 'react';
import { StyledHeader, StyledNotifications } from './Header.styles';
import { Box, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/pro-light-svg-icons';

function Header({ theme }) {
  const getColor = () => {
    return theme.palette.primary.main;
  }

  return (
    <StyledHeader backgroundColor={getColor}>
      <Box>
        <Typography variant="h3" color="#fff" component="div">
          Resumen de carga
        </Typography>
        <Typography variant="subtitle1" color="#fff" component="div">
          Revisá que toda la información sea correcta antes de finalizar.
        </Typography>
      </Box>
      <StyledNotifications aria-label="Notifications">
        <FontAwesomeIcon icon={faBell} />
        <span className="counter">1</span>
      </StyledNotifications>
    </StyledHeader>
  );
}

export default Header;