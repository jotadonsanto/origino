import React from 'react';
import { Button, FormControl, InputLabel, Select, MenuItem, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBallPile } from '@fortawesome/pro-light-svg-icons';

function AddLoteModal({ open, closeModal }) {
  const [selectedLote, setSelectedFilter] = React.useState('');
  const changeLote = (event) => {
    setSelectedFilter(event.target.value);
  };

  return (
  <Dialog onClose={closeModal} open={open}>
    <DialogTitle className="d-flex flex-column align-center text-center mr-4 ml-4">
      <FontAwesomeIcon icon={faBallPile} color="#61B15A" size="lg" className="mb-1 mt-2"/>
      Seleccione el lote para agregar<br/>los activos
    </DialogTitle>
    <DialogContent className="d-flex flex-column align-center pt-2">
      <FormControl fullWidth>
        <InputLabel id="test">Lote</InputLabel>
        <Select
          labelId="test"
          value={selectedLote}
          label="Filtro"
          onChange={changeLote}
        >
          <MenuItem value={10}>Lote 1</MenuItem>
          <MenuItem value={20}>Lote 2</MenuItem>
          <MenuItem value={30}>Lote 3</MenuItem>
        </Select>
        <div className="d-flex align-center justify-center mt-4">
          <Button className="ml-2" variant="outlined" onClick={closeModal} color="error">Cancelar</Button>
          <Button className="ml-2" variant="contained" onClick={closeModal}>Aceptar</Button>
        </div>
      </FormControl>
    </DialogContent>
  </Dialog>
  );
}

export default AddLoteModal;