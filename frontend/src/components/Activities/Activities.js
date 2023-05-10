import React, { useEffect, useContext, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { List, ListItem, ListItemText, Divider, ListItemButton, ListItemIcon } from '@mui/material';
import { Accordion, AccordionActions, AccordionSummary, AccordionDetails } from '@mui/material';
import { FormGroup, FormControl, TextField, FormHelperText } from '@mui/material';
import { ExpandMore, Add } from '@mui/icons-material';

import { Grid, Container } from '@mui/material';

import './Activities.scss'
import ProfileHeader from 'components/ProfileHeader/ProfileHeader';

function Activities() {
  const [activityType, setActivityType] = useState('');
  const [loggedDate, setLoggedDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const [errorActivityType, setErrorActivityType] = useState('');
  const [errorLoggedDate, setErrorLoggedDate] = useState('');
  const [errorStartTime, setErrorStartTime] = useState('');
  const [errorEndTime, setErrorEndTime] = useState('');

  const [checked, setChecked] = useState([false, false, false, false]);

  // --------------------------------

  const handleToggle = (i) => {
    checked[i] = !checked[i];
    setChecked(checked);
  };

  const validateInputs = () => {
    setErrorActivityType('');
    setErrorLoggedDate('');
    setErrorStartTime('');
    setErrorEndTime('');

    if (!activityType) setErrorActivityType('Activity type cannot be empty.')
    if (!loggedDate) setErrorLoggedDate('Logged date cannot be empty.')
    if (!startTime) setErrorStartTime('Start time cannot be empty.')
    if (!endTime) setErrorEndTime('End time cannot be empty.')

    return activityType && loggedDate && startTime && endTime;
  }

  const handleSave = () => {
    if (validateInputs()) {
      // @TODO api call
      // @TODO add this activity to props.activities
      return true;
    }
    return false;
  }

  // --------------------------------

  return (
    <div className="component-activities">

      {/* header */}
      <ProfileHeader title="Activities" actionButton="Activity" bottomSheetTitle="Add Activity" bottomSheetOnSave={handleSave}>

        {/* bottom sheet content */}
        <FormGroup>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <FormControl error={errorActivityType} fullWidth>
                <TextField value={activityType} error={errorActivityType} label="Activity Type" variant="outlined" onInput={(e) => setActivityType(e.target.value)} />
                <FormHelperText>{errorActivityType}</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <FormControl error={errorLoggedDate} fullWidth>
                <TextField value={loggedDate} error={errorLoggedDate} label="Logged Date" variant="outlined" onInput={(e) => setLoggedDate(e.target.value)} />
                <FormHelperText>{errorLoggedDate}</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <FormControl error={errorStartTime} fullWidth>
                <TextField value={startTime} error={errorStartTime} label="Start Time" variant="outlined" onInput={(e) => setStartTime(e.target.value)} />
                <FormHelperText>{errorStartTime}</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <FormControl error={errorEndTime} fullWidth>
                <TextField value={endTime} error={errorEndTime} label="End Time" variant="outlined" onInput={(e) => setEndTime(e.target.value)} />
                <FormHelperText>{errorEndTime}</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
        </FormGroup>

      </ProfileHeader>

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
