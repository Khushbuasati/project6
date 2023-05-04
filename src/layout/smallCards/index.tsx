import React from 'react'
import { Grid } from '@mui/material';
import Card from './card';
import {list} from '../../data/smallCards';

function SmallCards() {
  return (
    <Grid container spacing={2}>
        {list.map((item: any, index: number)=>(
            <Grid item xs={12} sm={6} md={3}>
                <Card details={item} index={index} />
            </Grid>
        ))}
    </Grid>
  )
}

export default SmallCards;
