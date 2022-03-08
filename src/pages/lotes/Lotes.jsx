import React from 'react';
import { Grid, Button, Box } from '@mui/material';
import Filter from '../../components/common/Filter';
import LotesTable from '../../components/lotes/LotesTable';

function Lotes() {

  return (
    <Box>
      <Filter />
      <Grid sx={{ display: 'flex', justifyContent: 'end' }}>
        <Button variant='contained'>AGREGAR NUEVO LOTE</Button>
      </Grid>
      <LotesTable />
    </Box>
  );
}

export default Lotes;
