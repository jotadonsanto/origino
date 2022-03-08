import { styled } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';

export const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
 border: 0,
 height: '300px',
 '& .MuiDataGrid-columnHeaders': {
  backgroundColor: '#B4FAAE',
  color: '#40843A',
  borderRadius: 10,
  textAlign: 'left',
 },
 '& .MuiDataGrid-iconSeparator': {
  display: 'none',
 },
 '.MuiDataGrid-cell': {
  textAlign: 'left',
  border: 0,
 },
 '.MuiDataGrid-row': {
  borderRadius: 10,
  marginTop: 10,
  marginBottom: 10,
  height: '400px',
  boxShadow: '0px 2px 5px -2px #828282',
 },
 '.MuiDataGrid-footerContainer': {
  display: 'none',
 },
}));
