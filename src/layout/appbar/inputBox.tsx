import React from 'react';
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';

export default function InputBox() {
    const theme = useTheme();
    return (
        <Paper
            component="form"
            sx={{
                p: '2px 4px', display: 'flex',
                alignItems: 'center', width: 350, boxShadow: 'none',
                border: '1px solid', height: '32px',
                borderRadius: '0px'
            }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1, fontSize: '12px' }}
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search" size='small'>
                <SearchIcon sx={{ fontSize: '14px', color: theme.palette.common.black }} />
            </IconButton>
        </Paper>
    );
}
