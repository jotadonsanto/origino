import { useCallback, useState } from 'react';
import { Card, Grid, Typography } from '@mui/material';
import { Cell, Legend, Pie, PieChart, Sector } from 'recharts';
import { StyleBoxLegend } from './ActivosResumenInfo.style';

// Generate Data
function createDataBrandOfFire(race, amount) {
 return { race, amount };
}
function createDataRace(race, amount) {
 return { race, amount };
}
function createDataProductiveSystem(race, amount, maxweight, minweigth) {
 return { race, amount, maxweight, minweigth };
}
function createDataCategory(race, amount) {
 return { race, amount };
}

const dataBrandOfFire = [
 createDataBrandOfFire('Anca', 350),
 createDataBrandOfFire('Carretilla', 150),
];

const dataRace = [
 createDataRace('Angus negro', 130),
 createDataRace('Angus', 120),
 createDataRace('Cruza', 250),
];

const dataCategory = [
 createDataCategory('Vacas', 30),
 createDataCategory('Terneros', 470),
];

const dataProductiveSystem = [
 createDataProductiveSystem('Pastura', 500, 400, 200),
];

export const CardResumenInfoDetallada = () => {
 const COLORS = ['#76CC81', '#FFF76A', '#FFA589', '#DAFFD7'];
 // Activar valores dentro de la dona
 const [activeIndex, setActiveIndex] = useState(0);
 const onPieEnter = useCallback(
  (_, index) => {
   setActiveIndex(index);
  },
  [setActiveIndex]
 );

 const [activeCategoryIndex, setCategoryActiveIndex] = useState(0);
 const onCategoryPie = useCallback(
  (_, index) => {
   setCategoryActiveIndex(index);
  },
  [setCategoryActiveIndex]
 );

 const [activeBrandOfFireIndex, setActiveBrandOfFireIndex] = useState(0);
 const onBrandOfFirePie = useCallback(
  (_, index) => {
   setActiveBrandOfFireIndex(index);
  },
  [setActiveBrandOfFireIndex]
 );

 const renderActiveShape = (props) => {
  const {
   cx,
   cy,
   percent,
   outerRadius,
   innerRadius,
   startAngle,
   endAngle,
   fill,
  } = props;

  return (
   <g>
    <text x={cx} y={cy} dy={8} textAnchor='middle' fill='#333333'>
     {`${(percent * 100).toFixed(0)}%`}
    </text>
    <Sector
     cx={cx}
     cy={cy}
     innerRadius={innerRadius}
     outerRadius={outerRadius}
     startAngle={startAngle}
     endAngle={endAngle}
     fill={fill}
    />
   </g>
  );
 };

 const renderLegend = (props) => {
  const { payload } = props;

  return (
   <>
    <Grid className='d-flex'>
     {payload.map((entry, index) => (
      <Grid key={index} container>
       <Grid item xs={12} className='d-flex ml-2 '>
        <Grid item className='align-self-center'>
         <StyleBoxLegend color={COLORS[index % COLORS.length]} />
        </Grid>
        <Grid item className='ml-1'>
         <Typography
          variant='buttom'
          className='font-weight-medium'
          fontSize='1.5rem'
          noWrap
         >
          {' '}
          {entry.payload.amount}
         </Typography>
        </Grid>
       </Grid>
       <Grid item>
        <Typography className='ml-2' fontSize='0.8rem' noWrap>
         {entry.payload.race}
        </Typography>
       </Grid>
      </Grid>
     ))}
    </Grid>
   </>
  );
 };

 return (
  <Grid container>
   <Card>
    <Grid item xs={3} className='d-flex flex-column p-2'>
     <Grid item className='align-self-start'>
      <Typography noWrap>Marca de fuego</Typography>
     </Grid>
     <Grid item>
      <PieChart width={180} height={250}>
       <Pie
        data={dataBrandOfFire}
        cx='50%'
        cy='50%'
        innerRadius={60}
        outerRadius={80}
        activeShape={renderActiveShape}
        activeIndex={activeBrandOfFireIndex}
        labelLine={false}
        dataKey='amount'
        onMouseEnter={onBrandOfFirePie}
       >
        {dataBrandOfFire.map((entry, index) => (
         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
       </Pie>
       <Legend content={renderLegend} align='center' />
      </PieChart>
     </Grid>
    </Grid>
   </Card>
   <Card className='ml-1'>
    <Grid item xs={12} className='d-flex flex-column p-2'>
     <Grid item className='align-self-start'>
      <Typography noWrap>Raza</Typography>
     </Grid>
     <Grid item>
      <PieChart width={300} height={250}>
       <Pie
        data={dataRace}
        cx='50%'
        cy='50%'
        labelLine={false}
        outerRadius={80}
        dataKey='amount'
       >
        {dataRace.map((entry, index) => (
         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
       </Pie>
       <Legend content={renderLegend} align='center' />
      </PieChart>
     </Grid>
    </Grid>
   </Card>
   <Card className='ml-1'>
    <Grid item xs={3} className='d-flex flex-column p-2'>
     <Grid item className='align-self-start'>
      <Typography noWrap>Categoría</Typography>
     </Grid>
     <Grid item>
      <PieChart width={180} height={250}>
       <Pie
        data={dataCategory}
        cx='50%'
        cy='50%'
        innerRadius={60}
        outerRadius={80}
        activeShape={renderActiveShape}
        activeIndex={activeCategoryIndex}
        labelLine={false}
        dataKey='amount'
        onMouseEnter={onCategoryPie}
       >
        {dataCategory.map((entry, index) => (
         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
       </Pie>
       <Legend content={renderLegend} align='center' />
      </PieChart>
     </Grid>
    </Grid>
   </Card>
   <Card className='ml-1'>
    <Grid item xs={3} className='d-flex flex-column p-2'>
     <Grid item className='align-self-start'>
      <Typography noWrap>Sistema Productivo</Typography>
     </Grid>
     <Grid item>
      <PieChart width={180} height={250}>
       <Pie
        data={dataProductiveSystem}
        cx='50%'
        cy='50%'
        innerRadius={60}
        outerRadius={80}
        activeShape={renderActiveShape}
        activeIndex={activeIndex}
        labelLine={false}
        dataKey='amount'
        onMouseEnter={onPieEnter}
       >
        {dataProductiveSystem.map((entry, index) => (
         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
       </Pie>
       <Legend content={renderLegend} align='center' />
      </PieChart>
     </Grid>
    </Grid>
   </Card>
  </Grid>
 );
};
