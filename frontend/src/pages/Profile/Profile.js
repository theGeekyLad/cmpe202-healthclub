import React, { useEffect, useContext } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import AppContext from 'context';

import './Profile.css';
import { Grid, Container } from '@mui/material';
import WeeklySchedule from 'components/WeeklySchedule/WeeklySchedule';
import Activities from 'components/Activities/Activities';

function Profile() {
  const { context, setContext } = useContext(AppContext);

  useEffect(() => {
    setContext({
      ...context,
      path: 'Profile'
    });
  });

  return (
    <div className="component-profile">
      <Container maxWidth="md">
        <Grid container spacing={2}>
          {/* name and sign out button */}
          <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', mt: '1rem' }}>
            <Typography variant="h2">Hello, Rahul</Typography>
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
            <Button variant="contained">sign out</Button>
          </Grid>
        </Grid>

        {/* username */}
        <Grid container spacing={2} sx={{ mt: '1rem' }}>
          <Grid item xs={6}>
            <Typography>Username</Typography>
            <Typography variant='h5'>rahul.pillai03</Typography>
          </Grid>
        </Grid>

        {/* email */}
        <Grid container spacing={2} sx={{ mt: '1rem' }}>
          <Grid item xs={6}>
            <Typography>Email</Typography>
            <Typography variant='h5'>rahul.pillai03@gmail.com</Typography>
          </Grid>
        </Grid>

        {/* membership */}
        <Grid container spacing={2} sx={{ mt: '1rem' }}>
          <Grid item xs={6}>
            <Typography>Active Membership</Typography>
            <Typography variant='h5'>3 months</Typography>
          </Grid>
        </Grid>

        {/* weekly schedule */}
        <Grid container spacing={2} sx={{ mt: '3rem' }}>
          <WeeklySchedule />
        </Grid>

        {/* activities */}
        <Grid container spacing={2} sx={{ mt: '3rem' }}>
          <Activities />
        </Grid>
      </Container>
    </div>
  );
}

export default Profile;
