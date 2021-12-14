import React from 'react';
import styled from 'styled-components';
import { Button, Popover, Card, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/pro-light-svg-icons';

const StyledCard = styled(Card)`
  max-width: 15rem;
  min-widht: 240px;
`

function PopoverApplyAll({applyAllId, applyAllOpen, applyAllCell, closeApplyAll}) {
  return (
    <Popover
      id={applyAllId}
      open={applyAllOpen}
      anchorEl={applyAllCell}
      onClose={closeApplyAll}
      anchorOrigin={{
          vertical: 'center',
          horizontal: 'left',
      }}
      transformOrigin={{
          vertical: 'center',
          horizontal: 'right',
      }}>
      <StyledCard className="p-2 d-flex flex-column">
          <FontAwesomeIcon icon={faInfoCircle} className="mb-1" color="#61B15A" />
          <Typography variant="body2" component="p">
          ¿Querés aplicar este valor a todos los activos?
          </Typography>
          <div className="d-flex mt-2 justify-end">
          <Button variant="outlined" className="mr-2" onClick={closeApplyAll}>No Aplicar</Button>
          <Button variant="contained" onClick={closeApplyAll}>Si, aplicar</Button>
          </div>
      </StyledCard>
    </Popover>
  );
}

export default PopoverApplyAll;