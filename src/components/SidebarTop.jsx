import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function SidebarTop() {
  return (
    <Box component={Card} variant="outlined" sx={{ display: 'flex', flexDirection: 'column' }}>
      <Button variant="contained">Inicio</Button>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ExpandMoreIcon />
          asda
        </AccordionSummary>
        <AccordionDetails>
          Lorem akjnsjda akhbsdi ahs dia sdiha sdi asiud aiu  iu asiu duiasidhais hi ihab sdiu
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default SidebarTop;