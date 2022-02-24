import React from 'react';
import { Card, Typography, Grid, Button, Stack, Link } from '@mui/material';

function NotificationActivo({ activo, box, partido, email, telefono }) {
  return (
    <Grid container className='ml-1'>
      <Grid container component={Card}>
        <Grid container direction='row' className='p-2' spacing={4}>
          {/* Activos */}
          <Grid item xl={1} xs={12}>
            <Typography variant='body1' component='p' color='text.primary'>
              Activos
            </Typography>
            <Typography variant='h6' color='primary.main'>
              {activo}
            </Typography>
          </Grid>
          {/* BOX/PARTIDO */}
          <Grid item xl={4} xs={12}>
            <Grid item container>
              <Grid item xl={3} xs={3}>
                <Typography variant='body1' component='p' color='text.primary'>
                  Box
                </Typography>
              </Grid>
              <Grid item xl={9} xs={9}>
                <Typography variant='body1' component='p'>
                  {box}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xl={3} xs={3}>
                <Typography variant='body1' component='p' color='text.primary'>
                  Partido
                </Typography>
              </Grid>
              <Grid item xl={9} xs={6}>
                <Typography variant='body1' component='p' noWrap>
                  {partido}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* Email telefono */}
          <Grid item xl={4} xs={12}>
            <Grid item container>
              <Grid item xl={3} xs={3}>
                <Typography variant='body1' component='p' color='text.primary'>
                  Email
                </Typography>
              </Grid>
              <Grid item xl={9} xs={9}>
                <Link>{email}</Link>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xl={3} xs={3}>
                <Typography variant='body1' component='p' color='text.primary'>
                  Teléfono
                </Typography>
              </Grid>
              <Grid item xl={9} xs={9}>
                <Typography variant='body1' component='p'>
                  {telefono}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* Aceptar / rechazar */}
          <Grid item xl={3} xs={12}>
            <Stack direction='row' justifyContent='center' alignItems='center'>
              <Button variant='contained'>ACEPTAR</Button>
              <Button className='ml-3' variant='outlined'>
                RECHAZAR
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default NotificationActivo;
