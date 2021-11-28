import React from 'react';
import styled from 'styled-components';
import SidebarPopover from './SidebarPopover';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Popover from '@mui/material/Popover';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faIndustry, faTruck, faBuilding, faDiceD8 } from '@fortawesome/pro-light-svg-icons';

const TopItems = [
  {
    name: 'Cadena de suministro',
    icon: faTruck,
  },
  {
    name: 'Empresa',
    icon: faIndustry,
  },
  {
    name: 'Establecimiento',
    icon: faBuilding,
  },
  {
    name: 'Activo',
    icon: faDiceD8,
  },
]

const StyledButton = styled(Button)`
  font-size: 10px;
  font-weight: 500;
  height: 28px;
  border-radius: 10px;
  box-shadow: none;
`

const StyledAccordion = styled(Accordion)`
  border-radius: 10px!important;
  box-shadow: none;
  border: 1px solid rgba(0, 0, 0, 0.12);
  :before {
    display: none;
  }
  &.Mui-expanded {
    margin-top: 8px!important;
    margin: inherit;
  }
  & .MuiAccordionSummary-root {
    min-height: 32px;
  }
`

const StyledAccordionSummary = styled(AccordionSummary)`
  padding: 0 8px;
  min-height: 32px;
  .MuiAccordionSummary-content {
    align-items: center;
    font-size: 14px;
    margin: 0;
  }
  &.PopoverArrow {
    .MuiAccordionSummary-expandIconWrapper.Mui-expanded {
      transform: rotate(-90deg);
    }
  }
`
const StyledPopover = styled(Popover)`
  .MuiPopover-paper{
    box-shadow: none;
    border-radius: 10px;
    border: 1px solid #eee;
    margin-left: 16px;
  }
`
const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-shadow: 0px 4px 35px rgba(109, 102, 119, 0.2);
  border: none;
  border-radius: 10px;
  position: absolute;
  z-index: 1;
  width: calc(100% - 32px);
`

function SidebarTop() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const EstablecimientoButton = (item) => item.name === 'Establecimiento';

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <StyledBox component={Card} variant="outlined">
      <StyledButton variant="contained">Inicio</StyledButton>
      {TopItems.map((item, index) => (
        <StyledAccordion key={index} className="mt-1">
          <StyledAccordionSummary
            expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
            aria-controls={index}
            id={index}
            {...(EstablecimientoButton(item) && { onClick: handleClick })}
            {...(EstablecimientoButton(item) && { className: 'PopoverArrow' })}
          >
            <FontAwesomeIcon icon={item.icon} />
            &nbsp;&nbsp;&nbsp;
            {item.name}
          </StyledAccordionSummary>

          { EstablecimientoButton(item) &&
            <StyledPopover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'center',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'center',
                horizontal: 'left',
              }}
            >
              <SidebarPopover />
            </StyledPopover>
          }
          { !EstablecimientoButton(item) &&
            <AccordionDetails className="p-0">
              <List dense>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Trash" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="Spam" />
                  </ListItemButton>
                </ListItem>
              </List>
            </AccordionDetails>
          }
        </StyledAccordion>
      ))}
    </StyledBox>
  );
}

export default SidebarTop;