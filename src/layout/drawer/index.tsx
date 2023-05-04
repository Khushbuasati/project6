import React from 'react';
import { Drawer, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ProfileRoot from './profile';
import SideBarMenu from './sideBarmenu';

const drawerWidth = 220;

export default function DrawerRoot() {
    const theme = useTheme();
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', bgcolor: theme.palette.primary.main, },
            }}
        >
            <Toolbar sx={{ height: '55px' }} />
            <ProfileRoot />
            <SideBarMenu />
        </Drawer>
    );
}
