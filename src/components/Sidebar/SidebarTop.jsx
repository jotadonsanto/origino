import React from 'react';
import styled from 'styled-components';
import SidebarPopover from './SidebarPopover';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Popover from '@mui/material/Popover';

const TopItems = [
  {
    name: 'Cadena de suministro',
    icon: 'Expandmoreicon',
  },
  {
    name: 'Empresa',
    icon: 'Expandmoreicon',
  },
  {
    name: 'Establecimiento',
    icon: 'Expandmoreicon',
  },
  {
    name: 'Activo',
    icon: 'Expandmoreicon',
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
    <Box component={Card} variant="outlined" sx={{ display: 'flex', flexDirection: 'column',  p: 2, boxShadow: '0px 4px 35px rgba(109, 102, 119, 0.2)', border: 'none', borderRadius: '10px', position: 'absolute', zIndex: 1, width: 'calc(100% - 32px)'  }}>
      <StyledButton variant="contained">Inicio</StyledButton>
      {TopItems.map((item, index) => (
        <StyledAccordion key={index} sx={{ marginTop: 1 }}>
          <StyledAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={index}
            id={index}
            onClick={EstablecimientoButton(item) && handleClick}
            className={EstablecimientoButton(item) && 'PopoverArrow'}
          >
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
            <AccordionDetails sx={{ p: 0 }}>
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
    </Box>
  );
}

export default SidebarTop;