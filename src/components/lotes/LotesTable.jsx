import React from 'react';
import {
 Stack,
 Grid,
 Box,
 Chip,
 FormControl,
 FormControlLabel,
 MenuItem,
 Button,
 Menu,
 Divider,
 ListItemText,
 Checkbox,
 Radio,
 RadioGroup,
 TextField,
 InputAdornment,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
 faFileImport,
 faTrash,
 faEllipsisV,
 faBallPile,
 faSearch,
 faPen,
} from '@fortawesome/pro-light-svg-icons';
import { StyledDataGrid } from './LotesTable.styles';
import ExpandableFilters from '../common/ExpandableFilters';

const FechaOption = [
 {
  value: '1',
  label: 'Fecha 1',
 },
 {
  value: '2',
  label: 'Fecha 2',
 },
 {
  value: '3',
  label: 'Fecha 3',
 },
];

function LotesTable() {
 const [selectedItems, setSelectedItems] = React.useState([]);
 const [anchorEl, setAnchorEl] = React.useState(null);

 // data filter
 const [selectedFilter, setSelectedFilter] = React.useState('');
 const [expandedFilters, setExpandedFilters] = React.useState();
 const open = Boolean(anchorEl);
 const [filtro, setFiltro] = React.useState('');
 const handleChangeFiltro = (event) => {
  setFiltro(event.target.value);
 };

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

 const topPart = () => {
  return (
   <React.Fragment>
    <Grid item component={FormControl} xs={12} xl={6}>
     <TextField
      id='filled-search'
      label='Buscar Lote'
      fullWidth
      type='search'
      className='mr-2'
      InputProps={{
       startAdornment: (
        <InputAdornment position='start'>
         <FontAwesomeIcon icon={faSearch} />
        </InputAdornment>
       ),
      }}
     />
    </Grid>
    <Grid item component={FormControl} className='pr-2' xs={12} xl={3}>
     <TextField
      id='outlined-select-currency'
      select
      label='Fecha'
      value={filtro}
      onChange={handleChangeFiltro}
      fullWidth
     >
      {FechaOption.map((option) => (
       <MenuItem key={option.value} value={option.value}>
        {option.label}
       </MenuItem>
      ))}
     </TextField>
    </Grid>
   </React.Fragment>
  );
 };
 const expandablePart = () => {
  return (
   <span>
    <Grid
     item
     component={FormControl}
     className='pr-2 mt-3 align-center'
     xs={12}
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
      <FormControlLabel value='a' control={<Radio />} label='Radio 1' />
      <FormControlLabel value='b' control={<Radio />} label='Radio 2' />
     </RadioGroup>
    </Grid>
   </span>
  );
 };
 const bottomPart = () => {
  return (
   <Grid item xs={12} className='mt-2'>
    <Chip
     label='Filter applied'
     color='secondary'
     className='mr-1'
     onDelete={() => {
      console.log('on Delete');
     }}
    />
    <Chip
     label='Filter applied'
     color='secondary'
     className='mr-1'
     onDelete={() => {
      console.log('on Delete');
     }}
    />
    <Chip
     label='Filter applied'
     color='secondary'
     className='mr-1'
     onDelete={() => {
      console.log('on Delete');
     }}
    />
   </Grid>
  );
 };

 const columns = [
  {
   field: 'creacion',
   headerName: 'Creación',
   minWidth: 20,
   sortable: false,
  },
  {
   field: 'lote',
   headerName: 'Lote',
   width: 200,
   cellClassName: 'font-weight-medium',
   sortable: false,
  },
  {
   field: 'descripcion',
   headerName: 'Descripción',
   flex: 1,
   width: 200,
   align: 'left',
   headerAlign: 'left',
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
   id: 'SS111-S012',
   creacion: '23/04/2020',
   lote: 'NOMBRE DEL LOTE',
   descripcion: 'Descripción del lote',
  },
  {
   id: 'SS111-S013',
   creacion: '23/04/2020',
   lote: 'NOMBRE DEL LOTE',
   descripcion: 'Descripción del lote',
  },
  {
   id: 'SS111-S015',
   creacion: '23/04/2020',
   lote: 'NOMBRE DEL LOTE',
   descripcion: 'Descripción del lote',
  },
 ];

 return (
  <Box>
   <ExpandableFilters
    TopPart={topPart}
    ExpandablePart={expandablePart}
    BottomPart={bottomPart}
   />

   <Grid className='d-flex justify-end'>
    <Button variant='contained'>AGREGAR NUEVO LOTE</Button>
   </Grid>

   <Stack
    direction='row'
    display={`${selectedItems.length > 1 ? 'block' : 'none'}`}
   >
    <Button
     className='mr-2 mt-2'
     variant='outlined'
     color='primary'
     size='small'
     startIcon={<FontAwesomeIcon icon={faPen} />}
    >
     EDITAR
    </Button>
    <Button
     className='mr-2 mt-2'
     variant='outlined'
     color='primary'
     size='small'
     startIcon={<FontAwesomeIcon icon={faFileImport} />}
    >
     TRANSFERIR
    </Button>
    <Button
     className='mr-2 mt-2'
     variant='outlined'
     color='primary'
     size='small'
     startIcon={<FontAwesomeIcon icon={faTrash} />}
    >
     DAR DE BAJA
    </Button>
    <Button
     className='mr-2 mt-2'
     variant='outlined'
     color='primary'
     size='small'
     startIcon={<FontAwesomeIcon icon={faBallPile} />}
    >
     AGREGAR A LOTE
    </Button>
   </Stack>
   <Box>
    <StyledDataGrid
     className='pt-4'
     rows={rows}
     columns={columns}
     onSelectionModelChange={(item) => setSelectedItems(item)}
     pagination={true}
     autoPageSize
     disableSelectionOnClick
     checkboxSelectionVisibleOnly={true}
     checkboxSelection
     disableColumnFilter
     disableColumnSelector
     disableColumnMenu
    />
   </Box>

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
     <ListItemText>Opción 1</ListItemText>
    </MenuItem>
    <Divider className='mt-0 mb-0' />
    <MenuItem onClick={handleClose}>
     <ListItemText>Opción 2</ListItemText>
    </MenuItem>
   </Menu>
  </Box>
 );
}

export default LotesTable;
