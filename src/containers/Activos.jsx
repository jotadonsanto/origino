import React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import AddIcon from '@mui/icons-material/Add';
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
          <Button sx={{ ml: 2 }} variant="outlined" startIcon={<DownloadIcon />}>DESCARGAR</Button>
          <Button sx={{ ml: 2 }} variant="contained" startIcon={<AddIcon />}>CARGAR ACTIVOS</Button>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <ActivosTable />
      </Grid>
    </Grid>
  );
}

export default Activos;