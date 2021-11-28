
import styled from 'styled-components';
import { Box } from '@mui/material';
import { faHome, faShoppingCart, faClipboardList, faIdCard, faKey, faTag, faCommentAltCheck, faCalendar } from '@fortawesome/pro-light-svg-icons';

export const MenuItems = [
  {
    name: 'Dashboard',
    icon: faHome,
  },
  {
    name: 'Mercado',
    icon: faShoppingCart,
  },
  {
    name: 'NFT',
    icon: faClipboardList,
  },
  {
    name: 'Titularidad',
    icon: faIdCard,
  },
  {
    name: 'Permisos',
    icon: faKey,
  },
  {
    name: 'Tags',
    icon: faTag,
  },
  {
    name: 'Eventos',
    icon: faCalendar,
  },
  {
    name: 'Actividades',
    icon: faCommentAltCheck,
  }
]
export const StyledBox = styled(Box)`
  flex: 1;
  z-index: 0;
  padding-top: 14rem;
`