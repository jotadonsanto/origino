import React from 'react';
import { Grid, Stepper, Step, StepButton, Divider, Button, Checkbox, FormControlLabel } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { randomCreatedDate, randomTraderName } from '@mui/x-data-grid-generator';

const steps = ['Cargar Archivo', 'Verificación', 'Resumen y confirmación'];

const columns = [
  { field: 'fecha', headerName: 'Fecha', type: 'date', flex: 1, editable: true },
  { field: 'id_caravana', headerName: 'ID de Caravana', flex: 1,  type: 'number', editable: true },
  { field: 'especie', headerName: 'Especie', flex: 1, editable: true },
  { field: 'marca_fuego', headerName: 'Marca de Fuego', flex: 1, editable: true },
  { field: 'raza', headerName: 'Raza', flex: 1, editable: true },
  { field: 'categoria', headerName: 'Categoria', flex: 1, editable: true },
  { field: 'denticion', headerName: 'Dentición', type: 'number', flex: 1, editable: true },
  { field: 'sistema_productivo', headerName: 'Sistema productivo', type: 'singleSelect', valueOptions: ['Pastura', 'Otros', 'Otros 2'], flex: 1, editable: true },
  { field: 'lote', headerName: 'Lote', type: 'number', flex: 1, editable: true },
  { field: 'peso', headerName: 'Peso (KG)', flex: 1, editable: true },
];

const rows = [
  {
    id: 1,
    fecha: randomCreatedDate(),
    id_caravana: 1,
    especie: randomTraderName(),
    marca_fuego: randomTraderName(),
    raza: randomTraderName(),
    categoria: randomTraderName(),
    denticion: 6,
    sistema_productivo: 'Pastura',
    lote: 124,
    peso: 125,
  },
  {
    id: 2,
    fecha: randomCreatedDate(),
    id_caravana: 1,
    especie: randomTraderName(),
    marca_fuego: randomTraderName(),
    raza: randomTraderName(),
    categoria: randomTraderName(),
    denticion: 6,
    sistema_productivo: 'Pastura',
    lote: 124,
    peso: 125,
  },
  {
    id: 3,
    fecha: randomCreatedDate(),
    id_caravana: 1,
    especie: randomTraderName(),
    marca_fuego: randomTraderName(),
    raza: randomTraderName(),
    categoria: randomTraderName(),
    denticion: 6,
    sistema_productivo: 'Pastura',
    lote: 124,
    peso: 125,
  },
  {
    id: 4,
    fecha: randomCreatedDate(),
    id_caravana: 1,
    especie: randomTraderName(),
    marca_fuego: randomTraderName(),
    raza: randomTraderName(),
    categoria: randomTraderName(),
    denticion: 6,
    sistema_productivo: 'Pastura',
    lote: 124,
    peso: 125,
  },
  {
    id: 5,
    fecha: randomCreatedDate(),
    id_caravana: 1,
    especie: randomTraderName(),
    marca_fuego: randomTraderName(),
    raza: randomTraderName(),
    categoria: randomTraderName(),
    denticion: 6,
    sistema_productivo: 'Pastura',
    lote: 124,
    peso: 125,
  },
];

function ArchivoVerificacion() {
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
      <Grid item xs={12} className="d-flex justify-between">
        <span>
          <FormControlLabel control={<Checkbox checked={true} onChange={() => console.log('do something on check')} />} label="Ver solo filas con errores" />
        </span>
        <Button className="ml-2" variant="outlined">SELECCIONAR COLUMNAS</Button>
      </Grid>
      <Grid item xs={12}>
        <DataGrid
        rows={rows}
        columns={columns}
        hideFooterSelectedRowCount 
        pFiltroSize={5}
        rowsPerPFiltroOptions={[5]}
        disableColumnFilter
        disableColumnMenu
        disableSelectionOnClick
        autoHeight />
      </Grid>
    </Grid>
  );
}

export default ArchivoVerificacion;