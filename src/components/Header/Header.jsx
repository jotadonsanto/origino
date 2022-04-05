import React from 'react';
import { StyledHeader, StyledNotifications } from './Header.styles';
import { Box, Typography, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuIcon from '@mui/icons-material/Menu';
import { faBell } from '@fortawesome/pro-light-svg-icons';

function Header({ theme, mobileOpen, toggleMobileOpen }) {
  const getColor = () => {
    return theme.palette.primary.main;
  }

  return (
    <StyledHeader backgroundColor={getColor}>
      <IconButton
        color="secondary"
        onClick={() => toggleMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
        sx={{
          display: { xs: 'block', sm: 'none' },
          position: 'absolute',
          left: '8px',
          top: '8px',
        }}>
        <MenuIcon/>
      </IconButton>
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