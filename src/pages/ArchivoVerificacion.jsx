import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { Grid, Stepper, Step, StepButton, Divider, Button, Checkbox, FormControlLabel, Popover, Card, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
// This is only for test purposes, delete when fetching real data
import { randomCreatedDate, randomTraderName } from '@mui/x-data-grid-generator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/pro-light-svg-icons';

const steps = ['Cargar Archivo', 'Verificación', 'Resumen y confirmación'];
const StyledCellwithError = styled.div`
  width: 100%;
  height: 97%;
  border: 1px solid #FF0505;
  color: #FF0505;
  background: #FBDFDF;
`

function ArchivoVerificacion() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed] = React.useState({});
  const handleStep = (step) => () => {
    setActiveStep(step);
  };


  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => { setAnchorEl(event.currentTarget);};
  const handleClose = () => { setAnchorEl(null);};
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

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
      peso: 130,
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
      peso: 131,
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
      peso: 132,
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
      peso: 133,
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
      peso: 130,
    },
  ];
  const columns = [
    { field: 'fecha', headerName: 'Fecha', type: 'date', flex: 1, editable: true, align: 'center', headerAlign: 'center' },
    { field: 'id_caravana', headerName: 'ID de Caravana', flex: 1,  type: 'number', editable: true, align: 'center', headerAlign: 'center' },
    { field: 'especie', headerName: 'Especie', flex: 1, editable: true, align: 'center', headerAlign: 'center' },
    { field: 'marca_fuego', headerName: 'Marca de Fuego', flex: 1, editable: true, align: 'center', headerAlign: 'center' },
    { field: 'raza', headerName: 'Raza', flex: 1, editable: true, align: 'center', headerAlign: 'center' },
    { field: 'categoria', headerName: 'Categoria', flex: 1, editable: true, align: 'center', headerAlign: 'center' },
    { field: 'denticion', headerName: 'Dentición', type: 'number', flex: 1, editable: true, align: 'center', headerAlign: 'center' },
    { field: 'sistema_productivo', headerName: 'Sistema productivo', type: 'singleSelect', valueOptions: ['Pastura', 'Otros', 'Otros 2'], flex: 1, editable: true, align: 'center', headerAlign: 'center' },
    { field: 'lote', headerName: 'Lote', type: 'number', flex: 1, editable: true, align: 'center', headerAlign: 'center' },
    {
      field: 'peso',
      headerName: 'Peso (KG)',
      flex: 1,
      editable: true,
      align: 'center',
      headerAlign: 'center',
      cellClassName: (params) =>
      clsx({'pl-0 pr-0': params.value > 132}),
      renderCell:(params) => {
        return <React.Fragment>
          {params.value > 132 ?
          <StyledCellwithError
          onClick={handleClick}>{params.value}</StyledCellwithError>
          : <span>{params.value}</span>
          }
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'center',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'center',
              horizontal: 'right',
            }}>
            <Card className="p-2 d-flex flex-column">
              <FontAwesomeIcon icon={faInfoCircle} className="mb-1"/>
              <Typography variant="body2" component="p">
                El peso no puede ser mayor a 900 KG
              </Typography>
              <Button variant="text" className="align-self-end" onClick={handleClose}>Entendido</Button>
            </Card>
          </Popover>
        </React.Fragment>
      }},
  ];

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
      <Grid item xs={12}>
        <Button variant="contained" disabled>Continuar</Button>
      </Grid>
    </Grid>
  );
}

export default ArchivoVerificacion;