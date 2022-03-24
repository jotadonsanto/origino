import React from 'react';
import { Grid, Stack, Button, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faDownload } from '@fortawesome/pro-light-svg-icons';
import ActivosTable from '../../components/activos/ActivosTable';
import AddActivoModal from '../../components/activos/AddActivoModal';
import NewFeatureModal from '../../components/common/NewFeatureModal';
import addActivoImage from '../../assets/images/add_activos.png';

function Activos() {
  // For AddActivoModal
  const [activosUploaded, setActivosUploaded] = React.useState(false);
  const toggleActivosUploaded = (value) => {
    setActivosUploaded(value);
  };

  // For AddActivoModal
  const [addActivoModal, setAddActivoModal] = React.useState(false);
  const closeActivoModal = (value) => {
    setAddActivoModal(false);
  };
  const openActivoModal = () => {
    setAddActivoModal(true);
  };

  // For NewFeatureModal
  const [newFeatureModal, setNewFeatureModal] = React.useState(true);
  const closeNewFeatureModal = (value) => {
    setNewFeatureModal(false);
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
        { activosUploaded ?
          <Grid item xs={12}>
            <ActivosTable />
          </Grid>
          :
          <Grid item xs={12} className="d-flex flex-column align-center justify-center text-center">
            <img  src={addActivoImage} alt="Cargá activos" className="pl-3 pr-3 mb-4 mt-4"/>
            <Typography variant="h4" component="p" color="text.primary" className="mb-2">
              Carga activos
            </Typography>
            <Typography variant="body2" component="p" color="text.primary">
              Para comenzar deberas tener cargados activos.<br/>Sumalos desde <span>“+cargar activos”</span>
            </Typography>
          </Grid>
        }
      </Grid>
      <AddActivoModal open={addActivoModal} closeModal={closeActivoModal} submitActivo={toggleActivosUploaded}/>
      <NewFeatureModal open={newFeatureModal} closeModal={closeNewFeatureModal}/>
    </React.Fragment>
  );
}

export default Activos;