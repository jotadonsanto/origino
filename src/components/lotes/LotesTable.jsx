import React from 'react';
import {
  Stack,
  MenuItem,
  Button,
  Menu,
  Divider,
  ListItemText,
  Box,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPen,
  faFileImport,
  faTrash,
  faEllipsisV,
  faBallPile,
} from '@fortawesome/pro-light-svg-icons';
import { StyledDataGrid } from './LotesTable.styles';

function LotesTable() {
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
      field: 'creacion',
      headerName: 'Creación',
      minWidth: 20,
      sortable: false,
    },
    {
      field: 'lote',
      headerName: 'Lote',
      width: 200,
      cellClassName: 'super-app-theme--cell',
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
      <Box
        sx={{
          '& .super-app-theme--cell': {
            fontWeight: '600',
          }
        }}>
        <StyledDataGrid
          sx={{ paddingTop: 4 }}
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
        /></Box>

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
