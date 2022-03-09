import React from 'react';
import {
  Avatar,
  Box,
  Typography,
  StepLabel,
  Step,
  Stepper,
  Link,
  Grid,
  StepButton,
  Button,
  TextField,
  Card,
  Divider,
  FormControl,
  Input,
  FormHelperText,
  OutlinedInput,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  Radio,
  InputAdornment,
} from '@mui/material';
import { StyledFormHelperText } from './LotesCarga.styles';
import { faPen, faFileImport, faTrash, faMinusCircle, faEllipsisV, faSearch } from '@fortawesome/pro-light-svg-icons';

import ExpandableFilters from '../../components/common/ExpandableFilters';
import { StyledSlider } from '../../components/activos/ActivosTable.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function LotesCarga() {
  // For stepper
  const steps = ['Cargar Lote', 'Detalle', 'Resumen y confirmación'];
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed] = React.useState({});
  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const [selectedFilter, setSelectedFilter] = React.useState('');
  const handleChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const topPart = () => {
    return (
      <React.Fragment>
        <Grid item component={FormControl} className="pr-2" xs={3}>
          <InputLabel id="test">Raza</InputLabel>
          <Select
            labelId="test"
            value={selectedFilter}
            label="Filtro"
            onChange={handleChange}
            className="w-100"
          >
            <MenuItem value={10}>Bovina</MenuItem>
            <MenuItem value={20}>Angus</MenuItem>
            <MenuItem value={30}>Wagyu</MenuItem>
          </Select>
        </Grid>
        <Grid item component={FormControl} className="pr-2" xs={3}>
          <InputLabel id="test">Sexo</InputLabel>
          <Select
            labelId="test"
            value={selectedFilter}
            label="Filtro"
            className="w-100"
          >
            <MenuItem value={10}>Macho</MenuItem>
            <MenuItem value={20}>Hembra</MenuItem>
            <MenuItem value={30}>NSNC</MenuItem>
          </Select>
        </Grid>
        <Grid item component={FormControl} className="pr-2" xs={3}>
          <InputLabel id="test">Categoria</InputLabel>
          <Select
            labelId="test"
            value={selectedFilter}
            label="Filtro"
            className="w-100"
          >
            <MenuItem value={10}>Ternero</MenuItem>
            <MenuItem value={20}>Categoria 1</MenuItem>
            <MenuItem value={30}>Category 2</MenuItem>
          </Select>
        </Grid>
      </React.Fragment>
    )
  }
  const expandablePart = () => {
    return (
      <span>
        <Grid item component={FormControl} className="pr-2 mt-3 align-center" xs={12} xl={6}>
          <FormControlLabel control={<Checkbox checked={true} onChange={() => console.log('do something on check')} />} label="Checkbox" />
          <FormControlLabel control={<Checkbox checked={false} onChange={() => console.log('do something on check')} />} label="Checkbox" />

          <RadioGroup row defaultValue="b" name="radio-buttons-group">
            <FormControlLabel value="a" control={<Radio />} label="Radio 1" />
            <FormControlLabel value="b" control={<Radio />} label="Radio 2" />
          </RadioGroup>
        </Grid>
        <Grid item component={FormControl} className="pr-2 mt-3 align-center" xs={12} xl={6}>
          <TextField
            id="filled-search"
            label="Buscar por nombre"
            type="search"
            className="mr-2"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FontAwesomeIcon icon={faSearch} />
                </InputAdornment>
              ),
            }} />
          <StyledSlider defaultValue={30} aria-label="Disabled slider" />
        </Grid>
      </span>
    )
  }
  const bottomPart = () => {
    return (
      <Grid item xs={12} className="mt-2">
        <Chip label="Filter applied" color="secondary" className="mr-1" onDelete={() => { console.log('on Delete') }} />
        <Chip label="Filter applied" color="secondary" className="mr-1" onDelete={() => { console.log('on Delete') }} />
        <Chip label="Filter applied" color="secondary" className="mr-1" onDelete={() => { console.log('on Delete') }} />
      </Grid>
    )
  }

  return (
    <Box>
      <Grid container spacing={2}>
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
        </Grid>
      </Grid>
      <Grid className="pt-4 pb-4" sx={{ display: "flex", flexDirection: "row-reverse" }}>
        <Button className="ml-2" variant="outlined" color="error">DAR DE BAJA</Button>
        <Button className="ml-2" variant="outlined">GUARDAR</Button>
      </Grid>
      <Grid container className='ml-1'>
        <Grid container>

          <Grid container spacing={2} >
            <Grid item xs={4}>
              <StyledFormHelperText id="nombre-lote-helper-text">Nombre Lote</StyledFormHelperText>
              <OutlinedInput
                id="nombre-lote"
                fullWidth
                placeholder="Nombre"
              // value={values.weight}
              // onChange={handleChange('weight')}
              // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              // aria-describedby="nombre-lote-helper-text"
              // inputProps={{
              //   'aria-label': 'nombre',
              // }}
              />
            </Grid>
            <Grid item xs={8}>
              <StyledFormHelperText id="nombre-lote-helper-text">Descripción</StyledFormHelperText>
              <OutlinedInput
                id="descripcion-lote"
                fullWidth
                placeholder="Descripción"
              // value={values.weight}
              // onChange={handleChange('weight')}
              // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              // aria-describedby="nombre-lote-helper-text"
              // inputProps={{
              //   'aria-label': 'nombre',
              // }}
              />
            </Grid>
          </Grid>

        </Grid>

      </Grid >
      <Divider variant="middle" className="mt-4" />
      <ExpandableFilters
        TopPart={topPart}
        ExpandablePart={expandablePart}
        BottomPart={bottomPart} />
    </Box >
  );
}

export default LotesCarga;