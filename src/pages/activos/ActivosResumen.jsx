import React from 'react';
import { StyledIconButton } from './ActivosResumen.styles';
import DragAndDropInputFile from '../../components/common/DragAndDropInputFile';
import { Box, Grid, Card, Button, Typography, Stepper, Step, StepButton, Divider, Popover, CardContent, CardActions } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPlus, faInfoCircle } from '@fortawesome/pro-light-svg-icons';
import {
    Chart,
    PieSeries,
    Title,
    BarSeries,
    Legend,

} from '@devexpress/dx-react-chart-material-ui';
import { Animation, Palette } from '@devexpress/dx-react-chart';

// Generate Sales Data
function createData(amount, weight, brandOfFire, race, category, productiveSystem) {
    return { amount, weight, brandOfFire, race, category, productiveSystem };
}

const data = [
    createData(20, 300, 'Carrecila', 'Angus negro', 'Vacas', 'Pastura'),
    // createData(10, 30, 'bla', 'bla', 'Vacas', 'Pastura'),
    // createData('03:00', 300),
    // createData('06:00', 600),
    // createData('09:00', 800),
    // createData('12:00', 1500),
    // createData('15:00', 2000),
    // createData('18:00', 2400),
    // createData('21:00', 2400),
    // createData('24:00', undefined),
];


const Root = props => (
    <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />
);
const Label = props => (
    <Legend.Label {...props} sx={{ whiteSpace: 'nowrap' }} />
);

const Marker = () => (
    <span></span>
);




function ActivoResumen() {
    // For stepper
    const steps = ['Cargar Archivo', 'Verificación', 'Resumen y confirmación'];
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed] = React.useState({});
    const handleStep = (step) => () => {
        setActiveStep(step);
    };
    // #76CC81


    // #B4FAAE
    const card = (
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Información general
            </Typography>
            <Grid container className='d-flex flex-row'>
                <Grid item className='d-flex flex-column'>
                    <Grid item >
                        <Chart data={data} width={150} height={200}>
                            <Palette scheme={['#76CC81']} />
                            <PieSeries valueField="amount" argumentField="amount" />
                            <Animation />
                            <Legend position='bottom' rootComponent={Root} labelComponent={Label} markerComponent={Marker} />
                        </Chart>
                    </Grid>
                    <Grid item className='align-self-center'>
                        <Typography color="text.secondary" gutterBottom>
                            Animales
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item className='d-flex flex-column'>
                    <Grid item >
                        <Chart data={data} width={150} height={200}>
                            <Palette scheme={['#B4FAAE']} />
                            <PieSeries valueField="amount" argumentField="amount" />
                            <Animation />
                            <Legend position='bottom' rootComponent={Root} labelComponent={Label} markerComponent={Marker} />
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
                        <Chart data={data} width={150} height={200}>
                            <Palette scheme={['#B4FAAE']} />
                            <PieSeries valueField="amount" argumentField="amount" />
                            <Animation />
                            <Legend position='bottom' rootComponent={Root} labelComponent={Label} markerComponent={Marker} />
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

            <Grid container className='mt-2' spacing={2}>
                <Grid xs={6} item><Card variant="outlined">{card}</Card></Grid>
                <Grid xs={6} item><Card variant="outlined">{card}</Card></Grid>
            </Grid>

        </Grid>
    );
}

export default ActivoResumen;