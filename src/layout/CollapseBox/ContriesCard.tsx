import React from 'react';
import { Box, Table, Grid, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { useTheme, styled } from "@mui/material/styles";
import CollapseCard from '../../UIComponents/collapseCard';
import Paper from '@mui/material/Paper';
import c1 from '../../assets/images/india.png';
import c2 from '../../assets/images/c_2.png';
import c3 from '../../assets/images/c_3.png';
import c4 from '../../assets/images/c_4.png';
import c5 from '../../assets/images/c_5.png';

const list = [
    { img: c1, name: 'India', user: '8,785', sessions: '56.7', conversion: '37.84' },
    { img: c2, name: 'Afghanistan', user: '2,786', sessions: '27.3', conversion: '52.32' },
    { img: c3, name: 'Germany', user: '1,266', sessions: '43.5', conversion: '12.93' },
    { img: c4, name: 'United State', user: '2,786', sessions: '23.4', conversion: '21.65' },
    { img: c5, name: 'Australia', user: '3,786', sessions: '12.7', conversion: '73.92' }
];

const TableCellData = styled(TableCell)<any>(({ theme }) => ({
    fontSize: '12px', color: theme.palette.common.black,
}));

const TableHeaderCell = styled(TableCell)<any>(({ theme }) => ({
    fontSize: '12px', color: theme.palette.common.black,
    fontWeight: 'bold'
}));

function ContriesCard() {
    const theme = useTheme();
    return (
        <CollapseCard title="Top 5 Contries Origin">
            <Box sx={{padding: '1rem 1.5rem'}}>
                <Paper sx={{boxShadow: 'none', border: `1px solid ${theme.palette.secondary.main}`, borderRadius: '2px'}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableHeaderCell>COUNTRIES</TableHeaderCell>
                                <TableHeaderCell>USERS</TableHeaderCell>
                                <TableHeaderCell>% SESSIONS</TableHeaderCell>
                                <TableHeaderCell>CONVERSION RATE</TableHeaderCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {list.map((row: any) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCellData>
                                        <Grid sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box component='img' src={row.img} width="20%" sx={{ mr: 1 }} />{row.name}
                                        </Grid>
                                    </TableCellData>
                                    <TableCellData>{row.user}</TableCellData>
                                    <TableCellData>{row.sessions}%</TableCellData>
                                    <TableCellData>{row.conversion}%</TableCellData>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </Box>
        </CollapseCard>
    )
}

export default ContriesCard;