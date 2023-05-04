import React from 'react';
import { Box, Grid, Stack, CssBaseline, Toolbar } from '@mui/material';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { useTheme } from '@mui/material/styles';

import AppBarRoot from './appbar/index';
import DrawerRoot from './drawer/index';
import Header from './header/index';
import SmallCards from './smallCards/index';
import GoogleAnalyticsCard from './CollapseBox/GoogleAnalyticsCard';
import ContriesCard from './CollapseBox/ContriesCard';
import TrackingCard from './papers/trackingPaper';
import BarChartCard from './papers/barChartCard';
import BounseRateCard from './CollapseBox/BounceRate';
import AverageCard from './papers/averageCard';

export default function ClippedDrawer() {
  const theme = useTheme();
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBarRoot />
      <DrawerRoot />
      <Box component="main" sx={{ pt: 0.5, background: theme.palette.background.default }}>
        <Toolbar />
        <Header />
        <Box sx={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <SmallCards />
          <GoogleAnalyticsCard />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8} md={6}>
              <ContriesCard />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TrackingCard />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <BarChartCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <BounseRateCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Stack spacing={2}>
                <AverageCard
                  title="Avg Bounce Rate"
                  Icon={PriorityHighIcon} value="43.5%"
                  colorRange={[theme.palette.error.main, theme.palette.error.light]}
                  isCircle={true}
                />
                <AverageCard
                  title="Avg Page Per Session"
                  Icon={TextSnippetIcon}
                  value="3.5"
                  colorRange={[theme.palette.primary.main, theme.palette.blue.dark]}
                />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
