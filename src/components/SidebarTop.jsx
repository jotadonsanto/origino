import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import ApartmentIcon from '@mui/icons-material/Apartment';
import StoreIcon from '@mui/icons-material/Store';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TopItems = [
  {
    name: 'Cadena de suministro',
    icon: 'AirportShuttleIcon',
  },
  {
    name: 'Empresa',
    icon: 'ApartmentIcon',
  },
  {
    name: 'Establecimiento',
    icon: 'StoreIcon',
  },
  {
    name: 'Activo',
    icon: 'assignmentInd',
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
`

const StyledAccordionSummary = styled(AccordionSummary)`
  padding: 0 8px;
  min-height: 32px;
  .MuiAccordionSummary-content {
    align-items: center;
    font-size: 14px;
    margin: 0;
  }
`

function SidebarTop() {
  return (
    <Box component={Card} variant="outlined" sx={{ display: 'flex', flexDirection: 'column',  p: 2, boxShadow: '0px 4px 35px rgba(109, 102, 119, 0.2)', border: 'none', borderRadius: '10px', position: 'absolute', zIndex: 1  }}>
      <StyledButton variant="contained">Inicio</StyledButton>
      {TopItems.map((item, index) => (
        <StyledAccordion sx={{ marginTop: 1 }}>
          <StyledAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={index}
            id={index}
          >
            <Box component={item.icon} sx={{ marginRight: 1, fontSize: '1rem' }} />
            {item.name}
          </StyledAccordionSummary>
          <AccordionDetails>
            Lorem akjnsjda akhbsdi ahs dia sdiha sdi asiud aiu  iu asiu duiasidhais hi ihab sdiu
          </AccordionDetails>
        </StyledAccordion>
      ))}
    </Box>
  );
}

export default SidebarTop;