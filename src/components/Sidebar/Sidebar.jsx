import React from 'react';
import { StyledDrawer } from './Sidebar.styles';
import Box from '@mui/material/Box';
import SidebarTop from './SidebarTop';
import SidebarMenu from './SidebarMenu';
import SidebarUser from './SidebarUser';

function Sidebar({mobileOpen, toggleMobileOpen}) {

  return (
    <React.Fragment>
      <StyledDrawer
        variant="permanent"
        anchor="left"
        sx={{
          display: { xs: 'none', sm: 'block' },
        }}>
        <Box className="d-flex flex-column flex">
          <SidebarTop />
          <SidebarMenu />
          <SidebarUser />
        </Box>
      </StyledDrawer>
      <StyledDrawer
        anchor="left"
        open={mobileOpen}
        onClose={() => toggleMobileOpen(false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '50%!important',
          },
          width: '50%!important',
        }}>
        <Box className="d-flex flex-column flex">
          <SidebarTop />
          <SidebarMenu />
          <SidebarUser />
        </Box>
      </StyledDrawer>
    </React.Fragment>
  );
}

export default Sidebar;