import { CardContent, Grid, Typography } from '@mui/material';
import { Cell, Legend, Pie, PieChart } from 'recharts';

export const CardResumenInfoGeneral = ({ data }) => {
 const COLORS = ['#76CC81', '#FFF76A', '#FFA589', '#DAFFD7'];

 const renderGeneral = (props) => {
  const { payload } = props;
  return (
   <>
    {payload.map((entry, index) => (
     <Typography
      key={index}
      className='font-weight-medium d-flex justify-center'
      variant='h5'
      noWrap
     >
      {entry.payload.amount}
     </Typography>
    ))}
   </>
  );
 };

 const renderMaxWeightLagend = (props) => {
  const { payload } = props;
  return (
   <>
    {payload.map((entry, index) => (
     <Typography
      key={index}
      className='font-weight-medium d-flex justify-center'
      variant='h5'
      noWrap
     >
      {' '}
      {entry.payload.maxweight} Kg
     </Typography>
    ))}
   </>
  );
 };

 const renderMinWeightLagend = (props) => {
  const { payload } = props;
  return (
   <>
    {payload.map((entry, index) => (
     <Typography
      key={index}
      className='font-weight-medium d-flex justify-center'
      variant='h5'
      noWrap
     >
      {' '}
      {entry.payload.minweigth} Kg
     </Typography>
    ))}
   </>
  );
 };

 return (
  <CardContent>
   <Typography variant='bottom'>Información general</Typography>
   <Grid container className='d-flex'>
    <Grid item className='d-flex flex-column' xl={4} sm={4}>
     <Grid item className='align-self-center'>
      <PieChart width={150} height={200}>
       <Pie
        data={data}
        cx='50%'
        cy='50%'
        labelLine={false}
        outerRadius={65}
        dataKey='amount'
       >
        {data.map((entry, index) => (
         <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
       </Pie>
       <Legend content={renderGeneral} align='center' />
      </PieChart>
     </Grid>
     <Grid item className='align-self-center'>
      <Typography>Animales</Typography>
     </Grid>
    </Grid>
    <Grid item className='d-flex flex-column' xl={4} sm={4}>
     <Grid item className='align-self-center'>
      <PieChart width={150} height={200}>
       <Pie
        data={data}
        cx='50%'
        cy='50%'
        labelLine={false}
        outerRadius={65}
        dataKey='maxweight'
       >
        {data.map((entry, index) => (
         <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
       </Pie>
       <Legend content={renderMaxWeightLagend} align='center' />
      </PieChart>
     </Grid>
     <Grid item className='align-self-center'>
      <Typography>Peso máximo</Typography>
     </Grid>
    </Grid>
    <Grid item className='d-flex flex-column' xl={4} sm={4}>
     <Grid item className='align-self-center'>
      <PieChart width={150} height={200}>
       <Pie
        data={data}
        cx='50%'
        cy='50%'
        labelLine={false}
        outerRadius={65}
        dataKey='minweigth'
       >
        {data.map((entry, index) => (
         <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
       </Pie>
       <Legend content={renderMinWeightLagend} align='center' />
      </PieChart>
     </Grid>
     <Grid item className='align-self-center'>
      <Typography color='text.secondary' gutterBottom>
       Peso mínimo
      </Typography>
     </Grid>
    </Grid>
   </Grid>
  </CardContent>
 );
};
