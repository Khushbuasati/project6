import React from 'react';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const BorderLinearProgress = styled(LinearProgress)<any>(({ theme, colorsList, index }) => ({
    height: 5,
    marginBottom: '0.5rem',
    borderRadius: 2,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[100],
    },
    [`& .${linearProgressClasses.bar}`]: {
        backgroundColor: colorsList[index] || theme.palette.yellow.main,
    },
}));

interface Props {
    status: string;
    colorsList?: any;
    index?: number;
}

const ProgressBar = ({ status, colorsList, index }: Props) => {
    return (
        <BorderLinearProgress variant="determinate" value={status} colorsList={colorsList} index={index} />
    );
}

export default ProgressBar;