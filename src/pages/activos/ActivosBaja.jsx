import React, { useState } from 'react';
import DragAndDropInputFile from '../../components/common/DragAndDropInputFile';
import {
 Grid,
 Stack,
 Button,
 Typography,
 Card,
 FormControl,
 InputLabel,
 Select,
 MenuItem,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faTrashCan } from '@fortawesome/pro-light-svg-icons';

function ActivosBaja() {
 const [reason, setreason] = useState('');
 const handleChange = (event) => {
  setreason(event.target.value);
 };

 const validar = () => {
  return reason.length > 0;
 };

 return (
  <Grid container>
   <Grid item xs={12} className='mt-3'>
    <Typography component='div' className='d-flex'>
     <Typography
      component='p'
      color='primary'
      variant='h5'
      className='font-weight-medium'
     >
      9
     </Typography>
     <Typography component='p' className='ml-1' variant='h5'>
      activos seleccionados
     </Typography>
    </Typography>
    <Grid item xs={3} className='mt-4 mb-4 d-flex'>
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
     <Button className='mr-1' variant='contained' disabled={!validar()}>
      Finalizar
     </Button>
    </Stack>
   </Grid>
  </Grid>
 );
}

export default ActivosBaja;
