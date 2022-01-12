import React from 'react';
import styled from 'styled-components';
import { Grid, Typography, TextField, FormControlLabel, Checkbox, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/pro-light-svg-icons';
import originoLogo from'./../../assets/images/origino_logo.png';

const StyledContainer = styled(Grid)`
    min-height: 100vh;
`

const StyledLeftSide = styled(Grid)`
    background-color: #EEF1F6;
`

function Alta() {
  return (
    //Starts the route view with <Grid container> and add <Grid item 12> for rows.
    <StyledContainer container spacing={0}>
      <StyledLeftSide item xs={6} className="d-flex flex-column align-center justify-center">
        <Typography variant="h4" component="h2" color="text.blue" className="mb-4">Bienvenidos</Typography>
        <img  src={originoLogo} alt="Origino" className="mt-4"/>
      </StyledLeftSide>
      <Grid item xs={6} className="d-flex flex-column align-center justify-center pl-4 pr-4">
        <FontAwesomeIcon icon={faUserPlus} size="2x" color="#3969E8" />
        <Typography variant="subtitle1" component="h4" color="text.secondary" className="mb-4">Crear cuenta</Typography>
        <TextField
          id="outlined-required"
          label="Email"
          defaultValue="Hello World"
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
          className="mb-4" />

        <Button variant="contained" className="mt-4">Crear cuenta</Button>
      </Grid>
    </StyledContainer>
  );
}

export default Alta;