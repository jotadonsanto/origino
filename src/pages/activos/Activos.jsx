import React from 'react';
import { Grid, Stack, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faDownload } from '@fortawesome/pro-light-svg-icons';
import ActivosTable from '../../components/activos/ActivosTable';
import AddActivoModal from '../../components/activos/AddActivoModal';

function Activos() {
  // For add Activo modal
  const [addActivoModal, setAddActivoModal] = React.useState(false);
  const closeActivoModal = (value) => {
    setAddActivoModal(false);
  };
  const openActivoModal = () => {
    setAddActivoModal(true);
  };
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="stretch"
          >
            <Button className="ml-2" variant="outlined" startIcon={<FontAwesomeIcon icon={faDownload} />}>DESCARGAR</Button>
            <Button onClick={openActivoModal} className="ml-2" variant="contained" startIcon={<FontAwesomeIcon icon={faPlus} />}>CARGAR ACTIVOS</Button>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <ActivosTable />
        </Grid>
      </Grid>
      <AddActivoModal open={addActivoModal} closeModal={closeActivoModal}/>
    </React.Fragment>
  );
}

export default Activos;