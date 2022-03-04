import React, { useContext } from 'react';
import SidebarContext from './../../context/SidebarContext';
import { TopItems, StyledButton, StyledAccordion, StyledAccordionSummary, StyledPopover, StyledBox } from './SidebarTop.styles';
import SidebarPopover from './SidebarPopover';
import { Card, AccordionDetails, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/pro-light-svg-icons';

function SidebarTop() {
  const { menu } = useContext(SidebarContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const EstablecimientoButton = (item) => item.name === 'Establecimiento';

  const showTopItems = (value) => value === 'regular' ? true : false;

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <StyledBox component={Card} variant="outlined">
      <StyledButton variant="contained">{menu === 'regular' ? 'Inicio' : 'Volver a operar'}</StyledButton>
      {showTopItems(menu) &&
        <span>
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
        </span>
      }
    </StyledBox>
  );
}

export default SidebarTop;