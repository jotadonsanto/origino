import React from 'react';
import {
 Grid,
 Card,
 Button,
 Stepper,
 Step,
 StepButton,
 Divider,
 Stack,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/pro-light-svg-icons';
import { CardResumenInfoGeneral } from '../../components/activos/CardResumenInfoGeneral';
import { CardResumenInfoDetallada } from '../../components/activos/CardResumenInfoDetallada';
import { CardResumenFilter } from '../../components/activos/CardResumenFilter';

// Generate Data
function createDataProductiveSystem(race, amount, maxweight, minweigth) {
 return { race, amount, maxweight, minweigth };
}

const dataProductiveSystem = [
 createDataProductiveSystem('Pastura', 500, 400, 200),
];

function ActivoResumen() {
 // For stepper
 const steps = ['Cargar Archivo', 'Verificación', 'Resumen y confirmación'];
 const [activeStep, setActiveStep] = React.useState(0);
 const [completed] = React.useState({});
 const handleStep = (step) => () => {
  setActiveStep(step);
 };

 return (
  //Starts the route view with <Grid container> and add <Grid item 12> for rows.
  <>
   <Grid container spacing={2}>
    <Grid container className='justify-end'>
     <Button
      variant='outlined'
      startIcon={<FontAwesomeIcon icon={faDownload} />}
     >
      DESCARGAR
     </Button>
    </Grid>

    <Grid item xs={12} className='mt-3'>
     <Stepper nonLinear activeStep={activeStep}>
      {steps.map((label, index) => (
       <Step key={label} completed={completed[index]}>
        <StepButton color='inherit' onClick={handleStep(index)}>
         {label}
        </StepButton>
       </Step>
      ))}
     </Stepper>
     <Divider variant='middle' className='mt-4' />
    </Grid>

    <Grid container className='mt-2' spacing={1}>
     <Grid item xs={6}>
      <Card className='d-flex align-self-center'>
       <CardResumenInfoGeneral data={dataProductiveSystem} />
      </Card>
     </Grid>
     <Grid item xs={6}>
      <Card className='d-flex align-self-center pt-1'>
       <CardResumenFilter />
      </Card>
     </Grid>
    </Grid>
    <Grid container className='mt-2'>
     <Grid className='d-flex align-self-center'>
      <CardResumenInfoDetallada />
     </Grid>
    </Grid>
   </Grid>

   <Stack
    direction='row'
    justifyContent='center'
    alignItems='center'
    className='mt-3'
   >
    <Button variant='outlined'>EDITAR</Button>
    <Button className='ml-3' variant='contained'>
     FINALIZAR
    </Button>
   </Stack>
  </>
 );
}

export default ActivoResumen;
