import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/pro-light-svg-icons';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { StyledSlider } from '../activos/ActivosTable.styles';

function Filter() {
  const [value, setValue] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [expandedFilters, setExpandedFilters] = useState();

  const handleChange = (event) => {
    setSelectedFilter(event.target.value);
  };
  const handleClick = (event, row) => {
    console.log('do something with this row');
    console.log(row);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const toggleChecked = () => setExpandedFilters((value) => !value);

  return (
    <Box>
      {/* Filtros */}
      <Grid component={Card} container className='p-2 mb-4 mt-2 align-center'>
        <Grid item component={FormControl} className='pr-2' xs={4}>
          <TextField
            id='outlined-basic'
            variant='outlined'
            type='search'
            className='mr-2'
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
        <Grid item component={FormControl} className='pr-2' xs={3}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label='Fecha'
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item component={FormControl} className='pr-2' xs={3}>
          <InputLabel id='test'>Tipo de Actividad</InputLabel>
          <Select
            labelId='test'
            value={selectedFilter}
            label='Filtro'
            className='w-100'
          >
            <MenuItem value={10}>Actividad 1</MenuItem>
            <MenuItem value={20}>Actividad 2</MenuItem>
            <MenuItem value={30}>Actividad 3</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={2} className='d-flex justify-center'>
          <Button variant='text' onClick={toggleChecked}>
            {!expandedFilters ? 'Ver mas filtros' : 'Cerrar filtros'}
          </Button>
        </Grid>
        {expandedFilters && (
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
                <FormControlLabel
                  value='a'
                  control={<Radio />}
                  label='Radio 1'
                />
                <FormControlLabel
                  value='b'
                  control={<Radio />}
                  label='Radio 2'
                />
              </RadioGroup>
            </Grid>
            <Grid
              item
              component={FormControl}
              className='pr-2 mt-3 align-center'
              xs={12}
              xl={12}
            >
              <InputLabel id='test'>Raza</InputLabel>
              <Select
                labelId='test'
                value={selectedFilter}
                label='Filtro'
                onChange={handleChange}
                className='w-100'
              >
                <MenuItem value={10}>Bovina</MenuItem>
                <MenuItem value={20}>Angus</MenuItem>
                <MenuItem value={30}>Wagyu</MenuItem>
              </Select>
              <StyledSlider defaultValue={30} aria-label='Disabled slider' />
            </Grid>
          </span>
        )}
      </Grid>
      {/* Fin Filtros */}
    </Box>
  );
}

export default Filter;
