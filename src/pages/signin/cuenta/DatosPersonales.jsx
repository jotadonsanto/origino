import React from 'react';
import { StyledContainer, StyledLeftSide, StyledRightSide } from './../SignIn.styles';
import { Typography, TextField, Button } from '@mui/material';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/pro-light-svg-icons';
import originoLogo from'./../../../assets/images/origino_logo.png';

function DatosPersonales() {
  return (
    <StyledContainer container spacing={0}>
      <StyledLeftSide item xs={6} className="d-flex flex-column align-center justify-center">
        <Typography variant="h4" component="h2" color="text.blue" className="mb-4">Bienvenidos</Typography>
        <img  src={originoLogo} alt="Origino" className="mt-4"/>
      </StyledLeftSide>
      <StyledRightSide item xs={6} className="d-flex flex-column align-center justify-center">
        <FontAwesomeIcon icon={faUserPlus} size="2x" color="#3969E8" />
        <Typography variant="subtitle1" component="h4" color="text.secondary" className="mb-4">Alta cuenta</Typography>
        <TextField
          id="outlined-required"
          label="Nombre/s"
          className="mt-4"
          fullWidth />
        <TextField
          id="outlined-required"
          label="Apellido/s"
          className="mt-4"
          fullWidth />
        <TextField
          id="outlined-required"
          label="DNI"
          className="mt-4"
          type="number"
          helperText="Ingresá el número sin puntos"
          fullWidth />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Fecha de nacimiento"
            value=""
            onChange={(newValue) => { console.log(newValue); }}
            renderInput={(params) => <TextField {...params} fullWidth className="mt-4" />} />
        </LocalizationProvider>
        <TextField
          id="outlined-required"
          label="DNI"
          className="mt-4"
          type="number"
          helperText="(011) 15 12345678"
          fullWidth />

        <Button variant="contained" className="mt-4">Siguiente</Button>
      </StyledRightSide>
    </StyledContainer>
  );
}

export default DatosPersonales;