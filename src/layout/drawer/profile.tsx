import React from 'react';
import { Box, Avatar, Stack, Button } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import { useTheme, styled } from '@mui/material/styles';
import Profile from '../../assets/images/user.jpg';
import Title from '../../UIComponents/title';
import SubText from '../../UIComponents/subText';

const IconButton = styled(Button)(({ theme }) => ({
    minWidth: '19px',
    padding: '5px 9px',
    borderRadius: '0px'
}))

export default function ProfileRoot() {
    const theme = useTheme();
    return (
        <Box sx={{ textAlign: 'center', marginTop: '1rem' }}>
            <Avatar alt="A" src={Profile} sx={{ margin: 'auto' }} />
            <Title title="Anna Sthesia" style={{ color: theme.palette.background.paper, marginTop: '0.5rem' }} />
            <SubText details="App Developer" style={{ marginBottom: '1rem' }} />
            <Stack direction="row" alignItems="center" justifyContent="space-evenly">
                <IconButton variant="outlined" color='secondary'><SettingsOutlinedIcon sx={{ fontSize: '16px' }} /></IconButton>
                <IconButton variant="outlined" color='secondary'><MailOutlineOutlinedIcon sx={{ fontSize: '16px' }} /></IconButton>
                <IconButton variant="outlined" color='secondary'><PeopleOutlineOutlinedIcon sx={{ fontSize: '16px' }} /></IconButton>
            </Stack>
        </Box>
    );
}
