import React from 'react';
import { Grid, Menu, MenuItem, Stepper, Step, StepButton, Divider, Button, IconButton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/pro-light-svg-icons';
import ErrorCell from './../../components/archivos/verificacion/ErrorCell';

function ArchivoCargaManual() {
  // For Stepper
  const steps = ['Cargar Archivo', 'Verificación', 'Resumen y confirmación'];
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed] = React.useState({});
  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  // For table dropdown
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const rows = [
    {
      id: 1,
      fecha: 'Esto deberia ser una fecha',
      id_caravana: 'Testingggg',
      denticion: 'Test',
    },
    {
      id: 0,
      fecha: 'Esto deberia ser una fecha',
      id_caravana: 'Testingggg',
      denticion: 'Test',
    },
  ];
  const columns = [
    { field: 'fecha', headerName: 'Fecha', type: 'date', flex: 1, editable: true, align: 'center', headerAlign: 'center', sortable: false,
      renderHeader: (params) => {
        return (
          <React.Fragment>
            { params.colDef.headerName }
            <IconButton
              size="small"
              className="ml-4"
              id="basic-button"
              aria-controls="basic-menu"
              aria-label="Expand"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}>
              <FontAwesomeIcon icon={faChevronDown} />
            </IconButton>
          </React.Fragment>
        )
      },
      renderCell:(params) => {
        return <ErrorCell params={params} />
      },
    },
    { field: 'id_caravana', headerName: 'ID de Caravana', flex: 1,  type: 'number', editable: true, align: 'center', headerAlign: 'center', sortable: false,
      renderHeader: (params) => {
        return (
          <React.Fragment>
            { params.colDef.headerName }
            <IconButton
              size="small"
              className="ml-4"
              id="basic-button"
              aria-controls="basic-menu"
              aria-label="Expand"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}>
              <FontAwesomeIcon icon={faChevronDown} />
            </IconButton>
          </React.Fragment>
        )
      },
      renderCell:(params) => {
        return <ErrorCell params={params} />
      },
    },
    { field: 'denticion', headerName: 'Dentición', type: 'number', flex: 1, editable: true, align: 'center', headerAlign: 'center', sortable: false,
    renderHeader: (params) => {
      console.log(params);
      return (
        <React.Fragment>
          { params.colDef.headerName }
          <IconButton
            size="small"
            className="ml-4"
            id="basic-button"
            aria-controls="basic-menu"
            aria-label="Expand"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>
            <FontAwesomeIcon icon={faChevronDown} />
          </IconButton>
        </React.Fragment>
      )
    },
    renderCell:(params) => {
      return <ErrorCell params={params} />
    },
  },
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
          autoHeight/>
          <Menu
            id="data-grid-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Select</MenuItem>
            <MenuItem onClick={handleClose}>The Correct</MenuItem>
            <MenuItem onClick={handleClose}>Category</MenuItem>
          </Menu>
      </Grid>
      <Grid item xs={12} className="d-flex justify-center">
        <Button variant="contained" disabled>Continuar</Button>
      </Grid>
    </Grid>
  );
}

export default ArchivoCargaManual;