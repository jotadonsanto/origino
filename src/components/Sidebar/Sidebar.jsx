import React from 'react';
import Box from '@mui/material/Box';
import SidebarTop from './SidebarTop';
import SidebarMenu from './SidebarMenu';
import SidebarUser from './SidebarUser';

function Sidebar() {
  return (
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
          <SidebarTop />
          <SidebarMenu />
          <SidebarUser />
      </Box>
  );
}

export default Sidebar;