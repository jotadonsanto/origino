import React from 'react';
import { Grid, Stack, Button, Breadcrumbs, Link, Typography, Stepper, Step, StepButton, Divider, Card, TextField, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const steps = ['ID de caravana', 'Detalles del activo', 'Datos genealogicos', 'Fotos y videos'];

function CargaActivos() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed] = React.useState({});

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    //Starts the route view with <Grid container> and add <Grid item 12> for rows.
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ mb:2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Cadena de suministro
            </Link>
            <Link underline="hover" color="inherit" href="/">
              Empresa
            </Link>
            <Link underline="hover" color="inherit" href="/">
              Establecimiento
            </Link>
            <Typography color="primary">Activos</Typography>
          </Breadcrumbs>
          <Button sx={{ ml: 2 }} variant="outlined">DAR DE BAJA</Button>
        </Stack>
      </Grid>

      <Grid item xs={12} sx={{ mt: 3 }}>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <Divider variant="middle" sx={{ mt:4 }} />
      </Grid>

      <Grid item xs={12} sx={{ mt: 3 }}>
        <Typography variant="subtitle1" component="h3" color="primary">Datos genealogicos</Typography>
        <Typography variant="subtitle2" component="h4" color="text.primary">Campos Optativos</Typography>

        <Grid component={Card} container sx={{ p:2, mt:2, mb: 2, alignItems: 'center' }}>
          <Grid item xs={12} sx={{ mb:2 }}>
            <Typography variant="subtitle1" component="h3" color="secondary">
              Podés completar tus datos genealógicos consultando la base de datos de la Sociedad Rural Argentina
            </Typography>
          </Grid>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-end"
            sx={{ width: '100%' }}>
            <TextField sx={{ flex: 1, mr: 2 }} id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField sx={{ flex: 1, mr: 2 }} id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField sx={{ flex: 1, mr: 2 }} id="outlined-basic" label="Outlined" variant="outlined" />
            <Button variant="outlined">BUSCAR</Button>
          </Stack>
        </Grid>
      </Grid>

      {/* Accordions */}
      <Grid item xs={12} sx={{ mt: 1 }}>
        <Accordion sx={{ marginTop: 1 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1" component="h3" color="primary">Genealogia del animal</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              <Grid item sx={{ pr: 2, mb: 2 }} xs={4}>
                <TextField sx={{ width: '100%', mr: 2 }} id="outlined-basic" label="Outlined" variant="outlined" />
              </Grid>
              <Grid item sx={{ pr: 2, mb: 2 }} xs={4}>
                <TextField sx={{ width: '100%', mr: 2 }} id="outlined-basic" label="Outlined" variant="outlined" />
              </Grid>
              <Grid item sx={{ pr: 2, mb: 2 }} xs={4}>
                <TextField sx={{ width: '100%', mr: 2 }} id="outlined-basic" label="Outlined" variant="outlined" />
              </Grid>
              <Grid item sx={{ pr: 2, mb: 2 }} xs={4}>
                <TextField sx={{ width: '100%', mr: 2 }} id="outlined-basic" label="Outlined" variant="outlined" />
              </Grid>
              <Grid item sx={{ pr: 2, mb: 2 }} xs={4}>
                <TextField sx={{ width: '100%', mr: 2 }} id="outlined-basic" label="Outlined" variant="outlined" />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Grid>

      <Grid item xs={12} sx={{ mt: 1 }}>
        <Accordion sx={{ marginTop: 1 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1" component="h3" color="primary">Genealogia de la madre</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              <Grid item sx={{ pr: 2, mb: 2 }} xs={4}>
                <TextField sx={{ width: '100%', mr: 2 }} id="outlined-basic" label="Outlined" variant="outlined" />
              </Grid>
              <Grid item sx={{ pr: 2, mb: 2 }} xs={4}>
                <TextField sx={{ width: '100%', mr: 2 }} id="outlined-basic" label="Outlined" variant="outlined" />
              </Grid>
              <Grid item sx={{ pr: 2, mb: 2 }} xs={4}>
                <TextField sx={{ width: '100%', mr: 2 }} id="outlined-basic" label="Outlined" variant="outlined" />
              </Grid>
              <Grid item sx={{ pr: 2, mb: 2 }} xs={4}>
                <TextField sx={{ width: '100%', mr: 2 }} id="outlined-basic" label="Outlined" variant="outlined" />
              </Grid>
              <Grid item sx={{ pr: 2, mb: 2 }} xs={4}>
                <TextField sx={{ width: '100%', mr: 2 }} id="outlined-basic" label="Outlined" variant="outlined" />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Grid>

      <Grid item xs={12} sx={{ mt: 1 }}>
        <Accordion sx={{ marginTop: 1 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1" component="h3" color="primary">Genealogia del padre</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              <Grid item sx={{ pr: 2, mb: 2 }} xs={4}>
                <TextField sx={{ width: '100%', mr: 2 }} id="outlined-basic" label="Outlined" variant="outlined" />
              </Grid>
              <Grid item sx={{ pr: 2, mb: 2 }} xs={4}>
                <TextField sx={{ width: '100%', mr: 2 }} id="outlined-basic" label="Outlined" variant="outlined" />
              </Grid>
              <Grid item sx={{ pr: 2, mb: 2 }} xs={4}>
                <TextField sx={{ width: '100%', mr: 2 }} id="outlined-basic" label="Outlined" variant="outlined" />
              </Grid>
              <Grid item sx={{ pr: 2, mb: 2 }} xs={4}>
                <TextField sx={{ width: '100%', mr: 2 }} id="outlined-basic" label="Outlined" variant="outlined" />
              </Grid>
              <Grid item sx={{ pr: 2, mb: 2 }} xs={4}>
                <TextField sx={{ width: '100%', mr: 2 }} id="outlined-basic" label="Outlined" variant="outlined" />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Grid>
      
      {/* Save/Submit */}
      <Grid item xs={12} sx={{ mt:4 }}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center">
          <Button sx={{ mr: 1 }} variant="outlined">GUARDAR</Button>
          <Button sx={{ ml: 1 }} variant="contained">CONTINUAR</Button>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default CargaActivos;