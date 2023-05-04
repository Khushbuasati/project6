import React from 'react';
import { Box, Stack } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import CircleIcon from '@mui/icons-material/Circle';
import barchart from '../../assets/images/barchart.png';
import PaperRoot from "../../UIComponents/paper";
import Title from '../../UIComponents/title';
import SubText from '../../UIComponents/subText';

function BarChartCard() {
    const theme = useTheme();
    return (
        <PaperRoot sx={{ marginTop: '0.5rem' }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Title title="Avg Page Load Time" />
                <SubText
                    details="+32.43%"
                    style={{
                        padding: '2px',
                        backgroundColor: theme.palette.success.main,
                        color: theme.palette.background.paper,
                        borderRadius: '3px',
                        fontSize: '10px'
                    }}
                />
            </Stack>
            <Title title="53.4Sec" style={{ fontSize: '22px', marginTop: '1rem' }} />
            <SubText details="Page load time" />
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ marginTop: '0.5rem', marginBottom: '2rem' }}>
                <SubText details={<><CircleIcon sx={{ fontSize: '10px', marginRight: '3px', color: theme.palette.primary.main }} /> Page Load time</>} style={{ fontSize: '12px', display: 'flex', alignItems: 'baseline' }} />
                <SubText details={<><CircleIcon sx={{ fontSize: '10px', marginRight: '3px' }} /> Avg time on page</>} style={{ fontSize: '12px', display: 'flex', alignItems: 'baseline' }} />
            </Stack>
            <Box component='img' src={barchart} width="90%" />
        </PaperRoot>
    )
}

export default BarChartCard;