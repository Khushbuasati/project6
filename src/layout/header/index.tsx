import React from 'react';
import Grid from '@mui/material/Grid';
import TabsRoot from './tabs';
import Headings from './headings';

function Header() {
  return (
    <Grid container>
      <TabsRoot />
      <Headings />
    </Grid>
  )
}

export default Header;