import React from 'react';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';

function ChipRoot({ style = {}, title, colorsList=[], index=0 }: any) {
    const theme = useTheme();
    return (
        <Chip label={title}
            sx={{
                height: '17px',
                color: theme.palette.background.paper,
                bgcolor: colorsList[index] || theme.palette.error.main,
                fontSize: '10px', fontWeight: 'bold',
                marginBottom: '1.3rem',
                '& .MuiChip-label': {
                    paddingLeft: '6px',
                    paddingRight: '7px'
                },
                ...style,
            }}
        />
    )
}

export default ChipRoot;