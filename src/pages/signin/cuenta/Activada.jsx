import React from 'react';
import { StyledContainer, StyledLeftSide, StyledRightSide } from './../SignIn.styles';
import { Typography, Button, Stepper, Step, StepLabel } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/pro-light-svg-icons';
import originoLogo from'./../../../assets/images/origino_logo.png';

const steps = [
  'Empresa',
  'Establecimiento',
];

function Activada() {
  return (
    <StyledContainer container spacing={0}>
      <StyledLeftSide item xs={6} className="d-flex flex-column align-center justify-center">
        <Typography variant="h4" component="h2" color="text.blue" className="mb-4">Bienvenidos</Typography>
        <img  src={originoLogo} alt="Origino" className="mt-4"/>
      </StyledLeftSide>
      <StyledRightSide item xs={6} className="d-flex flex-column align-center justify-center">
        <FontAwesomeIcon icon={faCheckCircle} size="3x" color="#3969E8" />
        <Typography variant="h3" component="h4" color="text.primary" align="center" className="mt-2 mb-4">Cuenta activada</Typography>
        <Typography variant="subtitle1" component="h4" color="text.secondary" align="center" className="mb-4">La cuenta ya ha sido activada.<br/>Para operar deberas Ingresar:</Typography>
        <Stepper alternativeLabel className="w-100 mb-4">
          {steps.map((label) => (
            <Step key={label} active>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Button variant="contained" className="mt-4">Crear empresa</Button>
        <Button variant="outlined" className="mt-4">Lo haré mas tarde</Button>
      </StyledRightSide>
    </StyledContainer>
  );
}

export default Activada;