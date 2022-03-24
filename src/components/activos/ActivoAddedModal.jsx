import React, { useEffect } from 'react';
import { Grid, Dialog, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/pro-light-svg-icons';

function ActivoAddedModal({ open, toggleModal }) {
  // onLoad set timeout to close dialog
  useEffect(() => {
    setTimeout(() => {
      toggleModal(false)
    }, 4500);
  }, [toggleModal]);

  return (
    <Dialog
      onClose={() => toggleModal(false)}
      open={open}>
      <IconButton
        aria-label="close"
        onClick={() => toggleModal(false)}
        sx={{
          position: 'absolute',
          right: '8px',
          top: '8px',
        }}>
        <CloseIcon />
      </IconButton>
      <DialogTitle className="text-center mt-4 mb-4">
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <FontAwesomeIcon icon={faCheckCircle} color="#61B15A" size="2x" className="mb-2"/>
          </Grid>
          <Grid item xs={12}>
            La carga de activos<br/>fue <b>exitosa.</b>
          </Grid>
        </Grid>
      </DialogTitle>
    </Dialog>
  );
}

export default ActivoAddedModal;