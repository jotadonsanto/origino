import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/pro-light-svg-icons';

const StyledCellwithError = styled.div`
  width: 100%;
  height: 97%;
  position: relative;
  border: 1px solid #FF0505;
  color: #FF0505;
  background: #FBDFDF;
  font-weight: 500;
  svg{
    position: absolute;
    top: -7px;
    left: 10px;
    background: white;
    border-radius: 1em;
  }
`

function ErrorCell({params, showError}) {
    return (
      <StyledCellwithError>
        <FontAwesomeIcon icon={faInfoCircle} size="1x" onClick={showError}/>
        {params.value}
      </StyledCellwithError>
    );
}

export default ErrorCell;