import React from 'react';
import { AppBar, Box, Stack, Toolbar, IconButton, Button, Badge } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CloseFullscreenOutlinedIcon from '@mui/icons-material/CloseFullscreenOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import logo from '../../assets/images/logo.png';

import InputBox from './inputBox';
import Profile from './profile';
import Title from '../../UIComponents/title';

const ButtonRoot = styled(Button)(({ theme }) => ({
    textTransform: 'capitalize',
    fontSize: '12px',
    color: theme.palette.common.black
}));

export default function AppBarRoot() {
    const theme = useTheme();
    return (
        <AppBar
            position="fixed"
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                bgcolor: theme.palette.background.paper,
                boxShadow: '0px 0px 0px -1px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 1px 1px 0px rgba(0,0,0,0.12)',
            }}
        >
            <Toolbar sx={{ padding: '0px !important', display: 'flex', justifyContent: 'space-between', height: '55px' }}>
                <Title title={<><Box component="img" src={logo} width="15%" sx={{ mr: 1 }} />Aronox</>}
                    style={{ display: 'flex', alignItems: 'center', fontSize: '22px', margin: 'auto' }}
                />
                <Stack direction="row" alignItems="center" justifyContent="center" spacing={3}>
                    <FormatAlignLeftIcon sx={{ color: theme.palette.common.black, fontSize: '14px' }} />
                    <ButtonRoot
                        startIcon={<CheckBoxOutlineBlankIcon />}
                        endIcon={<KeyboardArrowDownIcon />}
                        sx={{}}
                    >
                        Projects
                    </ButtonRoot>
                    <ButtonRoot
                        startIcon={<SettingsOutlinedIcon />}
                        endIcon={<KeyboardArrowDownIcon />}
                    >
                        Settings
                    </ButtonRoot>
                    <InputBox />
                    <IconButton><CloseFullscreenOutlinedIcon sx={{ fontSize: '14px', color: theme.palette.common.black }} /></IconButton>
                    <IconButton>
                        <Badge color="secondary" variant="dot"
                            sx={{
                                '& .MuiBadge-badge': {
                                    backgroundColor: theme.palette.success.main
                                }
                            }}
                        >
                            <NotificationsNoneOutlinedIcon sx={{ fontSize: '14px', color: theme.palette.common.black }} />
                        </Badge>
                    </IconButton>
                    <Profile />
                </Stack>
            </Toolbar>
        </AppBar>
    );
}
