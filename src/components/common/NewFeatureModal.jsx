import React from 'react';
import { Grid, Button, Dialog, DialogTitle, DialogContent, DialogContentText, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Carousel from 'react-material-ui-carousel';
import originoLogo from'./../../assets/images/origino_logo.png';

const slides = [
  {
    key: 1,
    title: 'Cargá tu empresa para poder operar'
  },
  {
    key: 2,
    title: 'Cargá tu poder para empresa operar'
  },
  {
    key: 3,
    title: 'Cargá tu operar para poder empresa'
  },
]

function NewFeatureModal({ open, closeModal }) {
  return (
    <Dialog
      onClose={closeModal}
      open={open}
      fullWidth="true">
      <IconButton
        aria-label="close"
        onClick={closeModal}
        sx={{
          position: 'absolute',
          right: '8px',
          top: '8px',
        }}>
        <CloseIcon />
      </IconButton>
      <Carousel
        autoPlay={false}
        navButtonsAlwaysInvisible={true}
        animation="slide">
        {slides.map((item, key) => (
          <React.Fragment>
            <DialogTitle className="text-center">
              <Grid container justifyContent="center">
                <Grid item xs={6}>
                  <img  src={originoLogo} alt="Origino" className="w-100 mb-4 mt-4"/>
                  <span>{item.title}</span>
                </Grid>
              </Grid>
            </DialogTitle>
            <DialogContent className="d-flex flex-column align-center mb-4 pb-4">
              <Grid container>
                <Grid item xs={12} className="text-center">
                  <DialogContentText id="alert-dialog-description">
                  Deberás cargar una empresa<br/>para poder operar tus activos
                  </DialogContentText>
                </Grid>
                <Grid item xs={12} className="d-flex justify-center mt-4">
                  <Button variant="contained">Crear Empresa</Button>
                </Grid>
              </Grid>
            </DialogContent>
          </React.Fragment>
        ))}
      </Carousel>
    </Dialog>
  );
}

export default NewFeatureModal;