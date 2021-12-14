import React from 'react';
import styled from 'styled-components';
import { Button, Popover, Card, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/pro-light-svg-icons';

const StyledCard = styled(Card)`
  max-width: 10rem;
  min-width: 160px;
`
function PopoverErrorMesssage({errorId, errorOpen, errorCell, closeError, error}) {
  return (
    <Popover
      id={errorId}
      open={errorOpen}
      anchorEl={errorCell}
      onClose={closeError}
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
          <Typography variant="body2" component="p" className="mb-1">{ error }</Typography>
          <Button variant="text" className="align-self-end" onClick={closeError}>Entendido</Button>
      </StyledCard>
    </Popover>
  );
}

export default PopoverErrorMesssage;