import { Card, CardContent, Grid, Typography } from '@mui/material';
import { StyleBoxFilter } from './ActivosResumenInfo.style';

export const CardResumenFilter = () => {
 return (
  <CardContent>
   <Grid
    container
    spacing={{ xs: 2, md: 1 }}
    columns={{ xs: 1, sm: 7, md: 12 }}
   >
    <Grid item xs={2} sm={4} md={4}>
     <Card className='pb-1 pt-1'>
      <Grid item className='d-flex justify-center'>
       <StyleBoxFilter color='#DAF1DE' />
      </Grid>
      <Grid item className='pt-1 align-self-center text-center'>
       <Typography variant='subtitle1'>Otra opción de filtro</Typography>
      </Grid>
      <Grid item className='align-self-center text-center'>
       <Typography className='font-weight-medium' variant='h5'>
        24
       </Typography>
      </Grid>
     </Card>
    </Grid>
    <Grid item xs={2} sm={4} md={4}>
     <Card className='pb-1 pt-1'>
      <Grid item className='d-flex justify-center'>
       <StyleBoxFilter color='#ADCE74' />
      </Grid>
      <Grid item className='pt-1 align-self-center text-center'>
       <Typography variant='subtitle1'>Otra opción de filtro</Typography>
      </Grid>
      <Grid item className='align-self-center text-center'>
       <Typography className='font-weight-medium' variant='h5'>
        24
       </Typography>
      </Grid>
     </Card>
    </Grid>
    <Grid item xs={2} sm={4} md={4}>
     <Card className='pb-1 pt-1'>
      <Grid item className='d-flex justify-center'>
       <StyleBoxFilter color='#FFF0DA' />
      </Grid>
      <Grid item className='pt-1 align-self-center text-center'>
       <Typography variant='subtitle1'>Otra opción de filtro</Typography>
      </Grid>
      <Grid item className='align-self-center text-center'>
       <Typography className='font-weight-medium' variant='h5'>
        24
       </Typography>
      </Grid>
     </Card>
    </Grid>
    <Grid item xs={2} sm={4} md={4}>
     <Card className='pb-1 pt-1'>
      <Grid item className='d-flex justify-center'>
       <StyleBoxFilter color='#B4FAAE' />
      </Grid>
      <Grid item className='pt-1 align-self-center text-center'>
       <Typography variant='subtitle1'>Otra opción de filtro</Typography>
      </Grid>
      <Grid item className='align-self-center text-center'>
       <Typography className='font-weight-medium' variant='h5'>
        44
       </Typography>
      </Grid>
     </Card>
    </Grid>
    <Grid item xs={2} sm={4} md={4}>
     <Card className='pb-1 pt-1'>
      <Grid item className='d-flex justify-center'>
       <StyleBoxFilter color='#DAFFD7' />
      </Grid>
      <Grid item className='pt-1 align-self-center text-center'>
       <Typography variant='subtitle1'>Otra opción de filtro</Typography>
      </Grid>
      <Grid item className='align-self-center text-center'>
       <Typography className='font-weight-medium' variant='h5'>
        44
       </Typography>
      </Grid>
     </Card>
    </Grid>
    <Grid item xs={2} sm={4} md={4}>
     <Card className='pb-1 pt-1'>
      <Grid item className='d-flex justify-center'>
       <StyleBoxFilter color='#EFFFD2' />
      </Grid>
      <Grid item className='pt-1 align-self-center text-center'>
       <Typography variant='subtitle1'>Otra opción de filtro</Typography>
      </Grid>
      <Grid item className='align-self-center text-center'>
       <Typography className='font-weight-medium' variant='h5'>
        44
       </Typography>
      </Grid>
     </Card>
    </Grid>
   </Grid>
  </CardContent>
 );
};
