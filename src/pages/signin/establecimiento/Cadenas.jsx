import React from 'react';
import { StyledContainer, StyledLeftSide, StyledRightSide } from '../SignIn.styles';
import { StyledCard } from './Cadenas.styles';
import { Typography, Button, Stepper, Step, StepLabel, FormControl, InputLabel, Select, MenuItem, Radio } from '@mui/material';
import { faExclamationCircle } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  }
]

function Cadenas() {
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
        <FormControl fullWidth className="ml-4 mr-4 mb-4 mt-4">
          <InputLabel id="pais">Pais en donde vas a operar</InputLabel>
          <Select
            labelId="pais"
            id="pais"
            value=""
            label="Pais en donde vas a operar"
            onChange="" >
            <MenuItem value={10}>Argentina</MenuItem>
            <MenuItem value={20}>Brasil</MenuItem>
            <MenuItem value={30}>Chile</MenuItem>
          </Select>
        </FormControl>
        <StyledCard className="d-flex flex-row w-100 align-center justify-between pt-1 pb-1 pl-2 pr-2 mb-2 mt-4">
          <div className="d-flex flex-row align-center">
            <FontAwesomeIcon icon={faExclamationCircle} size="1x" className="mr-2" />
            <div className="d-flex flex-row">
              <Typography variant="body1" component="p" color="text.primary" className="mr-2">Cadena 1</Typography>
              <Typography variant="body1" component="p" color="text.secondary">Atributo 1, Atributo 2</Typography>
            </div>
          </div>
          <Radio
            checked={true}
            onChange={(value) => console.log(value)}
            value="a"
            name="radio-buttons"
          />
        </StyledCard>

        <StyledCard className="d-flex flex-row w-100 align-center justify-between pt-1 pb-1 pl-2 pr-2 mb-2">
          <div className="d-flex flex-row align-center">
            <FontAwesomeIcon icon={faExclamationCircle} size="1x" className="mr-2" />
            <div className="d-flex flex-row">
              <Typography variant="body1" component="p" color="text.primary" className="mr-2">Cadena 123</Typography>
              <Typography variant="body1" component="p" color="text.secondary">Atributo 1, Atributo 2</Typography>
            </div>
          </div>
          <Radio
            checked={false}
            onChange={(value) => console.log(value)}
            value="a"
            name="radio-buttons"
          />
        </StyledCard>

        <StyledCard className="d-flex flex-row w-100 align-center justify-between pt-1 pb-1 pl-2 pr-2 mb-2">
          <div className="d-flex flex-row align-center">
            <FontAwesomeIcon icon={faExclamationCircle} size="1x" className="mr-2" />
            <div className="d-flex flex-row">
              <Typography variant="body1" component="p" color="text.primary" className="mr-2">Cadena 123</Typography>
              <Typography variant="body1" component="p" color="text.secondary">Atributo 1, Atributo 2</Typography>
            </div>
          </div>
          <Radio
            checked={false}
            onChange={(value) => console.log(value)}
            value="a"
            name="radio-buttons"
          />
        </StyledCard>

        <StyledCard className="d-flex flex-row w-100 align-center justify-between pt-1 pb-1 pl-2 pr-2 mb-2">
          <div className="d-flex flex-row align-center">
            <FontAwesomeIcon icon={faExclamationCircle} size="1x" className="mr-2" />
            <div className="d-flex flex-row">
              <Typography variant="body1" component="p" color="text.primary" className="mr-2">Cadena 123</Typography>
              <Typography variant="body1" component="p" color="text.secondary">Atributo 1, Atributo 2</Typography>
            </div>
          </div>
          <Radio
            checked={false}
            onChange={(value) => console.log(value)}
            value="a"
            name="radio-buttons"
          />
        </StyledCard>

        <StyledCard className="d-flex flex-row w-100 align-center justify-between pt-1 pb-1 pl-2 pr-2 mb-2">
          <div className="d-flex flex-row align-center">
            <FontAwesomeIcon icon={faExclamationCircle} size="1x" className="mr-2" />
            <div className="d-flex flex-row">
              <Typography variant="body1" component="p" color="text.primary" className="mr-2">Cadena 123</Typography>
              <Typography variant="body1" component="p" color="text.secondary">Atributo 1, Atributo 2</Typography>
            </div>
          </div>
          <Radio
            checked={false}
            onChange={(value) => console.log(value)}
            value="a"
            name="radio-buttons"
          />
        </StyledCard>
        <Button variant="contained" className="mt-4">Siguiente</Button>
      </StyledRightSide>
    </StyledContainer>
  );
}

export default Cadenas;