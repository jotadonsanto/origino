import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/pro-light-svg-icons';

const StyledFixedCell = styled.div`
  width: 100%;
  height: 97%;
  border: 1px solid #176510;
  color: #176510;
  background: #DAFFD7;
  font-weight: 500;
  cursor: initial;
  svg {
    margin-left: -1.5rem;
    border-radius: 1em;
  }
`

function FixedCell({params, showError}) {
    return (
      <StyledFixedCell>
        <FontAwesomeIcon icon={faCheckCircle} size="1x" className="mr-1"/>
        {params.value}
      </StyledFixedCell>
    );
}

export default FixedCell;