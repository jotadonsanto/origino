import React from 'react';
import { StyledContainer, StyledLeftSide, StyledRightSide } from '../SignIn.styles';
import { Typography, Stepper, Step, StepLabel, Card, Grid, CardActionArea } from '@mui/material';
import originoLogo from'./../../../assets/images/origino_logo.png';

const steps = [
  {
    key: 1,
    active: true,
  },
  {
    key: 2,
    active: false,
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

const types = [
  {
    key: 1,
    name: 'Establecimiento tipo 1',
    description: 'Creá el excel directamente desde nuestro sistema.',
  },
  {
    key: 2,
    name: 'Establecimiento tipo 1',
    description: 'Creá el excel directamente desde nuestro sistema.',
  },
  {
    key: 3,
    name: 'Establecimiento tipo 1',
    description: 'Creá el excel directamente desde nuestro sistema.',
  },
  {
    key: 4,
    name: 'Establecimiento tipo 1',
    description: 'Creá el excel directamente desde nuestro sistema.',
  },
]

function EstablecimientoTipos() {
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
        <Typography variant="h6" component="p" color="text.secondary" className="font-weight-normal mb-4">Elegí tipo de establecimiento</Typography>
        <Grid spacing={2} container>
          {types.map((type) => (
            <Grid item xs={12} xl={6}>
              <Card>
                <CardActionArea className="p-4 text-center font-weight-normal">
                  <img src={originoLogo} alt="Origino" className="mb-2 w-100"/>
                  <Typography variant="h5" component="p" color="text.primary" className=" mb-2">{type.name}</Typography>
                  <Typography variant="caption" component="p" color="text.secondary">{type.description}</Typography>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </StyledRightSide>
    </StyledContainer>
  );
}

export default EstablecimientoTipos;