import React from 'react';
import { Grid, Button, FormControl, InputLabel, Select, MenuItem, Dialog, DialogTitle, DialogContent, Stepper, Step, StepButton, Typography, Divider } from '@mui/material';

function AddActivoModal({ open, closeModal, submitActivo }) {
  // For Stepper
  const steps = ['Cargar Archivo', 'Verificación', 'Resumen y confirmación'];
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed] = React.useState({});
  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  // For Selects
  const [selectedLote, setSelectedFilter] = React.useState('');
  const changeLote = (event) => {
    setSelectedFilter(event.target.value);
  };

  // For Submit Button
  const handleSubmitActivo = () => {
    submitActivo(true);
    closeModal();
  }

  return (
  <Dialog
    onClose={closeModal}
    open={open}
    maxWidth={'lg'}
    fullWidth={true}>
    <DialogTitle>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </DialogTitle>
    <DialogContent className="d-flex flex-column align-center pt-2">
      <Grid container>
        {/* Iterar esta fila */}
        <Grid item xs={12} className="pl-2 pr-2">
          <Typography variant='subtitle2' component='p' color='text.primary'>
            Activos
          </Typography>
        </Grid>
        <Grid item xs={6} className="p-2">
          <FormControl fullWidth>
            <InputLabel id="test">Lote</InputLabel>
            <Select
              labelId="test"
              value={selectedLote}
              label="Filtro"
              onChange={changeLote}
            >
              <MenuItem value={10}>Lote 1</MenuItem>
              <MenuItem value={20}>Lote 2</MenuItem>
              <MenuItem value={30}>Lote 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} className="p-2">
          <FormControl fullWidth>
            <InputLabel id="test">Lote</InputLabel>
            <Select
              labelId="test"
              value={selectedLote}
              label="Filtro"
              onChange={changeLote}
            >
              <MenuItem value={10}>Lote 1</MenuItem>
              <MenuItem value={20}>Lote 2</MenuItem>
              <MenuItem value={30}>Lote 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Divider className="mt-0 mb-0" />
        {/* Iterar esta fila */}


        {/* Iterar esta fila */}
        <Grid item xs={12} className="pl-2 pr-2">
          <Typography variant='subtitle2' component='p' color='text.primary'>
            Activos
          </Typography>
        </Grid>
        <Grid item xs={6} className="p-2">
          <FormControl fullWidth>
            <InputLabel id="test">Lote</InputLabel>
            <Select
              labelId="test"
              value={selectedLote}
              label="Filtro"
              onChange={changeLote}
            >
              <MenuItem value={10}>Lote 1</MenuItem>
              <MenuItem value={20}>Lote 2</MenuItem>
              <MenuItem value={30}>Lote 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} className="p-2">
          <FormControl fullWidth>
            <InputLabel id="test">Lote</InputLabel>
            <Select
              labelId="test"
              value={selectedLote}
              label="Filtro"
              onChange={changeLote}
            >
              <MenuItem value={10}>Lote 1</MenuItem>
              <MenuItem value={20}>Lote 2</MenuItem>
              <MenuItem value={30}>Lote 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Divider className="mt-0 mb-0" />
        {/* Iterar esta fila */}
        <Grid item xs={12} className="d-flex justify-center mt-4">
          <Button className="mr-2" variant="outlined" onClick={closeModal} color="error">Cancelar</Button>
          <Button className="ml-2" variant="contained" onClick={handleSubmitActivo}>Aceptar</Button>
        </Grid>
      </Grid>
    </DialogContent>
  </Dialog>
  );
}

export default AddActivoModal;