import React from 'react';
import { CkeckStepIcon, InfoStepIcon, RejectedtepIcon, stringAvatar, StyledBadge, StyledBoldTypography, StyledConnector, StyleStepContent, TrasferStepIcon, } from './ArchivoNotificaciones.styles';
import { Avatar, Box, Typography, StepLabel, Step, Stepper, Link, Grid, Chip, InputAdornment, TextField, RadioGroup, FormControlLabel, Radio, FormControl, InputLabel, Select, MenuItem, Checkbox, } from '@mui/material';
import NotificationActivo from '../../components/archivos/verificacion/NotificationActivo';
import ExpandableFilters from '../../components/common/ExpandableFilters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/pro-light-svg-icons';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

const notificacion = [
  {
    tipe: 'newTransfer',
    new: true,
    hour: 'Hoy, 17:30 Hs',
    transferencia: {
      activo: '10',
      box: 'Las Marias',
      partido: 'Villa Consitucion, Santa Ana, Buenos Aires',
      email: 'email@email.com',
      telefono: '(987) 53679865',
      state: false,
      userName: 'Sabrina Gracias Demestre',
    },
    rute: 'Activos > box 2B > box 1B-A',
  },
  {
    tipe: 'check',
    new: false,
    hour: 'Hoy, 16:30 Hs',
    transferencia: {
      activo: '10',
      box: 'Las Marias',
      partido: 'Villa Consitucion, Santa Ana, Buenos Aires',
      email: 'email@email.com',
      telefono: '(987) 53679865',
      state: true,
      userName: 'Sabrina Garcia Demestre',
    },
    rute: 'Activos > box 2B > box 1B-A',
  },
  {
    tipe: 'newExcel',
    new: false,
    hour: 'Hoy, 16:30 Hs',
    transferencia: {},
    rute: 'Activos > box 2B > box 1B-A',
  },
  {
    tipe: 'info',
    new: false,
    hour: 'Hoy, 16:30 Hs',
    transferencia: {},
    rute: '',
  },
  {
    tipe: 'rejected',
    new: false,
    hour: 'Hoy, 16:30 Hs',
    transferencia: {
      activo: '10',
      box: 'Las Marias',
      partido: 'Villa Consitucion, Santa Ana, Buenos Aires',
      email: 'email@email.com',
      telefono: '(987) 53679865',
      state: false,
      userName: 'Sabrina Garcias Demestre',
    },
    rute: 'Activos > box 2B > box 1B-A',
  },
];

const filtroActividad = [
 {
  value: '1',
  label: 'Actividad 1',
 },
 {
  value: '2',
  label: 'Actividad 2',
 },
 {
  value: '3',
  label: 'Actividad 3',
 },
];

function ArchivoNotificaciones() {
 //For notification Icon
 const stepIcon = (tipe) => {
  if (tipe === 'newTransfer') {
   return TrasferStepIcon;
  } else if (tipe === 'info') {
   return InfoStepIcon;
  } else if (tipe === 'check') {
   return CkeckStepIcon;
  } else if (tipe === 'rejected') {
   return RejectedtepIcon;
  } else if (tipe === 'newExcel') {
   return CkeckStepIcon;
  }
 };

 //For notification label
 const label = (notificacion) => {
  if (notificacion.tipe === 'newTransfer') {
   return (
    <Typography variant='body1' component='p' color='black'>
     Transferencia recibida de Box {notificacion.transferencia.box}
    </Typography>
   );
  } else if (notificacion.transferencia.state === true) {
   return (
    <Typography className='flex-row d-flex pt-1'>
     Transferencia aceptada de &nbsp;
     <StyledBoldTypography color='primary'>
      {' '}
      Box {notificacion.transferencia.box}
     </StyledBoldTypography>
    </Typography>
   );
  } else if (notificacion.tipe === 'newExcel') {
   return (
    <Typography className='flex-row d-flex'>
     Nuevo excel disponible para descargar en &nbsp;
     <StyledBoldTypography color='primary'>Activos</StyledBoldTypography>
    </Typography>
   );
  } else if (notificacion.tipe === 'rejected') {
   return (
    <Typography>
     Transferencia rechazada de &nbsp;
     <StyledBoldTypography color='red'>Box Las Le??as</StyledBoldTypography>
    </Typography>
   );
  } else if (notificacion.tipe === 'info') {
   return (
    <Typography>
     La detenci??n de tus activos no fue actualizada en los ??ltimos 3 meses.
     &nbsp;
     <Link color='#ED8A98'>Actualizar</Link>
    </Typography>
   );
  }
 };

 // For date filters
 const [value, setValue] = React.useState(null);
 const [filtro, setFiltro] = React.useState('');
 const handleChangeFiltro = (event) => {
  setFiltro(event.target.value);
 };

 // For expandable filters
 const [selectedFilter, setSelectedFilter] = React.useState('');
 const handleChange = (event) => {
  setSelectedFilter(event.target.value);
 };

 const topPart = () => {
  return (
   <React.Fragment>
    <Grid item component={FormControl} xs={6} sm={4} xl={4}>
     <TextField
      id='outlined-basic'
      variant='outlined'
      type='search'
      defaultValue={'Buscar por box, evento, etc'}
      InputProps={{
       startAdornment: (
        <InputAdornment position='start'>
         <FontAwesomeIcon icon={faSearch} />
        </InputAdornment>
       ),
      }}
     />
    </Grid>
    <Grid item component={FormControl} xs={6} sm={2} xl={2}>
     <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
       label='Fecha'
       value={value}
       onChange={(datevalue) => {
        setValue(datevalue);
       }}
       renderInput={(params) => <TextField {...params} />}
      />
     </LocalizationProvider>
    </Grid>
    <Grid item component={FormControl} xs={12} sm={3} xl={2}>
     <TextField
      select
      value={filtro}
      onChange={handleChangeFiltro}
      label='Tipo de Actividad'
      fullWidth
     >
      {filtroActividad.map((option) => (
       <MenuItem key={option.value} value={option.value}>
        {option.label}
       </MenuItem>
      ))}
     </TextField>
    </Grid>
   </React.Fragment>
  );
 };

 const expandablePart = () => {
  return (
   <span>
    <Grid
     item
     component={FormControl}
     className='pr-2 mt-3 align-center'
     xs={12}
     xl={12}
    >
     <FormControlLabel
      control={
       <Checkbox
        checked={true}
        onChange={() => console.log('do something on check')}
       />
      }
      label='Checkbox'
     />
     <FormControlLabel
      control={
       <Checkbox
        checked={false}
        onChange={() => console.log('do something on check')}
       />
      }
      label='Checkbox'
     />

     <RadioGroup row defaultValue='b' name='radio-buttons-group'>
      <FormControlLabel value='a' control={<Radio />} label='Radio 1' />
      <FormControlLabel value='b' control={<Radio />} label='Radio 2' />
     </RadioGroup>
    </Grid>
   </span>
  );
 };

 const bottomPart = () => {
  return (
   <Grid item xs={12} className='mt-2'>
    <Chip
     label='Filter applied'
     color='secondary'
     className='mr-1'
     onDelete={() => {
      console.log('on Delete');
     }}
    />
    <Chip
     label='Filter applied'
     color='secondary'
     className='mr-1'
     onDelete={() => {
      console.log('on Delete');
     }}
    />
    <Chip
     label='Filter applied'
     color='secondary'
     className='mr-1'
     onDelete={() => {
      console.log('on Delete');
     }}
    />
   </Grid>
  );
 };

 return (
  <Box>
   <ExpandableFilters
    TopPart={topPart}
    ExpandablePart={expandablePart}
    BottomPart={bottomPart}
   />
   <Stepper
    nonLinear
    orientation='vertical'
    connector={<StyledConnector />}
    activeStep={1}
   >
    <StyleStepContent />
    {notificacion.map((notificacion) => (
     <Step>
      <StepLabel
       StepIconComponent={stepIcon(notificacion.tipe)}
       optional={
        <Box className='pl-1'>
         {undefined ? null : notificacion.transferencia.state === true ? (
          <Typography
           className='d-flex flex-row mt-1'
           variant='body1'
           component='p'
           color='text.primary'
          >
           <Avatar
            {...stringAvatar(notificacion.transferencia.userName)}
            className='mr-1'
            color='green'
           />{' '}
           {notificacion.transferencia.userName} &middot; Boxes
          </Typography>
         ) : null}
         {notificacion.tipe === 'newExcel' ? (
          <Typography
           variant='body1'
           component='p'
           color='text.primary'
           className='d-flex flex-row'
          >
           {notificacion.rute}
          </Typography>
         ) : null}
         <Typography variant='body1' component='p' color='text.primary'>
          {notificacion.hour}
         </Typography>
        </Box>
       }
      >
       <Box className='d-flex pt-3 pl-1'>
        {label(notificacion)}
        {notificacion.new === true ? <StyledBadge badgeContent={1} /> : null}
       </Box>
      </StepLabel>
      <StyleStepContent>
       {notificacion.tipe === 'newTransfer' ? (
        <NotificationActivo
         activo={notificacion.transferencia.activo}
         box={notificacion.transferencia.box}
         partido={notificacion.transferencia.partido}
         email={notificacion.transferencia.email}
         telefono={notificacion.transferencia.telefono}
        />
       ) : null}
      </StyleStepContent>
     </Step>
    ))}
   </Stepper>
  </Box>
 );
}

export default ArchivoNotificaciones;
