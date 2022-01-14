import React from 'react';
import { StyledContainer, StyledLeftSide, StyledRightSide } from './../SignIn.styles';
import { Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/pro-light-svg-icons';
import originoLogo from'./../../../assets/images/origino_logo.png';

function Localizacion() {
  return (
    <StyledContainer container spacing={0}>
      <StyledLeftSide item xs={6} className="d-flex flex-column align-center justify-center">
        <Typography variant="h4" component="h2" color="text.blue" className="mb-4">Bienvenidos</Typography>
        <img  src={originoLogo} alt="Origino" className="mt-4"/>
      </StyledLeftSide>
      <StyledRightSide item xs={6} className="d-flex flex-column align-center justify-center">
        <FontAwesomeIcon icon={faUserPlus} size="2x" color="#3969E8" />
        <Typography variant="subtitle1" component="h4" color="text.secondary" className="mb-4">Alta cuenta</Typography>
        <FormControl fullWidth className="mt-4">
          <InputLabel id="pais">Pais</InputLabel>
          <Select
            labelId="pais"
            id="demo-simple-select"
            value=""
            label="Pais"
            onChange={(value) => console.log(value)}
          >
            <MenuItem value={10}>Argentina</MenuItem>
            <MenuItem value={20}>Brasil</MenuItem>
            <MenuItem value={30}>Chile</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth className="mt-4">
          <InputLabel id="provincia">Provincia</InputLabel>
          <Select
            labelId="provincia"
            id="demo-simple-select"
            value=""
            label="Provincia"
            onChange={(value) => console.log(value)}
          >
            <MenuItem value={10}>Buenos Aires</MenuItem>
            <MenuItem value={20}>Tucuman</MenuItem>
            <MenuItem value={30}>Salta</MenuItem>
            <MenuItem value={30}>Jujuy</MenuItem>
            <MenuItem value={30}>Corrientes</MenuItem>
            <MenuItem value={30}>Misiones</MenuItem>
            <MenuItem value={30}>La Rioja</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-required"
          label="Ciudad"
          className="mt-4"
          fullWidth />

        <Button variant="contained" className="mt-4">Siguiente</Button>
      </StyledRightSide>
    </StyledContainer>
  );
}

export default Localizacion;