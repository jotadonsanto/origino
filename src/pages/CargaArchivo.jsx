import React from 'react';
import styled from 'styled-components';
import { Grid, Card, Button, Typography, Stepper, Step, StepButton, Divider, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPlus } from '@fortawesome/pro-light-svg-icons';

const steps = ['Cargar Archivo', 'Verificación', 'Resumen y confirmación'];
const StyledIconButton = styled(IconButton)`
  background-color: #FFA589;
  &:hover {
    background-color: rgba(255, 165, 137, 0.8);
  }
  svg {
    color: white;
    width: 2rem!important;
    height: 2rem;
  }
`

function CargaArchivo() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed] = React.useState({});

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    //Starts the route view with <Grid container> and add <Grid item 12> for rows.
    <Grid container spacing={2}>
      <Grid item xs={12} className="mt-3">
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <Divider variant="middle" className="mt-4"/>
      </Grid>

      <Grid item xs={12} className="mt-3">
        <Typography variant="body2" component="h3" color="text.primary" className="mb-2">Si no tenes el excel, podes descargalo aca:</Typography>
        <Button variant="contained" startIcon={<FontAwesomeIcon icon={faDownload} />}>DESCARGAR</Button>
      </Grid>

      <Grid item xs={12} className="mt-3">
        <Typography variant="body2" component="h3" color="text.light" className="d-flex mb-2">El formato permitido para la carga de archivos es<Typography variant="body2" component="h3" color="primary">&nbsp;.xlsx</Typography></Typography>
      </Grid>

      <Grid item xs={3}>
        <Card className="d-flex flex-column p-3">
          <Typography variant="h6" component="h4" color="text.light">Creá una plantilla nueva</Typography>
          <Divider variant="middle" className="mr-0 ml-0 mt-3 mb-2"/>
          <Typography variant="caption" component="h6" color="text.light" className="mb-4">Si ya tenés el archivo completo, cargalo directamente.</Typography>
          <StyledIconButton size="large" className="align-self-center">
            <FontAwesomeIcon icon={faPlus} />
          </StyledIconButton>
        </Card>
      </Grid>

      <Grid item xs={3}>
        <Card className="d-flex flex-column p-3">
          <Typography variant="h6" component="h4" color="text.light">Cargá un activo de forma individual.</Typography>
          <Divider variant="middle" className="mr-0 ml-0 mt-3 mb-2"/>
          <Typography variant="caption" component="h6" color="text.light" className="mb-4">Si necesitás crear solo un activo, podés hacerlo directamente presionando “+”.</Typography>
          <StyledIconButton size="large" className="align-self-center">
            <FontAwesomeIcon icon={faPlus} />
          </StyledIconButton>
        </Card>
      </Grid>

      <Grid item xs={3}>
        <Card className="d-flex flex-column p-3">
          <Typography variant="h6" component="h4" color="text.light">Creá una plantilla nueva</Typography>
          <Divider variant="middle" className="mr-0 ml-0 mt-3 mb-2"/>
          <Typography variant="caption" component="h6" color="text.light" className="mb-4">Si ya tenés el archivo completo, cargalo directamente.</Typography>
          <StyledIconButton size="large" className="align-self-center">
            <FontAwesomeIcon icon={faPlus} />
          </StyledIconButton>
        </Card>
      </Grid>

      <Grid item xs={3}>
        <Card className="d-flex flex-column p-3">
          <Typography variant="h6" component="h4" color="text.light">Cargá un activo de forma individual.</Typography>
          <Divider variant="middle" className="mr-0 ml-0 mt-3 mb-2"/>
          <Typography variant="caption" component="h6" color="text.light" className="mb-4">Si necesitás crear solo un activo, podés hacerlo directamente presionando “+”.</Typography>
          <StyledIconButton size="large" className="align-self-center">
            <FontAwesomeIcon icon={faPlus} />
          </StyledIconButton>
        </Card>
      </Grid>
    </Grid>
  );
}

export default CargaArchivo;