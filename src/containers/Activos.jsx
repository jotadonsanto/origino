import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import AddIcon from '@mui/icons-material/Add';
import ActivosTable from '../components/Activos/ActivosTable';

function Activos() {
  return (
    <Container sx={{ p: 2 }}>
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
    </Container>
  );
}

export default Activos;