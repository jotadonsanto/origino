import React, { useState } from 'react';
import { Box, Grid, Button, Card, CardActionArea, Checkbox, FormControlLabel, Typography} from '@mui/material';
import test from'./../../assets/images/add_activos.png';

const Eventos = [ 0, 1, 2, 3, 4, 5, 6 ];

function EventosCarga() {
  const random = (key) => {
    if (key % 2 === 0)  return true;
    return false;
  }
  return (
    <>
      <Grid className="pt-3 pb-3 d-flex justify-end" >
        <Button className="ml-2" variant="outlined">
          VER HISTORIAL
        </Button>
      </Grid>
      <Grid container spacing={{ xs:2, sm:3, md:4, xl:8 }} className="pb-4">
        {Eventos.map((evento, key) => {
          return (
            <Grid item xs={12} sm={6} md={4} xl={3} key={key}>
              <Card className='d-flex align-center' raised={random(key)}>
                <CardActionArea>
                  <Grid container justifyContent="center">
                    <Grid item xs={12} className='d-flex justify-end'>
                      <FormControlLabel
                        control={<Checkbox checked={random(key)}
                        onChange={() => console.log('do something on check')} />} />
                    </Grid>
                    <Grid item xs={3}>
                      <img  src={test} alt="Origino" className="w-100"/>
                    </Grid>
                    <Grid item xs={12} p={4}>
                      <Typography variant='h5' component='p' color='text.primary' className='text-center mb-2'>
                        Peso
                      </Typography>
                      <Typography variant='body2' component='p' color='text.primary'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada diam, sit aenean tellus tincidunt arcu netus fusce. Quam augue consectetur sed sagittis ipsum.
                      </Typography>
                    </Grid>
                  </Grid>
                </CardActionArea>
              </Card>
            </Grid>)
        })}
      </Grid>
      <Box className='d-flex justify-center mt-4'>
        <Button variant="contained">
          CONTINUAR
        </Button>
      </Box>
    </>
  );
}

export default EventosCarga;
