import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone } from '@fortawesome/pro-light-svg-icons';
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];
function DropZone({children}) {
  const handleChange = (file) => {
    console.log(file)
  };
  return (
    <FileUploader
      handleChange={handleChange}
      name="file"
      types={fileTypes}
      children={children}
    />
  );
}

function DragAndDropInputFile({itemToDrag, color}) {
  console.log(color);
  const colorTheme = color ? color : '#FFA589';
  const StyledDropZone = styled.div`
    border: 2px dashed ${colorTheme};
    border-radius: 4px;
    u {
      cursor: pointer;
    }
    svg path {
      fill: ${colorTheme};
    }
  `
  return (
    <DropZone>
      <StyledDropZone className="d-flex flex-row justify-between align-center pt-2 pb-2 pl-3 pr-3">
        <FontAwesomeIcon size="lg" icon={faClone} className="mr-2"/>
        <Typography variant="caption" component="p" color="text.primary">Arrastrá {itemToDrag ? itemToDrag : 'el archivo'} aquí<br/>o <u>desde tu computadora</u></Typography>
      </StyledDropZone>
    </DropZone>
  );
}

export default DragAndDropInputFile;