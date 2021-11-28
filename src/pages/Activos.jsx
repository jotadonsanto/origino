import React from 'react';
import { Grid, Stack, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faDownload } from '@fortawesome/pro-light-svg-icons';
import ActivosTable from '../components/Activos/ActivosTable';

function Activos() {
  return (
    //Starts the route view with <Grid container> and add <Grid item 12> for rows.
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="stretch"
        >
          <Button sx={{ ml: 2 }} variant="outlined" startIcon={<FontAwesomeIcon icon={faDownload} />}>DESCARGAR</Button>
          <Button sx={{ ml: 2 }} variant="contained" startIcon={<FontAwesomeIcon icon={faPlus} />}>CARGAR ACTIVOS</Button>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <ActivosTable />
      </Grid>
    </Grid>
  );
}

export default Activos;