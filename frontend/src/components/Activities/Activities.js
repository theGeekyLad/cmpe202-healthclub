import React, { useEffect, useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Grid, Container } from '@mui/material';

import './Activities.scss'

function Activities() {

  return (
    <div className="component-activities">

      <Card>
        <CardContent>
          <Typography variant='h5'>Activities</Typography>
          <Typography variant="body1" sx={{ pt: '1rem' }}>

            {/* content */}
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography>Yoga</Typography>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: 'end' }}>
                <Typography>4pm to 5pm</Typography>
              </Grid>
            </Grid>
            <hr />

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography>Yoga</Typography>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: 'end' }}>
                <Typography>4pm to 5pm</Typography>
              </Grid>
            </Grid>
            <hr />

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography>Yoga</Typography>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: 'end' }}>
                <Typography>4pm to 5pm</Typography>
              </Grid>
            </Grid>
            <hr />

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography>Yoga</Typography>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: 'end' }}>
                <Typography>4pm to 5pm</Typography>
              </Grid>
            </Grid>
            <hr />
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add Class</Button>
        </CardActions>
      </Card>

    </div>
  );
}

export default Activities;
