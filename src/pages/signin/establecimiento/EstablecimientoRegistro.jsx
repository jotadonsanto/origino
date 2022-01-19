import React from 'react';
import { StyledContainer, StyledLeftSide, StyledRightSide } from '../SignIn.styles';
import { Typography, Button, Stepper, Step, StepLabel, FormControl, InputLabel, Select, MenuItem, TextField, Chip } from '@mui/material';
import originoLogo from'./../../../assets/images/origino_logo.png';

const steps = [
  {
    key: 1,
    active: false,
  },
  {
    key: 2,
    active: true,
  },
  {
    key: 3,
    active: false,
  },
  {
    key: 4,
    active: false,
  }
]

function EstablecimientoRegistro() {
  return (
    <StyledContainer container spacing={0}>
      <StyledLeftSide item xs={6} className="d-flex flex-column align-center justify-center">
        <Typography variant="h4" component="h2" color="text.blue" className="mb-4">Bienvenidos</Typography>
        <img  src={originoLogo} alt="Origino" className="mt-4"/>
      </StyledLeftSide>
      <StyledRightSide item xs={6} className="d-flex flex-column align-center justify-center">
        <Stepper alternativeLabel className="w-100 mb-4">
          {steps.map((step) => (
            <Step key={step.key} active={step.active}>
              <StepLabel></StepLabel>
            </Step>
          ))}
        </Stepper>
        <FormControl fullWidth className="ml-4 mr-4 mt-4">
          <InputLabel id="pais">Empresa</InputLabel>
          <Select
            labelId="pais"
            id="pais"
            value=""
            label="Selecciona empresa"
            onChange="" >
            <MenuItem value={10}>Argentina</MenuItem>
            <MenuItem value={20}>Brasil</MenuItem>
            <MenuItem value={30}>Chile</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-required"
          label="Nombre del establecimiento"
          className="mt-4"
          fullWidth />
        <TextField
          id="outlined-required"
          label="Código RENSPA"
          className="mt-4"
          type="number"
          helperText="Ingrese los 9 digitos"
          fullWidth />
        <TextField
          id="outlined-required"
          label="Código único de identificación ganadera"
          className="mt-4"
          type="number"
          fullWidth />

        <Typography variant="body2" component="label" color="text.primary" className="mt-4 align-self-start">Tipo de establecimiento productivo</Typography>
        <div className="d-flex flex-row flex-wrap w-100 mt-1 mb-4">
          <Chip label="Establecimiento XX" color="primary" className="mr-1 mb-1" onDelete={() => {console.log('on Delete')}} />
          <Chip label="Establecimiento XX" color="primary" variant="outlined" className="mr-1 mb-1"  />
          <Chip label="Establecimiento XX" color="primary" className="mr-1 mb-1" onDelete={() => {console.log('on Delete')}} />
          <Chip label="Establecimiento XX" color="primary" variant="outlined" className="mr-1 mb-1"  />
          <Chip label="Establecimiento XX" color="primary" className="mr-1 mb-1" onDelete={() => {console.log('on Delete')}} />
        </div>
        <Button variant="contained" className="mt-4">Siguiente</Button>
      </StyledRightSide>
    </StyledContainer>
  );
}

export default EstablecimientoRegistro;