import React from 'react';
import PopoverErrorMesssage from './PopoverErrorMessage';
import PopoverApplyAll from './PopoverApplyAll';
import ErrorCell from './ErrorCell';
import FixedCell from './FixedCell';

function TableCell({hasErrors, isFixed, params, showError, errorId, errorOpen, errorCell, closeError, applyAllId, applyAllOpen, applyAllCell, closeApplyAll}) {
    return (
      <React.Fragment>
        { hasErrors(params) ? <ErrorCell params={params} showError={showError} /> :
          isFixed(params) ? <FixedCell params={params}/> :
          <span>{params.value}</span> }
        <PopoverErrorMesssage
          errorId={errorId}
          errorOpen={errorOpen}
          errorCell={errorCell}
          closeError={closeError}
          error={'El peso no puede ser mayor a 130 KG'} />
        <PopoverApplyAll
          applyAllId={applyAllId}
          applyAllOpen={applyAllOpen}
          applyAllCell={applyAllCell}
          closeApplyAll={closeApplyAll}/>
      </React.Fragment>
    );
}

export default TableCell;