import React from 'react';
import styled from 'styled-components';
import { Box, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HeaderBackground from './../../assets/header_background.jpg';

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.5rem 1.5rem 2rem 7vw;
  background-image: linear-gradient(267.76deg, rgba(255, 255, 255, 0) 11.23%, rgba(85, 225, 72, 0.6) 67.09%, rgba(85, 225, 72, 0.8) 96.67%), url(${HeaderBackground});
  background-position: right;
  background-repeat: no-repeat;
`
const StyledNotifications = styled(IconButton)`
  background: #fff;
  position: relative;
  border-radius: 9px;
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }
  span.counter {
    position: absolute;
    top: 6px;
    right: 6px;
    background-color: #ff0000;
    border-radius: 50%;
    width: 13px;
    height: 13px;
    color: #fff;
    font-weight: 700;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`


function Header() {
  return (
    <StyledHeader>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h3" color="#fff" component="div">
          Carga de activos
        </Typography>
        <Typography variant="subtitle1" color="#fff" component="div">
          Establecimiento: Nombre del establecimiento
        </Typography>
      </Box>
      <StyledNotifications aria-label="Notifications">
        <NotificationsNoneIcon />
        <span className="counter">1</span>
      </StyledNotifications>
    </StyledHeader>
  );
}

export default Header;