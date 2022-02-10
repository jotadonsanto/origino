import React from 'react';
import DragAndDropInputFile from '../../components/common/DragAndDropInputFile';
import { Grid, Stack, Button, Typography, TextField, InputAdornment, FormControlLabel, Checkbox } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/pro-light-svg-icons';

function Transferencia() {
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
        <Typography variant="subtitle1" component="p">Tipo de transferencia</Typography>
        <Typography variant="body2" color="text.primary" component="p">Seleccioná como queres transferir los siguientes activos.</Typography>
        <div className="d-flex align-center">
          <FormControlLabel
            control={<Checkbox checked={true}
            onChange={() => console.log('do something on check')} />}
            label="Titularidad"
            className="mt-1" />
          <FormControlLabel
            control={<Checkbox checked={false}
            onChange={() => console.log('do something on check')} />}
            label="Posesión"
            className="mt-1" />
        </div>
      </Grid>

      <Grid item xs={12} className="mt-3">
        <Typography variant="subtitle1" component="p">Archivos</Typography>
        <Typography variant="body2" color="text.primary" component="p">Cargá los archivos necesarios para completar la baja de activos.</Typography>
        <Grid item xs={3} className="mt-3">
          <DragAndDropInputFile itemToDrag={'los archivos'} color={'#76CC81'} />
        </Grid>
      </Grid>

      <Grid item xs={12} className="mt-4">
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center">
          <Button className="mr-1" variant="contained">CONFIRMAR TRANSFERENCIA</Button>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Transferencia;