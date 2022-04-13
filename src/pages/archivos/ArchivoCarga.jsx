import React from 'react';
import { StyledIconButton } from './ArchivoCarga.styles';
import DragAndDropInputFile from '../../components/common/DragAndDropInputFile';
import { Grid, Card, Button, Typography, Stepper, Step, StepButton, Divider, Popover } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPlus, faInfoCircle } from '@fortawesome/pro-light-svg-icons';

function ArchivoCarga() {
  // For stepper
  const steps = ['Cargar Archivo', 'Verificación', 'Resumen y confirmación'];
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed] = React.useState({});
  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  // For file tooltip
  const [newFileTooltip, setNewFileTooltip] = React.useState(null);
  const newFileTooltipOpen = Boolean(newFileTooltip);
  const showNewFileTooltip = (event) => { setNewFileTooltip(event.currentTarget) };
  const closeNewFileTooltip = () => { setNewFileTooltip(null);};
  const NewFileTooltipId = newFileTooltipOpen ? 'new-file-popover' : undefined;


  return (
   //Starts the route view with <Grid container> and add <Grid item 12> for rows.
   <Grid container spacing={2}>
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

    <Grid item xs={12} className='mt-3'>
     <span className='d-flex flex-row align-center mb-2'>
      <Typography variant='body2' component='h3' color='text.primary'>
       Si no tenes el excel, podes descargalo aca:
      </Typography>
      <FontAwesomeIcon
       icon={faInfoCircle}
       className='ml-1'
       color='#61B15A'
       onClick={showNewFileTooltip}
      />
      <Popover
       id={NewFileTooltipId}
       open={newFileTooltip}
       anchorEl={newFileTooltip}
       onClose={closeNewFileTooltip}
       anchorOrigin={{
        vertical: 'center',
        horizontal: 'right',
       }}
       transformOrigin={{
        vertical: 'center',
        horizontal: 'left',
       }}
      >
       <Card className='p-2 d-flex flex-column'>
        <FontAwesomeIcon icon={faInfoCircle} className='mb-1' color='#61B15A' />
        <Typography variant='body2' component='p'>
         Esta disponible un nuevo excel para descargar
        </Typography>
        <div className='d-flex mt-2 justify-end'>
         <Button variant='outlined' onClick={closeNewFileTooltip}>
          Entendido
         </Button>
        </div>
       </Card>
      </Popover>
     </span>
     <Button
      variant='contained'
      startIcon={<FontAwesomeIcon icon={faDownload} />}
     >
      DESCARGAR
     </Button>
    </Grid>

    <Grid item xs={12} className='mt-3'>
     <Typography
      variant='body2'
      component='h3'
      color='text.light'
      className='d-flex mb-2'
     >
      El formato permitido para la carga de archivos es
      <Typography variant='body2' component='h3' color='primary'>
       &nbsp;.xlsx
      </Typography>
     </Typography>
    </Grid>

    <Grid item xs={6} xl={3} className='d-flex'>
     <Card className='d-flex flex-column flex p-3'>
      <Typography variant='h6' component='h4' color='text.light'>
       Subí tu excel
       <br />
       precargado
      </Typography>
      <Divider variant='middle' className='mr-0 ml-0 mt-2 mb-2' />
      <Typography
       variant='caption'
       component='h6'
       color='text.light'
       className='mb-2'
      >
       Si ya tenés el archivo completo, cargalo directamente.
      </Typography>
      <DragAndDropInputFile color={'#438C3D'} />
     </Card>
    </Grid>

    <Grid item xs={6} xl={3} className='d-flex'>
     <Card className='d-flex flex-column flex p-3'>
      <Typography variant='h6' component='h4' color='text.light'>
       Subí las
       <br />
       caravanas
      </Typography>
      <Divider variant='middle' className='mr-0 ml-0 mt-2 mb-2' />
      <Typography
       variant='caption'
       component='h6'
       color='text.light'
       className='mb-2'
      >
       Si necesitás crear solo un activo, podés hacerlo directamente presionando
       “+”.
      </Typography>
      <StyledIconButton size='large' className='align-self-center'>
       <FontAwesomeIcon icon={faPlus} />
      </StyledIconButton>
     </Card>
    </Grid>

    <Grid item xs={6} xl={3} className='d-flex'>
     <Card className='d-flex flex-column flex p-3'>
      <Typography variant='h6' component='h4' color='text.light'>
       Creá una plantilla
       <br />
       nueva
      </Typography>
      <Divider variant='middle' className='mr-0 ml-0 mt-2 mb-2' />
      <Typography
       variant='caption'
       component='h6'
       color='text.light'
       className='mb-2'
      >
       Si ya tenés el archivo completo, cargalo
       <br />
       directamente.
      </Typography>
      <StyledIconButton size='large' className='align-self-center'>
       <FontAwesomeIcon icon={faPlus} />
      </StyledIconButton>
     </Card>
    </Grid>

    <Grid item xs={6} xl={3} className='d-flex'>
     <Card className='d-flex flex-column flex p-3'>
      <Typography variant='h6' component='h4' color='text.light'>
       Cargá un activo de
       <br />
       forma individual.
      </Typography>
      <Divider variant='middle' className='mr-0 ml-0 mt-2 mb-2' />
      <Typography
       variant='caption'
       component='h6'
       color='text.light'
       className='mb-2'
      >
       Si necesitás crear solo un activo, podés hacerlo directamente presionando
       “+”.
      </Typography>
      <StyledIconButton size='large' className='align-self-center'>
       <FontAwesomeIcon icon={faPlus} />
      </StyledIconButton>
     </Card>
    </Grid>
   </Grid>
  );
}

export default ArchivoCarga;