import React from 'react';
import { StyledSlider } from './ActivosTable.styles';
import { DataGrid } from '@mui/x-data-grid';
import { Stack, Grid, Card, Chip, FormControl, FormControlLabel, InputLabel, Select, MenuItem, Button, Menu, Divider, ListItemIcon, ListItemText, Checkbox, Radio, RadioGroup, TextField, InputAdornment } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faFileImport, faTrash, faMinusCircle, faEllipsisV, faSearch } from '@fortawesome/pro-light-svg-icons';
import Filter from '../common/Filter';

export default function DataTable({ Header }) {
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
  const toggleChecked = () => setExpandedFilters((value) => !value);

  const moreActionsButton = (row) => {
    return (
      <span
        id='basic-button'
        aria-controls='basic-menu'
        aria-label='More'
        onClick={(event) => handleClick(event, row)}
      >
        <FontAwesomeIcon icon={faEllipsisV} />
      </span>
    );
  };
  const columns = [
    {
      field: 'id',
      headerName: 'ID de Caravana',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'raza',
      headerName: 'Raza',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      sortable: false,
    },
    {
      field: 'especie',
      headerName: 'Especie',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      sortable: false,
    },
    {
      field: 'sexo',
      headerName: 'Sexo',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      sortable: false,
    },
    {
      field: 'categoria',
      headerName: 'Categoria',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      sortable: false,
    },
    {
      field: 'nacimiento',
      headerName: 'Fecha de Nacimiento',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      sortable: false,
    },
    {
      field: 'more',
      headerName: '',
      width: 20,
      align: 'center',
      headerAlign: 'center',
      sortable: false,
      renderCell: moreActionsButton,
    },
  ];
  const rows = [
    {
      id: 'SS111-S011',
      raza: 'Angus',
      especie: 'Bovina',
      sexo: 'Macho',
      categoria: 'Ternero',
      nacimiento: '23/04/2020',
    },
    {
      id: 'SS111-S012',
      raza: 'Angus',
      especie: 'Bovina',
      sexo: 'Macho',
      categoria: 'Ternero',
      nacimiento: '23/04/2020',
    },
    {
      id: 'SS111-S013',
      raza: 'Angus',
      especie: 'Bovina',
      sexo: 'Macho',
      categoria: 'Ternero',
      nacimiento: '23/04/2020',
    },
    {
      id: 'SS111-S014',
      raza: 'Angus',
      especie: 'Bovina',
      sexo: 'Macho',
      categoria: 'Ternero',
      nacimiento: '23/04/2020',
    },
    {
      id: 'SS111-S015',
      raza: 'Angus',
      especie: 'Bovina',
      sexo: 'Macho',
      categoria: 'Ternero',
      nacimiento: '23/04/2020',
    },
    {
      id: 'SS111-S016',
      raza: 'Angus',
      especie: 'Bovina',
      sexo: 'Macho',
      categoria: 'Ternero',
      nacimiento: '23/04/2020',
    },
    {
      id: 'SS111-S017',
      raza: 'Angus',
      especie: 'Bovina',
      sexo: 'Macho',
      categoria: 'Ternero',
      nacimiento: '23/04/2020',
    },
  ];

  return (
    <div>
      <Filter />
      <Stack
        direction='row'
        justifyContent='flex-start'
        alignItems='stretch'
        className={`${selectedItems.length > 0 ? 'show' : 'hide'}`}
      >
        <Button
          className='mr-2 mb-4'
          variant='outlined'
          color='primary'
          size='small'
          startIcon={<FontAwesomeIcon icon={faPen} />}
        >
          EDITAR
        </Button>
        <Button
          className='mr-2 mb-4'
          variant='outlined'
          color='primary'
          size='small'
          startIcon={<FontAwesomeIcon icon={faFileImport} />}
        >
          TRANSFERIR
        </Button>
        <Button
          className='mr-2 mb-4'
          variant='outlined'
          color='primary'
          size='small'
          startIcon={<FontAwesomeIcon icon={faTrash} />}
        >
          DAR DE BAJA
        </Button>
      </Stack>
      <DataGrid
        rows={rows}
        columns={columns}
        pFiltroSize={5}
        rowsPerPFiltroOptions={[5]}
        checkboxSelection
        onSelectionModelChange={(item) => setSelectedItems(item)}
        disableColumnFilter
        disableColumnMenu
        disableSelectionOnClick
        autoHeight
      />
      <Menu
        id='basic-menu'
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
        <Divider className='mt-0 mb-0' />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faMinusCircle} />
          </ListItemIcon>
          <ListItemText>Something 5</ListItemText>
        </MenuItem>
        <Divider className='mt-0 mb-0' />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faMinusCircle} />
          </ListItemIcon>
          <ListItemText>Something 4</ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
}