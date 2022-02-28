import React from 'react';
import {
  CkeckStepIcon,
  InfoStepIcon,
  RejectedtepIcon,
  stringAvatar,
  StyledBadge,
  StyledBoldTypography,
  StyledConnector,
  StyleStepContent,
  TrasferStepIcon,
} from './ArchivoNotificaciones.styles';
import {
  Avatar,
  Box,
  Typography,
  StepLabel,
  Step,
  Stepper,
  Link,
} from '@mui/material';
import Filter from '../../components/common/Filter';
import NotificationActivo from '../../components/archivos/verificacion/NotificationActivo';

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

function ArchivoNotificaciones() {
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
          <StyledBoldTypography color='red'>Box Las Leñas</StyledBoldTypography>
        </Typography>
      );
    } else if (notificacion.tipe === 'info') {
      return (
        <Typography>
          La detención de tus activos no fue actualizada en los últimos 3 meses.
          &nbsp;
          <Link color='#ED8A98'>Actualizar</Link>
        </Typography>
      );
    }
  };

  return (
    <Box>
      <Filter />
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
                  <Typography
                    variant='body1'
                    component='p'
                    color='text.primary'
                  >
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
