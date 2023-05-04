import React from 'react';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface Props {
    details: string | any;
    style?: Object;
}

function SubText({ details, style={} }: Props) {
    const theme = useTheme();
    return (
        <Typography sx={{ fontSize: '14px', color: theme.palette.secondary.main, ...style }}>{details}</Typography>
    )
};
export default SubText;
