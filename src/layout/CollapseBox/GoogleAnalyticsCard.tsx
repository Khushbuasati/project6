import React from 'react';
import { Stack, Box } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import Title from '../../UIComponents/title';
import CollapseCard from '../../UIComponents/collapseCard';
import SubText from '../../UIComponents/subText';
import ProgressBar from "../../UIComponents/progressBar";
import ChipRoot from '../../UIComponents/chip';
import img from '../../assets/images/img1.png';

const ProgressBox = ({ title, index }: any) => {
    const theme = useTheme();
    return (
        <Stack sx={{ borderRight: '1px solid', borderBottom: index === 3 ? 'none' : '1px solid', padding: '0.5rem 1rem 0px 0px' }}>
            <Stack direction="row" justifyContent="space-between">
                <Title title={title} style={{ fontWeight: 'normal', fontSize: '12px' }} />
                <SubText details="2019" style={{ fontSize: '12px' }} />
            </Stack>
            <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                <Box sx={{ width: '100%', mr: 5 }}>
                    <ProgressBar
                        status={index === 0 ? '30' : index === 1 ? '50' : index === 2 ? '80' : '75'}
                        colorsList={[
                            theme.palette.yellow.main,
                            theme.palette.primary.main,
                            theme.palette.blue.main,
                            theme.palette.error.main,
                        ]}
                        index={index}
                    />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <ChipRoot
                        title={index === 0 ? '30%' : index === 1 ? '50%' : index === 2 ? '80%' : '75%'}
                        colorsList={[
                            theme.palette.yellow.main,
                            theme.palette.primary.main,
                            theme.palette.blue.main,
                            theme.palette.error.main,
                        ]}
                        index={index}
                    />
                </Box>
            </Box>
        </Stack>
    )
};

function GoogleAnalyticsCard() {
    return (
        <CollapseCard title="Google Analytics Audience Metrics" sx={{ marginTop: '1rem' }}>
            <Stack direction="row" sx={{ padding: '0.5rem 1rem' }}>
                <Box width='100%'>
                    <Stack direction="row" alignItems="baseline" spacing={1}>
                        <Title title="$67,895" style={{ fontSize: '22px' }} />
                        <ChipRoot title="New" />
                    </Stack>
                    {['Page views', 'Users', 'Sessions', 'Unique Visitors'].map((item: string, index: number) => (
                        <ProgressBox title={item} index={index} />
                    ))}
                </Box>
                <Box component='img' src={img} width="60%" sx={{ padding: '1rem 0px 0px 1rem' }} />
            </Stack>

        </CollapseCard>
    )
}

export default GoogleAnalyticsCard;