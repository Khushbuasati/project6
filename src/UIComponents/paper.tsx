import React from 'react'
import Paper from '@mui/material/Paper';

function PaperRoot({ children, sx={} }: any) {
    return (
        <Paper sx={{padding: '1rem 1rem 0.5rem', ...sx}}>{children}</Paper>
    )
}

export default PaperRoot;