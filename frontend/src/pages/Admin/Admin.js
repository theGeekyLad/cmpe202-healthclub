import React, { useEffect, useContext } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import AppContext from 'context';

import './Admin.css';
import { Grid, Container } from '@mui/material';
import WeeklySchedule from 'components/WeeklySchedule/WeeklySchedule';
import Activities from 'components/Activities/Activities';

function Admin() {
  const { context, setContext } = useContext(AppContext);

  useEffect(() => {
    setContext({
      ...context,
      path: 'Admin'
    });
  });

  return (
    <div className="component-admin">
      <Container maxWidth="md">
        <Grid container spacing={2}>
          {/* name and sign out button */}
          <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', mt: '1rem' }}>
            <Typography variant="h2">Control Panel</Typography>
          </Grid>
        </Grid>

        {/* username */}
        <Grid container spacing={2} sx={{ mt: '1rem' }}>

          <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', mt: '1rem' }}>
            <Card sx={{ width: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                  Visitors
                </Typography>
                <Typography sx={{ mt: 1.5 }}>
                  Current Visitors
                </Typography>
                <Typography variant="h5">
                  11
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

        </Grid>

      </Container>
    </div>
  );
}

export default Admin;
