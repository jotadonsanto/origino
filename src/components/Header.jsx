import React from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import HeaderBackground from './../assets/header_background.jpg';

const Head = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 0 1.7rem 7vw;
  background-image: linear-gradient(267.76deg, rgba(255, 255, 255, 0) 11.23%, rgba(85, 225, 72, 0.6) 67.09%, rgba(85, 225, 72, 0.8) 96.67%), url(${HeaderBackground});;
`

function Header() {
  return (
    <Head>
      <Typography variant="h3" color="#fff" component="div">
        Carga de activos
      </Typography>
      <Typography variant="subtitle1" color="#fff" component="div">
        Establecimiento: Nombre del establecimiento
      </Typography>
    </Head>
  );
}

export default Header;