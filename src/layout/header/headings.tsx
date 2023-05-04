import React from 'react';
import { Grid, Stack, Rating, Divider, Button } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Title from '../../UIComponents/title';
import SubText from '../../UIComponents/subText';

const BuyButton = styled(Button)(({theme}) => ({
    backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.blue.dark})`,
    textTransform: 'capitalize',
    fontSize: '12px',
    height: '35px'
}));

function Headings() {
    const theme = useTheme();
    return (
        <Grid container justifyContent="space-between" sx={{padding: '1.5rem'}}>
            <Grid item>
                <Title title="Analytics" style={{fontSize: '20px'}} />
                <Stack direction="row" spacing={1}>
                    <Title title="Home" />
                    <SubText details="/" />
                    <SubText details="Dashboard D1" />
                </Stack>
            </Grid>
            <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                <Stack>
                    <SubText details="Category" />
                    <Title title="All Categories" />
                </Stack>
                <Divider sx={{ height: 34, mr: 2, ml: 2, mt: 0.5 }} orientation="vertical" />
                <Stack>
                    <SubText details="Customer Rating" />
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Rating value={4} readOnly
                            sx={{
                                '&.MuiRating-root': {
                                    color: theme.palette.yellow.main,
                                }
                            }}
                            size="small"
                        />
                        <Title title="(4.5/5)" />
                    </Stack>
                </Stack>
                <Divider sx={{ height: 34, mr: 2, ml: 2, mt: 0.5 }} orientation="vertical" />
                <BuyButton variant="contained" size="small" sx={{color: theme.palette.background.paper}} startIcon={<ShoppingCartIcon />}>Buy Now</BuyButton>
            </Grid>
        </Grid>
    )
}

export default Headings;