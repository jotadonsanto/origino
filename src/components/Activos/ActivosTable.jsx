import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import AddIcon from '@mui/icons-material/Add';
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

  return (
    <div>
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(selectedItems.length > 0 && {
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
          }),
        }}
      >
        {selectedItems.length > 0 ? (
          <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {selectedItems.length} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Nutrition
          </Typography>
        )}

        {selectedItems.length > 0 ? (
            <IconButton>
              Acciones
            </IconButton>
        ) : (
            <IconButton>
              NADA
            </IconButton>
        )}
      </Toolbar>

      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
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