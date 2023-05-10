import React, { useEffect, useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Accordion, AccordionActions, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore, Add } from '@mui/icons-material';

import { Grid, Container } from '@mui/material';

import './Activities.scss'
import ProfileHeader from 'components/ProfileHeader/ProfileHeader';

function Activities() {

  return (
    <div className="component-activities">

      {/* header */}
      <ProfileHeader title="Activities" actionButton="Activity" />

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography>Running</Typography>
            </Grid>
            <Grid item xs={4} sx={{ textAlign: 'center' }}>
              <Typography>1h 30m</Typography>
            </Grid>
            <Grid item xs={4} sx={{ textAlign: 'end' }}>
              <Typography>05/09/2023</Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Typography paragraph>Start time: 4:30pm</Typography>
          <Typography paragraph>End time: 6pm</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography>Running</Typography>
            </Grid>
            <Grid item xs={4} sx={{ textAlign: 'center' }}>
              <Typography>1h 30m</Typography>
            </Grid>
            <Grid item xs={4} sx={{ textAlign: 'end' }}>
              <Typography>05/09/2023</Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Typography paragraph>Start time: 4:30pm</Typography>
          <Typography paragraph>End time: 6pm</Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}

export default Activities;
