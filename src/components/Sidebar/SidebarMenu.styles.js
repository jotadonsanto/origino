
import styled from 'styled-components';
import { Box } from '@mui/material';
import { faHome, faShoppingCart, faClipboardList, faIdCard, faKey, faTag, faCommentAltCheck, faCalendar, faBallPile, faDiceD10, faBuilding, faIndustry, faGear, faIdBadge } from '@fortawesome/pro-light-svg-icons';

export const Items = {
  regular: [
    {
      name: 'Activos',
      icon: faDiceD10,
    },
    {
      name: 'Lote',
      icon: faBallPile,
    },
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
  ],
  establecimiento: [
    {
      name: 'Empresas',
      icon: faIndustry,
    },
    {
      name: 'Establecimientos',
      icon: faBuilding,
    },
    {
      name: 'Usuarios',
      icon: faIdBadge,
    },
    {
      name: 'Actividad',
      icon: faDiceD10,
    },
    {
      name: 'Settings',
      icon: faGear,
    }
  ],
}
export const StyledBox = styled(Box)`
  flex: 1;
  z-index: 0;
`