import React from 'react'
import { Stack, Divider, Avatar, Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import PaperRoot from "../../UIComponents/paper";
import Title from '../../UIComponents/title';
import SubText from '../../UIComponents/subText';

function AverageCard({ title, Icon, value, colorRange, isCircle }: any) {
    const theme = useTheme();
    return (
        <PaperRoot sx={{ marginTop: '0.5rem' }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Title title={title} />
                <Avatar
                    sx={{
                        backgroundImage: `linear-gradient(to right, ${colorRange[0]}, ${colorRange[1]})`,
                        width: 32, height: 32
                    }}
                    variant="rounded"
                >
                    {isCircle ?
                        <Box
                            sx={{
                                background: theme.palette.background.paper,
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                borderRadius: '50%',
                                height: '12px',
                                width: '12px',
                            }}
                        >
                            <Icon sx={{ fontSize: '10px', color: theme.palette.common.black }} />
                        </Box>
                        : <Icon sx={{ fontSize: '12px' }} />}
                </Avatar>
            </Stack>
            <Title title={value} style={{ fontSize: '22px', marginTop: '0.3rem' }} />
            <Stack direction="row" alignItems="center" spacing={1}>
                <SubText details="+23%" style={{ color: theme.palette.success.main }} />
                <SubText details="from last Month" />
            </Stack>
            <Stack direction="row" alignItems='center' spacing={2} sx={{marginBottom: '1.3rem', marginTop: '0.7rem'}}>
                <Stack sx={{marginRight: '1rem'}}>
                    <Title title="23%" style={{ fontWeight: 'normal' }} />
                    <SubText details="Weekly" />
                </Stack>
                <Divider sx={{ height: 34, mr: 2, ml: 2, mt: 0.5 }} orientation="vertical" />
                <Stack sx={{marginRight: '1rem'}}>
                    <Title title="56%" style={{ fontWeight: 'normal' }} />
                    <SubText details="Monthly" />
                </Stack>
                <Divider sx={{ height: 34, mr: 2, ml: 2, mt: 0.5 }} orientation="vertical" />
                <Stack sx={{marginRight: '1rem'}}>
                    <Title title="79%" style={{ fontWeight: 'normal' }} />
                    <SubText details="Totla" />
                </Stack>
            </Stack>
        </PaperRoot>
    )
}

export default AverageCard;