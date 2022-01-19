import React from 'react';
import { StyledContainer, StyledLeftSide, StyledRightSide } from '../SignIn.styles';
import { Typography, Button, Stepper, Step, StepLabel, FormControlLabel, Checkbox } from '@mui/material';
import DragAndDropInputFile from '../../../components/common/DragAndDropInputFile';
import originoLogo from'./../../../assets/images/origino_logo.png';

const steps = [
  {
    key: 1,
    active: false,
  },
  {
    key: 2,
    active: false,
  },
  {
    key: 3,
    active: true,
  },
  {
    key: 4,
    active: false,
  }
]

function EstablecimientoImagenes() {
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
        <div className="d-flex flex-column">
          <Typography variant="body2" component="label" color="text.primary" className="mt-4 mb-1">Logo del establecimiento</Typography>
          <DragAndDropInputFile itemToDrag={'logo'} color="blue"/>
          <FormControlLabel
            control={<Checkbox checked={true}
            onChange={() => console.log('do something on check')} />}
            label="Usar logo de empresa"
            className="mt-1" />
        </div>
        <div className="d-flex flex-column">
          <Typography variant="body2" component="label" color="text.primary" className="mt-4 mb-1">Imagenes X</Typography>
          <DragAndDropInputFile itemToDrag={'logo'} color="blue"/>
        </div>
        <div className="d-flex flex-column">
          <Typography variant="body2" component="label" color="text.primary" className="mt-4 mb-1">Imagenes X</Typography>
          <DragAndDropInputFile itemToDrag={'logo'} color="blue"/>
        </div>
        <div className="d-flex flex-column">
          <Typography variant="body2" component="label" color="text.primary" className="mt-4 mb-1">Imagenes X</Typography>
          <DragAndDropInputFile itemToDrag={'logo'} color="blue"/>
        </div>
        <Button variant="contained" className="mt-4">Finalizar</Button>
      </StyledRightSide>
    </StyledContainer>
  );
}

export default EstablecimientoImagenes;