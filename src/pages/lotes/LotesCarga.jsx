import React, { useState } from 'react';
import { Box, Typography, Step, Stepper, Grid, StepButton, Button, TextField, Divider, FormControl, OutlinedInput, MenuItem, Chip, RadioGroup, FormControlLabel, Checkbox, Radio, InputAdornment } from '@mui/material';
import { StyledFormHelperText } from './LotesCarga.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/pro-light-svg-icons';
import ExpandableFilters from '../../components/common/ExpandableFilters';
import { StyledSlider } from '../../components/activos/ActivosTable.styles';

const filtroOption = [
  {
    value: '1',
    label: 'opción 1',
  },
  {
    value: '2',
    label: 'opción 2',
  },
  {
    value: '3',
    label: 'opción 3',
  },
];

function LotesCarga() {
  // para el stepper
  const steps = ['Cargar Lote', 'Detalle', 'Resumen y confirmación'];
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed] = React.useState({});
  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  // boton state
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const validar = () => {
    return nombre.length > 0 && descripcion.length > 0;
  };

 // Filtro
  const [selectedFilter, setSelectedFilter] = React.useState('');
  const handleChange = (event) => {
    setSelectedFilter(event.target.value);
  };
  const [filtro, setFiltro] = React.useState('');
  const handleChangeFiltro = (event) => {
    setFiltro(event.target.value);
  };

  const topPart = () => {
    return (
      <React.Fragment>
        <Grid
          item
          component={FormControl}
          xs={12}
          xl={3}
        >
          <TextField
            id="filled-search"
            label="Buscar por nombre"
            fullWidth
            type="search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FontAwesomeIcon icon={faSearch} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid
          item
          component={FormControl}
          xs={12}
          xl={3}
          className='pl-2'
        >
          <TextField
            id="outlined-select-currency"
            select
            label="Filtro"
            value={filtro}
            onChange={handleChangeFiltro}
            fullWidth
          >
            {filtroOption.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid
          item
          component={FormControl}
          xs={12}
          xl={3}
          className='pl-2'
        >
          <TextField
            id="outlined-select-currency"
            select
            label="Filtro"
            value={filtro}
            onChange={handleChangeFiltro}
            fullWidth
          >
            {filtroOption.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </React.Fragment>
    );
  };
  const expandablePart = () => {
    return (
      <span>
        <Grid
          item
          component={FormControl}
          className="pr-2 mt-3 align-center"
          xs={12}
          xl={12}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={true}
                onChange={() => console.log('do something on check')}
              />
            }
            label="Checkbox"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={false}
                onChange={() => console.log('do something on check')}
              />
            }
            label="Checkbox"
          />

          <RadioGroup row defaultValue="b" name="radio-buttons-group">
            <FormControlLabel value="a" control={<Radio />} label="Radio 1" />
            <FormControlLabel value="b" control={<Radio />} label="Radio 2" />
          </RadioGroup>
        </Grid>
        <Grid
          item
          component={FormControl}
          className="pr-2 mt-3 align-center"
          xs={12}
          xl={6}
        >
          <StyledSlider defaultValue={30} aria-label="Disabled slider" />
        </Grid>
      </span>
    );
  };
  const bottomPart = () => {
    return (
      <Grid item xs={12} className="mt-2">
        <Chip
          label="Filter applied"
          color="secondary"
          className="mr-1"
          onDelete={() => {
            console.log('on Delete');
          }}
        />
        <Chip
          label="Filter applied"
          color="secondary"
          className="mr-1"
          onDelete={() => {
            console.log('on Delete');
          }}
        />
        <Chip
          label="Filter applied"
          color="secondary"
          className="mr-1"
          onDelete={() => {
            console.log('on Delete');
          }}
        />
      </Grid>
    );
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} className="mt-3">
          <Stepper nonLinear activeStep={1}>
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton color="inherit" onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
        </Grid>
      </Grid>
      <Grid className="pt-3 pb-3 d-flex justify-end" >
        <Button className="ml-2" variant="outlined">
          GUARDAR
        </Button>
        <Button className="ml-2" variant="outlined" color="error">
          DAR DE BAJA
        </Button>
      </Grid>
      <Grid container className="pl-1">
        <Grid container>
          <Grid container spacing={2}>
            <Grid item xs='auto'>
              <StyledFormHelperText id="nombre-lote-helper-text">
                Nombre Lote
              </StyledFormHelperText>
              <OutlinedInput
                id="nombre-lote"
                fullWidth
                placeholder="Nombre"
                onChange={(e) => setNombre(e.target.value)}
                defaultValue={nombre}
              />
            </Grid>
            <Grid item xs={8}>
              <StyledFormHelperText id="nombre-lote-helper-text">
                Descripción
              </StyledFormHelperText>
              <OutlinedInput
                id="descripcion-lote"
                fullWidth
                placeholder="Descripción"
                onChange={(e) => setDescripcion(e.target.value)}
                defaultValue={descripcion}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider variant="middle" className="mt-4" />
      <Typography className="mt-4 ml-1 font-weight-normal">
        Filtrar activos para cargar
      </Typography>
      <ExpandableFilters
        className="ml-1"
        TopPart={topPart}
        ExpandablePart={expandablePart}
        BottomPart={bottomPart}
      />
      <Box className='d-flex justify-center'>
        <Button variant="contained" disabled={!validar()}>
          SIGUIENTE
        </Button>
      </Box>
    </>
  );
}

export default LotesCarga;
