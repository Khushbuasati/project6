import React from 'react';
import { Box } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Title from '../../UIComponents/title';
import SubText from '../../UIComponents/subText';
import profile from '../../assets/images/user.jpg'

export default function Profile() {
    return (
        <ListItem sx={{ width: 'fit-content' }}>
            <ListItemText
                primary={<Title title="Anna Sthesia" />}
                secondary={<SubText details="appdeveloper" />}
            />
            <ListItemAvatar>
                <Avatar>
                    <Box component="img" src={profile} width="100%" />
                </Avatar>
            </ListItemAvatar>
        </ListItem>
    );
}
