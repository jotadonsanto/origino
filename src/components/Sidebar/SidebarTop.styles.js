import styled from 'styled-components';
import { Box, Button, Accordion, AccordionSummary, Popover } from '@mui/material';
import { faIndustry, faTruck, faBuilding, faDiceD8 } from '@fortawesome/pro-light-svg-icons';

export const TopItems = [
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

// export const StyledButton = styled(Button)`
//   font-size: 10px;
//   font-weight: 500;
//   height: 28px;
//   border-radius: 10px;
//   box-shadow: none;
// `

export const StyledAccordion = styled(Accordion)`
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

export const StyledAccordionSummary = styled(AccordionSummary)`
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
export const StyledPopover = styled(Popover)`
  .MuiPopover-paper{
    box-shadow: none;
    border-radius: 10px;
    border: 1px solid #eee;
    margin-left: 16px;
  }
`
export const StyledBox = styled(Box)`
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