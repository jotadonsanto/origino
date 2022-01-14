import React from 'react';
import { StyledContainer, StyledLeftSide, StyledRightSide } from './SignIn.styles';
import { Typography, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/pro-light-svg-icons';
import originoLogo from'./../../assets/images/origino_logo.png';

function EmailEnviado() {
  return (
    <StyledContainer container spacing={0}>
      <StyledLeftSide item xs={6} className="d-flex flex-column align-center justify-center">
        <Typography variant="h4" component="h2" color="text.blue" className="mb-4">Bienvenidos</Typography>
        <img  src={originoLogo} alt="Origino" className="mt-4"/>
      </StyledLeftSide>
      <StyledRightSide item xs={6} className="d-flex flex-column align-center justify-center">
        <FontAwesomeIcon icon={faCheckCircle} size="3x" color="#3969E8" />
        <Typography variant="h3" component="h4" color="text.primary" align="center" className="mt-2 mb-4">Email de verificación enviado</Typography>
        <Typography variant="subtitle1" component="h4" color="text.secondary" align="center" className="mb-4">Te enviamos un correo a ****@gmail.com para activar la cuenta.</Typography>
        <Button variant="contained" className="mt-4">Iniciar Sesion</Button>
      </StyledRightSide>
    </StyledContainer>
  );
}

export default EmailEnviado;