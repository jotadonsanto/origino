import React from 'react';
import Box from '@mui/material/Box';
import SidebarTop from './SidebarTop';
import SidebarMenu from './SidebarMenu';
import SidebarUser from './SidebarUser';

function Sidebar() {
  return (
    <Box className="d-flex flex-column flex">
      <SidebarTop />
      <SidebarMenu />
      <SidebarUser />
    </Box>
  );
}

export default Sidebar;