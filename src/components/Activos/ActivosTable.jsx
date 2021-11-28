import React from 'react';
import styled from 'styled-components';
import { DataGrid } from '@mui/x-data-grid';
import { Stack, Grid, Card, Chip, FormControl, FormControlLabel, InputLabel, Select, MenuItem, Button, Menu, Divider, ListItemIcon, ListItemText, Checkbox, Radio, RadioGroup, TextField, InputAdornment, Slider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faFileImport, faTrash, faMinusCircle, faEllipsisV, faSearch } from '@fortawesome/pro-light-svg-icons';

const StyledSlider = styled(Slider)`
  width: 200px;
`

export default function DataTable({Header}) {
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [selectedFilter, setSelectedFilter] = React.useState('');
  const [expandedFilters, setExpandedFilters] = React.useState();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

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
  const toggleChecked = () => setExpandedFilters(value => !value);

  const moreActionsButton = (row) => {
    return (
      <span
        id="basic-button"
        aria-controls="basic-menu"
        aria-label="More"
        onClick={(event) => handleClick(event, row)}>
        <FontAwesomeIcon icon={faEllipsisV} />
      </span>
    )
  }
  const columns = [
    { field: 'id', headerName: 'ID de Caravana', width: 170 },
    { field: 'raza', headerName: 'Raza', width: 170, sortable: false, },
    { field: 'especie', headerName: 'Especie', width: 170, sortable: false, },
    { field: 'sexo', headerName: 'Sexo', width: 170, sortable: false, },
    { field: 'categoria', headerName: 'Categoria', width: 170, sortable: false, },
    { field: 'nacimiento', headerName: 'Fecha de Nacimiento', width: 170, sortable: false, },
    { field: 'more', headerName: '', width: 10, sortable: false, renderCell: moreActionsButton },
  ];
  const rows = [
    { id: 'SS111-S011', raza: 'Angus', especie: 'Bovina', sexo: 'Macho', categoria: 'Ternero', nacimiento: '23/04/2020'},
    { id: 'SS111-S012', raza: 'Angus', especie: 'Bovina', sexo: 'Macho', categoria: 'Ternero', nacimiento: '23/04/2020'},
    { id: 'SS111-S013', raza: 'Angus', especie: 'Bovina', sexo: 'Macho', categoria: 'Ternero', nacimiento: '23/04/2020'},
    { id: 'SS111-S014', raza: 'Angus', especie: 'Bovina', sexo: 'Macho', categoria: 'Ternero', nacimiento: '23/04/2020'},
    { id: 'SS111-S015', raza: 'Angus', especie: 'Bovina', sexo: 'Macho', categoria: 'Ternero', nacimiento: '23/04/2020'},
    { id: 'SS111-S016', raza: 'Angus', especie: 'Bovina', sexo: 'Macho', categoria: 'Ternero', nacimiento: '23/04/2020'},
    { id: 'SS111-S017', raza: 'Angus', especie: 'Bovina', sexo: 'Macho', categoria: 'Ternero', nacimiento: '23/04/2020'},
  ];

  return (
    <div>
      {/* Filtros */}
      <Grid component={Card} container className="p-2 mb-4 mt-2 align-center">
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
        <Grid item xs={3} className="d-flex justify-center">
          <Button variant="text" onClick={toggleChecked}>{!expandedFilters ? 'Ver mas filtros' : 'Cerrar filtros'}</Button>
        </Grid>
        {expandedFilters &&
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
              <TextField id="outlined-search" label="Buscar por nombre" type="search" className="mr-2" />
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
              }}/>
              <StyledSlider defaultValue={30} aria-label="Disabled slider"/>
            </Grid>
          </span>
        }
        <Grid item xs={12} className="mt-2">
          <Chip label="Filter applied" color="secondary" className="mr-1" onDelete={() => {console.log('on Delete')}} />
          <Chip label="Filter applied" color="secondary" className="mr-1" onDelete={() => {console.log('on Delete')}} />
          <Chip label="Filter applied" color="secondary" className="mr-1" onDelete={() => {console.log('on Delete')}} />
        </Grid>
      </Grid>
      {/* Fin Filtros */}

      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="stretch"
        className={`${selectedItems.length > 0 ? "show" : "hide"}`}
      >
        <Button className="mr-2 mb-4" variant="outlined" color="primary" size="small" startIcon={<FontAwesomeIcon icon={faPen} />}>
          EDITAR
        </Button>
        <Button className="mr-2 mb-4" variant="outlined" color="primary" size="small" startIcon={<FontAwesomeIcon icon={faFileImport} />}>
          TRANSFERIR
        </Button>
        <Button className="mr-2 mb-4" variant="outlined" color="primary" size="small" startIcon={<FontAwesomeIcon icon={faTrash} />}>
          DAR DE BAJA
        </Button>
      </Stack>
      <DataGrid
        rows={rows}
        columns={columns}
        pFiltroSize={5}
        rowsPerPFiltroOptions={[5]}
        checkboxSelection
        onSelectionModelChange={item => setSelectedItems(item)}
        disableColumnFilter
        disableColumnMenu
        disableSelectionOnClick
        autoHeight/>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faMinusCircle} />
          </ListItemIcon>
          <ListItemText>Something 1</ListItemText>
        </MenuItem>
        <Divider className="mt-0 mb-0" />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faMinusCircle} />
          </ListItemIcon>
          <ListItemText>Something 5</ListItemText>
        </MenuItem>
        <Divider className="mt-0 mb-0" /><MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faMinusCircle} />
          </ListItemIcon>
          <ListItemText>Something 4</ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
}