import React, { useState } from 'react';
import DragAndDropInputFile from '../../components/common/DragAndDropInputFile';
import {
 Grid,
 Stack,
 Button,
 Typography,
 TextField,
 InputAdornment,
 Card,
 Dialog,
 DialogTitle,
 DialogContent,
 Box,
 FormControl,
 InputLabel,
 Select,
 MenuItem,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
 faSearch,
 faFilePdf,
 faTrashCan,
 faTag,
} from '@fortawesome/pro-light-svg-icons';

function ActivosBaja() {
 // For Modal
 const [dialogOpen, setdialogOpen] = React.useState(false);
 const handleClose = (value) => {
  setdialogOpen(false);
 };
 const handleClickOpen = () => {
  setdialogOpen(true);
 };

 const [reason, setreason] = useState('');

 const handleChange = (event) => {
  setreason(event.target.value);
 };

 return (
  //Starts the route view with <Grid container> and add <Grid item 12> for rows.
  <Grid container>
   <Grid item xs={12} className='mt-3'>
    <Typography variant='subtitle1' component='p'>
     activos seleccionados
    </Typography>
    <Grid item xs={3} className='mt-3 d-flex'>
     <FormControl fullWidth>
      <InputLabel id='demo-simple-select-label'>
       Seleccioná el motivo de baja
      </InputLabel>
      <Select
       labelId='demo-simple-select-label'
       id='demo-simple-select'
       value={reason}
       label='Seleccioná el motivo de baja'
       onChange={handleChange}
      >
       <MenuItem value='Opción 1'>Opción 1</MenuItem>
       <MenuItem value='Opción 2'>Opción 2</MenuItem>
       <MenuItem value='Opción 3'>Opción 3</MenuItem>
      </Select>
     </FormControl>
    </Grid>
    <Grid item xs={12} className='mt-3'>
     <DragAndDropInputFile itemToDrag={'los archivos'} color={'#76CC81'} />
    </Grid>
    <Grid container>
     <Grid item xs={3} className='mt-3 d-flex justify-between' component={Card}>
      <div className='d-flex align-start mt-2 ml-2 mb-2'>
       <FontAwesomeIcon
        icon={faFilePdf}
        color='#61B15A'
        size='lg'
        className='mr-2 mt-1'
       />
       <Typography variant='caption' component='p'>
        BAJA_ACTIVOS
        <br />
        PDF - 1.2mb
       </Typography>
      </div>
      <FontAwesomeIcon icon={faTrashCan} size='lg' className='mr-1 mt-1' />
     </Grid>
     <Grid
      item
      xs={3}
      className='mt-3 ml-2 d-flex justify-between'
      component={Card}
     >
      <div className='d-flex align-start mt-2 ml-2 mb-2'>
       <FontAwesomeIcon
        icon={faFilePdf}
        color='#61B15A'
        size='lg'
        className='mr-2 mt-1'
       />
       <Typography variant='caption' component='p'>
        BAJA_ACTIVOS
        <br />
        PDF - 1.2mb
       </Typography>
      </div>
      <FontAwesomeIcon icon={faTrashCan} size='lg' className='mr-1 mt-1' />
     </Grid>
     <Grid
      item
      xs={3}
      className='mt-3 ml-2 d-flex justify-between'
      component={Card}
     >
      <div className='d-flex align-start mt-2 ml-2 mb-2'>
       <FontAwesomeIcon
        icon={faFilePdf}
        color='#61B15A'
        size='lg'
        className='mr-2 mt-1'
       />
       <Typography variant='caption' component='p'>
        BAJA_ACTIVOS
        <br />
        PDF - 1.2mb
       </Typography>
      </div>
      <FontAwesomeIcon icon={faTrashCan} size='lg' className='mr-1 mt-1' />
     </Grid>
    </Grid>
   </Grid>
   <Grid item xs={12} className='mt-4'>
    <Stack direction='row' justifyContent='center' alignItems='center'>
     <Button className='mr-1' variant='contained' onClick={handleClickOpen}>
      Finalizar
     </Button>
    </Stack>
   </Grid>
  </Grid>
 );
}

export default ActivosBaja;
