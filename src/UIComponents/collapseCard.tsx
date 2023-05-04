import React, { useState } from 'react';
import { Box, Grid, Stack, Paper, Collapse, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTheme } from '@mui/material/styles';
import Title from './title';

export default function CollapseCard({ children, title, sx={} }: any) {
    const theme = useTheme();
    const [checked, setChecked] = useState(true);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <Collapse in={checked} collapsedSize={56}>
            <Paper sx={{ mt: 1, mb: 1, paddingTop: '0.5rem', ...sx }} elevation={3}>
                <Box>
                    <Grid sx={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 1rem' }}>
                        <Title title={title} />
                        <Stack direction="row" alignItems="center" onClick={handleChange}>
                            {checked ?
                                <KeyboardArrowUpIcon sx={{ color: theme.palette.secondary.dark, cursor: 'pointer' }} />
                                : <KeyboardArrowDownIcon sx={{ color: theme.palette.secondary.dark, cursor: 'pointer' }} />}
                            {checked ? <CloseIcon sx={{ fontSize: '15px', color: theme.palette.secondary.dark, cursor: 'pointer' }} /> : null}
                        </Stack>
                    </Grid>
                    <Divider />
                    {children}
                </Box>
            </Paper>
        </Collapse>
    );
}
