import React from 'react';
import { StyledContainer, StyledLeftSide, StyledRightSide } from './../SignIn.styles';
import { Typography, TextField, FormControlLabel, Checkbox, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/pro-light-svg-icons';
import originoLogo from './../../../assets/images/origino_logo.png';

function Crear() {
  return (
    <StyledContainer container spacing={0}>
      <StyledLeftSide item xs={6} className="d-flex flex-column align-center justify-center">
        <Typography variant="h4" component="h2" color="text.blue" className="mb-4">Bienvenidos</Typography>
        <img  src={originoLogo} alt="Origino" className="mt-4"/>
      </StyledLeftSide>
      <StyledRightSide item xs={6} className="d-flex flex-column align-center justify-center">
        <FontAwesomeIcon icon={faUserPlus} size="2x" color="#3969E8" />
        <Typography variant="subtitle1" component="h4" color="text.secondary" className="mb-4">Crear cuenta</Typography>
        <TextField
          id="outlined-required"
          label="Email"
          className="mt-4"
          fullWidth />
        <TextField
          id="outlined-password-input"
          label="Contraseña"
          type="password"
          helperText="Ingresa mínimo 8 caracteres"
          className="mt-2"
          fullWidth />
        <FormControlLabel
          control={<Checkbox checked={true}
          onChange={() => console.log('do something on check')} />}
          label="He leído y acepto los términos y servicios"
          className="mb-4 mt-4" />

        <Button variant="contained" className="mt-4">Crear cuenta</Button>
      </StyledRightSide>
    </StyledContainer>
  );
}

export default Crear;