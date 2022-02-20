import React from 'react';
import DragAndDropInputFile from '../../components/common/DragAndDropInputFile';
import { Grid, Stack, Button, Typography, TextField, InputAdornment, Card, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilePdf, faTrashCan, faTag } from '@fortawesome/pro-light-svg-icons';
import { StyledImageSeparator } from './TransferenciaABox.styles';

function TransferenciaABox() {
  // For Modal
  const [dialogOpen, setdialogOpen] = React.useState(false);
  const handleClose = (value) => {
    setdialogOpen(false);
  };
  const handleClickOpen = () => {
    setdialogOpen(true);
  };

  return (
    //Starts the route view with <Grid container> and add <Grid item 12> for rows.
    <Grid container spacing={2}>
      <Grid item xs={4} className="mt-3">
        <Typography variant="subtitle1" component="p">Complete el código RENSPA o ALIAS de Orgino</Typography>
        <div className="d-flex align-center mt-2">
          <TextField
            id="filled-search"
            type="search"
            className="mr-2"
            fullWidth
            InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FontAwesomeIcon icon={faSearch} />
              </InputAdornment>
            ),
          }}/>
          <Button variant="contained">VALIDAR</Button>
        </div>
      </Grid>

      <Grid item xs={12} className="mt-3">
        <Grid component={Card} container>
          <Grid item xs={5} className="p-4">
            <Grid container>
              <Grid item xs={4}>
                <Typography variant="body1" component="p" color="text.primary" className="mb-2">CUIG</Typography>
                <Typography variant="body1" component="p" color="text.primary" className="mb-2">Titular</Typography>
                <Typography variant="body1" component="p" color="text.primary" className="mb-2">CUIT</Typography>
                <Typography variant="body1" component="p" color="text.primary">RENSPA</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body1" component="p" className="mb-2">PS144 CV 273</Typography>
                <Typography variant="body1" component="p" className="mb-2">LOPEZ GUILLERMO</Typography>
                <Typography variant="body1" component="p" className="mb-2">29-23242923-9</Typography>
                <Typography variant="body1" component="p">01.81230.1237123</Typography>
              </Grid>
            </Grid>
          </Grid>
          <StyledImageSeparator item xs={2} className="p-0" />
          <Grid item xs={5} className="p-4">
            <Grid container>
              <Grid item xs={4}>
                <Typography variant="body1" component="p" color="text.primary" className="mb-2">Box</Typography>
                <Typography variant="body1" component="p" color="text.primary" className="mb-2">Partido</Typography>
                <Typography variant="body1" component="p" color="text.primary" className="mb-2">Email</Typography>
                <Typography variant="body1" component="p" color="text.primary">Teléfono</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body1" component="p" className="mb-2">Las Marias</Typography>
                <Typography variant="body1" component="p" className="mb-2">Villa Villa, Villa Villa</Typography>
                <Typography variant="body1" component="p" className="mb-2">email@domain.com</Typography>
                <Typography variant="body1" component="p">(820) 865 - 8239</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} className="mt-3">
        <Typography variant="subtitle1" component="p">Archivos</Typography>
        <Typography variant="body2" color="text.primary" component="p">Cargá los archivos necesarios para completar la baja de activos.</Typography>
        <Grid item xs={3} className="mt-3 d-flex justify-between" component={Card}>
          <div className="d-flex align-start mt-2 ml-2 mb-2">
            <FontAwesomeIcon icon={faFilePdf} color="#61B15A" size="lg" className="mr-2 mt-1" />
            <Typography variant="caption" component="p">ACTIVOS<br/>PDF - 1.2mb</Typography>
          </div>
          <FontAwesomeIcon icon={faTrashCan} size="lg" className="mr-1 mt-1" />
        </Grid>
        <Grid item xs={3} className="mt-3">
          <DragAndDropInputFile itemToDrag={'los archivos'} color={'#76CC81'} />
        </Grid>
      </Grid>

      <Grid item xs={12} className="mt-4">
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center">
          <Button className="mr-1" variant="contained" onClick={handleClickOpen}>CONFIRMAR TRANSFERENCIA</Button>
        </Stack>
      </Grid>

      <Dialog onClose={handleClose} open={dialogOpen}>
        <DialogTitle className="d-flex flex-column align-center text-center mr-4 ml-4">
          <FontAwesomeIcon icon={faTag} color="#61B15A" size="lg" className="mb-1 mt-2"/>
          Ingresá un nombre para<br/>agendar este box
        </DialogTitle>
        <DialogContent className="d-flex flex-column align-center">
          <TextField id="name" fullWidth />
          <Button className="mt-2 m-2" variant="contained" onClick={handleClose}>Agendar</Button>
        </DialogContent>
      </Dialog>
    </Grid>
  );
}

export default TransferenciaABox;