import React, { useCallback, useState } from 'react';
import { StyledIconButton } from './ActivosResumen.styles';
import DragAndDropInputFile from '../../components/common/DragAndDropInputFile';
import { Box, Grid, Card, Button, Typography, Stepper, Step, StepButton, Divider, Popover, CardContent, CardActions, Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPlus, faInfoCircle } from '@fortawesome/pro-light-svg-icons';
import {
    Chart,
    PieSeries,
    Title,
    BarSeries,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation, Palette } from '@devexpress/dx-react-chart';
import { experimentalStyled as styled } from '@mui/material/styles';
import { borderRadius, fontSize } from '@mui/system';
import { Cell, Layer, Legend, Pie, PieChart, ResponsiveContainer, Sector, Surface, Tooltip } from 'recharts';

// Generate Sales Data
function createDataBrandOfFire(race, amount) {
    return { race, amount };
}
function createDataRace(race, amount) {
    return { race, amount };
}
function createDataProductiveSystem(race, amount) {
    return { race, amount };
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
    createDataProductiveSystem('Pastura', 500),
];


const Root = props => (
    <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row', marginTop: '-10px' }} />
);
const Label = props => (
    <Legend.Label {...props} sx={{ whiteSpace: 'nowrap' }} />
);

const Marker = () => (
    <span></span>
);



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body1,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
}));




function ActivoResumen() {
    // For stepper
    const steps = ['Cargar Archivo', 'Verificación', 'Resumen y confirmación'];
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed] = React.useState({});
    const handleStep = (step) => () => {
        setActiveStep(step);
    };

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

    const CardInformacionGeneral = (
        <CardContent>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
                Información general
            </Typography>
            <Grid container className='d-flex flex-row justify-center align-self-center' >
                <Grid item className='d-flex flex-column'>
                    <Grid item >
                        <Chart data={dataBrandOfFire} width={150} height={200}>
                            <Palette scheme={['#76CC81']} />
                            <PieSeries valueField="amount" argumentField="amount" />
                            <Animation />
                            {/* <Legend position='bottom' rootComponent={Root} labelComponent={Label} markerComponent={Marker} /> */}
                        </Chart>
                    </Grid>
                    <Grid item className='align-self-center'>
                        <Typography>
                            Animales
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item className='d-flex flex-column'>
                    <Grid item >
                        <Chart data={dataBrandOfFire} width={150} height={200}>
                            <Palette scheme={['#B4FAAE']} />
                            <PieSeries valueField="amount" argumentField="amount" />
                            <Animation />
                            {/* <Legend position='bottom' rootComponent={Root} labelComponent={Label} markerComponent={Marker} /> */}
                        </Chart>
                    </Grid>
                    <Grid item className='align-self-center'>
                        <Typography color="text.secondary" gutterBottom>
                            Peso máximo
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item className='d-flex flex-column'>
                    <Grid item >
                        <Chart data={dataBrandOfFire} width={150} height={200}>
                            <Palette scheme={['#B4FAAE']} />
                            <PieSeries valueField="amount" argumentField="amount" />
                            <Animation />
                            {/* <Legend position='bottom' rootComponent={Root} labelComponent={Label} markerComponent={Marker} /> */}
                        </Chart>
                    </Grid>
                    <Grid item className='align-self-center'>
                        <Typography color="text.secondary" gutterBottom>
                            Peso mínimo
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </CardContent>
    );


    const CardFiltros = (
        <CardContent >
            <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 1, sm: 7, md: 12 }} xs={12}>
                <Grid item xs={2} sm={4} md={4}>
                    <Card className='pb-1 pt-1'>
                        <Grid item className='d-flex justify-center'>
                            <Box sx={{
                                width: 30,
                                height: 30,
                                borderRadius: 1,
                                backgroundColor: '#DAF1DE',
                                '&:hover': {
                                    backgroundColor: '#DAF1DE',
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}>
                            </Box>
                        </Grid>
                        <Grid item className='pt-1 align-self-center text-center'>
                            <Typography fontSize={15}>Otra opción de filtro</Typography>
                        </Grid>
                        <Grid item className='align-self-center text-center'>
                            <Typography className='font-weight-medium' fontSize={25}>24</Typography>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Card className='pb-1 pt-1'>
                        <Grid item className='d-flex justify-center'>
                            <Box sx={{
                                width: 30,
                                height: 30,
                                borderRadius: 1,
                                backgroundColor: '#ADCE74',
                                '&:hover': {
                                    backgroundColor: '#ADCE74',
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}>
                            </Box>
                        </Grid>
                        <Grid item className='pt-1 align-self-center text-center'>
                            <Typography fontSize={15}>Otra opción de filtro</Typography>
                        </Grid>
                        <Grid item className='align-self-center text-center'>
                            <Typography className='font-weight-medium' fontSize={25}>24</Typography>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Card className='pb-1 pt-1'>
                        <Grid item className='d-flex justify-center'>
                            <Box sx={{
                                width: 30,
                                height: 30,
                                borderRadius: 1,
                                backgroundColor: '#FFF0DA',
                                '&:hover': {
                                    backgroundColor: '#FFF0DA',
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}>
                            </Box>
                        </Grid>
                        <Grid item className='pt-1 align-self-center text-center'>
                            <Typography fontSize={15}>Otra opción de filtro</Typography>
                        </Grid>
                        <Grid item className='align-self-center text-center'>
                            <Typography className='font-weight-medium' fontSize={25}>24</Typography>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Card className='pb-1 pt-1'>
                        <Grid item className='d-flex justify-center'>
                            <Box sx={{
                                width: 30,
                                height: 30,
                                borderRadius: 1,
                                backgroundColor: '#B4FAAE',
                                '&:hover': {
                                    backgroundColor: '#B4FAAE',
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}>
                            </Box>
                        </Grid>
                        <Grid item className='pt-1 align-self-center text-center'>
                            <Typography fontSize={15}>Otra opción de filtro</Typography>
                        </Grid>
                        <Grid item className='align-self-center text-center'>
                            <Typography className='font-weight-medium' fontSize={25}>44</Typography>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Card className='pb-1 pt-1'>
                        <Grid item className='d-flex justify-center'>
                            <Box sx={{
                                width: 30,
                                height: 30,
                                borderRadius: 1,
                                backgroundColor: '#DAFFD7',
                                '&:hover': {
                                    backgroundColor: '#DAFFD7',
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}>
                            </Box>
                        </Grid>
                        <Grid item className='pt-1 align-self-center text-center'>
                            <Typography fontSize={15}>Otra opción de filtro</Typography>
                        </Grid>
                        <Grid item className='align-self-center text-center'>
                            <Typography className='font-weight-medium' fontSize={25}>44</Typography>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Card className='pb-1 pt-1'>
                        <Grid item className='d-flex justify-center'>
                            <Box sx={{
                                width: 30,
                                height: 30,
                                borderRadius: 1,
                                backgroundColor: '#EFFFD2',
                                '&:hover': {
                                    backgroundColor: '#EFFFD2',
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}>
                            </Box>
                        </Grid>
                        <Grid item className='pt-1 align-self-center text-center'>
                            <Typography fontSize={15}>Otra opción de filtro</Typography>
                        </Grid>
                        <Grid item className='align-self-center text-center'>
                            <Typography className='font-weight-medium' fontSize={25}>44</Typography>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </CardContent >
    );

    //active step de la dona
    const renderActiveShape = (props) => {

        const RADIAN = Math.PI / 180;
        const {
            cx,
            cy,
            midAngle,
            percent,
            outerRadius,
            innerRadius,
            startAngle,
            amount,
            endAngle,
            fill
        } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);

        return (
            <g>
                <text x={cx} y={cy} dy={8} textAnchor="middle" fill='#333333'>
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


        console.log(payload)
        return (
            <>
                <Grid className='d-flex'>
                    {
                        payload.map((entry, index) => (

                            <Grid key={index} container className='d-flex flex-row align-self-center'>
                                <Grid item xs={12} className='d-flex ml-2 flex-row align-self-center'>
                                    <Grid item className='d-flex  align-self-center'>
                                        <Box key={`item-${index}`} sx={{
                                            width: 20,
                                            height: 20,
                                            backgroundColor: COLORS[index % COLORS.length],
                                            borderRadius: 1
                                        }} />
                                    </Grid>
                                    <Grid item className='ml-1'>
                                        <Typography variant='buttom' className='font-weight-medium' fontSize='1.5rem' noWrap> {entry.payload.amount}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Typography className='ml-2' fontSize='0.8rem' noWrap > {entry.payload.race}</Typography>
                                </Grid>
                            </Grid>

                        ))
                    }
                </Grid>
            </>
        );
    }



    const COLORS = ['#76CC81', '#FFF76A', '#FFA589', '#DAFFD7'];

    const CardInformacionDetallada = (
        <>
            <Grid container>
                <Card>
                    <Grid item xs={3} className='d-flex flex-column p-2'>
                        <Grid item className='align-self-start'>
                            <Typography noWrap>
                                Marca de fuego
                            </Typography>
                        </Grid>
                        <Grid item >
                            <PieChart width={180} height={250}>
                                <Pie
                                    data={dataBrandOfFire}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={90}
                                    activeShape={renderActiveShape}
                                    activeIndex={activeBrandOfFireIndex}
                                    labelLine={false}
                                    outerRadius={80}
                                    dataKey="amount"
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
                            <Typography noWrap>
                                Raza
                            </Typography>
                        </Grid>
                        <Grid item >
                            <ResponsiveContainer width={300} height={250}>
                                <PieChart>
                                    <Pie
                                        data={dataRace}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        outerRadius={80}
                                        dataKey="amount"

                                    >
                                        {dataRace.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Legend content={renderLegend} align='center' />
                                </PieChart>
                            </ResponsiveContainer>
                        </Grid>
                    </Grid>
                </Card>
                <Card className='ml-1'>
                    <Grid item xs={3} className='d-flex flex-column p-2'>
                        <Grid item className='align-self-start'>
                            <Typography noWrap>
                                Categoría
                            </Typography>
                        </Grid>
                        <Grid item >
                            <PieChart width={180} height={250}>
                                <Pie
                                    data={dataCategory}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={90}
                                    activeShape={renderActiveShape}
                                    activeIndex={activeCategoryIndex}
                                    labelLine={false}
                                    outerRadius={80}
                                    dataKey="amount"
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
                            <Typography noWrap>
                                Sistema Productivo
                            </Typography>
                        </Grid>
                        <Grid item >
                            <PieChart width={180} height={250}>
                                <Pie
                                    data={dataProductiveSystem}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={90}
                                    activeShape={renderActiveShape}
                                    activeIndex={activeIndex}
                                    labelLine={false}
                                    outerRadius={80}
                                    dataKey="amount"
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
        </>
    );


    return (
        //Starts the route view with <Grid container> and add <Grid item 12> for rows.
        <Grid container spacing={2}>
            <Grid container className="justify-end">
                <Button variant="outlined" startIcon={<FontAwesomeIcon icon={faDownload} />}>DESCARGAR</Button>
            </Grid>

            <Grid item xs={12} className="mt-3">
                <Stepper nonLinear activeStep={activeStep}>
                    {steps.map((label, index) => (
                        <Step key={label} completed={completed[index]}>
                            <StepButton color="inherit" onClick={handleStep(index)}>
                                {label}
                            </StepButton>
                        </Step>
                    ))}
                </Stepper>
                <Divider variant="middle" className="mt-4" />
            </Grid>


            <Grid container className='mt-2'>
                <Grid sm={12} xs={12} xl={6} container>
                    <Card sx={{ display: 'flex', alignSelf: 'center' }}>{CardInformacionGeneral}</Card>
                </Grid>
                <Grid sm={12} xs={12} xl={6} container>
                    <Card sx={{ display: 'flex', alignItems: 'center' }}>{CardFiltros}</Card>
                </Grid>
            </Grid>
            <Grid container className='mt-2'>
                <Grid xs={12} sx={{ display: 'flex', alignSelf: 'center' }}>{CardInformacionDetallada}</Grid>
            </Grid>

        </Grid>
    );
}

export default ActivoResumen;