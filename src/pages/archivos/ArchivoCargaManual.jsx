import React from 'react';
import clsx from 'clsx';
import { Grid, Stepper, Step, StepButton, Divider, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import TableCell from '../../components/archivos/verificacion/TableCell';

function ArchivoCargaManual() {
  // For Stepper
  const steps = ['Cargar Archivo', 'Verificación', 'Resumen y confirmación'];
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed] = React.useState({});
  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  // For error cell - apply real validation here.
  const hasErrors = (params) => (params.value > 130 ? true : false);
  // Check that the error has been fixed to return true. Now its fake.
  const isFixed = (params) => (params.value === 130 ? true : false);

  // For error popover
  const [errorCell, setErrorCell] = React.useState(null);
  const errorOpen = Boolean(errorCell);
  const showError = (event) => { setErrorCell(event.currentTarget) };
  const closeError = () => { setErrorCell(null);};
  const errorId = errorOpen ? 'error-popover' : undefined;

  // For ApplyAll popover
  const [applyAllCell, setApplyAllCell] = React.useState(null);
  const applyAllOpen = Boolean(applyAllCell);
  const showApplyAll = (event) => { setApplyAllCell(event.currentTarget) };
  const closeApplyAll = () => { setApplyAllCell(null);};
  const applyAllId = applyAllOpen ? 'apply-all-popover' : undefined;

  const rows = [
    {
      id: 1,
      fecha: '',
      id_caravana: 1,
      especie: '',
      marca_fuego: '',
      raza: '',
      categoria: '',
      denticion: 0,
      sistema_productivo: '',
      lote: '',
      peso: '',
    },
    {
      id: 0,
      fecha: '',
      id_caravana: 2,
      especie: '',
      marca_fuego: '',
      raza: '',
      categoria: '',
      denticion: 0,
      sistema_productivo: '',
      lote: '',
      peso: '',
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
    { field: 'peso', headerName: 'Peso (KG)', flex: 1, editable: true, align: 'center', headerAlign: 'center',
      cellClassName: (params) => clsx({'pl-0 pr-0 overflow-visible': hasErrors(params) || isFixed(params)}),
      renderCell:(params) => {
        return <TableCell
          hasErrors={hasErrors} isFixed={isFixed} params={params}
          showError={showError} errorId={errorId}
          errorOpen={errorOpen} errorCell={errorCell}
          closeError={closeError} applyAllId={applyAllId}
          applyAllOpen={applyAllOpen} applyAllCell={applyAllCell}
          closeApplyAll={closeApplyAll} />
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
          autoHeight
          onCellEditCommit={(params, event, details) => {
            console.log(params, event, details);
            showApplyAll(event);
          }} />
      </Grid>
      <Grid item xs={12} className="d-flex justify-center">
        <Button variant="contained" disabled>Continuar</Button>
      </Grid>
    </Grid>
  );
}

export default ArchivoCargaManual;