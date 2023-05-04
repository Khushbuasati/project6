import React from 'react';
import { Stack, Box, Table, Grid, TableRow, TableCell, TableBody } from '@mui/material';
import { useTheme, styled } from "@mui/material/styles";
import CircleIcon from '@mui/icons-material/Circle';
import CollapseCard from '../../UIComponents/collapseCard';
import bounseChart from '../../assets/images/bounseChart.png';
import chrome from '../../assets/images/chrome.png';
import IE from '../../assets/images/IE.png';
import firefox from '../../assets/images/firefox.png';

const TableCellData = styled(TableCell)<any>(({ theme }) => ({
    fontSize: '12px', color: theme.palette.common.black,
}));

function BounseRateCard() {
    const theme = useTheme();
    return (
        <CollapseCard title="Bounse Rate by Browser">
            <Stack sx={{ padding: '0.5rem 1rem' }} justifyContent="center">
                <Box component='img' src={bounseChart} width="50%" sx={{margin: 'auto'}} />
                <Box width='100%' sx={{marginTop: '0.5rem'}}>
                    <Table>
                        <TableBody>
                            {['Chrome', 'IE', 'Firefox'].map((item: string, index: number) => (
                                <TableRow
                                    key={item}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCellData>
                                        <Grid sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box component='img' src={index === 0 ? chrome : index === 1 ? IE : firefox} width="8%" sx={{ mr: 1 }} />{item}
                                        </Grid>
                                    </TableCellData>
                                    <TableCellData>
                                        <CircleIcon sx={{
                                            color: index === 0 ? theme.palette.primary.main : index === 1 ? theme.palette.error.main : theme.palette.blue.dark,
                                            fontSize: '10px', marginBottom: '-1px', marginRight: '3px'
                                        }}
                                        />{`${index === 0 ? '4,678' : index === 1 ? '3,789' : '2,137'}, visits`}
                                    </TableCellData>
                                    <TableCellData>{index === 0 ? '68%' : index === 1 ? '55%' : '45%'}</TableCellData>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>

            </Stack>

        </CollapseCard>
    )
}

export default BounseRateCard;