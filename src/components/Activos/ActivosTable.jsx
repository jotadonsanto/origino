import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DescriptionIcon from '@mui/icons-material/Description';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const moreActionsButton = (row) => {
  return (
    <IconButton
      aria-label="More"
      onClick={() => {
          console.log(row)
      }}>
      <MoreVertIcon />
    </IconButton>
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
  { id: 'SS111-S012', raza: 'Angus', especie: 'Bovina', sexo: 'Macho', categoria: 'Ternero', nacimiento: '23/04/2020'},
];

export default function DataTable({Header}) {
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [selectedFilter, setSelectedFilter] = React.useState('');

  const handleChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  return (
    <div>
      <Grid component={Card} container sx={{ p:2, mb: 4, alignItems: 'center' }}>
        <Grid item component={FormControl} sx={{ pr: 2 }} xs={3}>
          <InputLabel id="test">Filtro</InputLabel>
          <Select
            labelId="test"
            value={selectedFilter}
            label="Filtro"
            onChange={handleChange}
            sx={{ width: '100%' }}
          >
            <MenuItem value={10}>Foo Testing</MenuItem>
            <MenuItem value={20}>Value Lorem</MenuItem>
            <MenuItem value={30}>Something here</MenuItem>
          </Select>
        </Grid>
        <Grid item component={FormControl} sx={{ pr: 2 }} xs={3}>
          <InputLabel id="test">Filtro</InputLabel>
          <Select
            labelId="test"
            value={selectedFilter}
            label="Filtro"
            sx={{ width: '100%' }}
          >
            <MenuItem value={10}>Foo Testing</MenuItem>
            <MenuItem value={20}>Value Lorem</MenuItem>
            <MenuItem value={30}>Something here</MenuItem>
          </Select>
        </Grid>
        <Grid item component={FormControl} sx={{ pr: 2 }} xs={3}>
          <InputLabel id="test">Filtro</InputLabel>
          <Select
            labelId="test"
            value={selectedFilter}
            label="Filtro"
            sx={{ width: '100%' }}
          >
            <MenuItem value={10}>Foo Testing</MenuItem>
            <MenuItem value={20}>Value Lorem</MenuItem>
            <MenuItem value={30}>Something here</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="text">Ver mas filtros</Button>
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Chip label="Filter applied" color="secondary" sx={{ mr: 1 }} onDelete={() => {console.log('on Delete')}} />
          <Chip label="Filter applied" color="primary" sx={{ mr: 1 }} onDelete={() => {console.log('on Delete')}} />
        </Grid>
      </Grid>
      {selectedItems.length > 0 && (
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="stretch"
        >
          <Button sx={{ mr: 2, mb: 1 }} variant="outlined" color="primary" size="small" startIcon={<EditIcon color="primary" />}>
            EDITAR
          </Button>
          <Button sx={{ mr: 2, mb: 1 }} variant="outlined" color="primary" size="small" startIcon={<DescriptionIcon color="primary" />}>
            TRANSFERIR
          </Button>
          <Button sx={{ mr: 2, mb: 1 }} variant="outlined" color="primary" size="small" startIcon={<DescriptionIcon color="primary" />}>
            DAR DE BAJA
          </Button>
        </Stack>
      )}
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
      {selectedItems}
    </div>
  );
}