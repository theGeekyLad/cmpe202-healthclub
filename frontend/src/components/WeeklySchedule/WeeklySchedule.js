import React, { useEffect, useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { List, ListItem, ListItemText, Divider } from '@mui/material';
import { style } from '@mui/material';
import { Add } from '@mui/icons-material';

import { Grid, Container } from '@mui/material';

import './WeeklySchedule.scss'
import ProfileHeader from 'components/ProfileHeader/ProfileHeader';

function WeeklySchedule() {

  return (
    <div className="component-weekly-schedule">

      {/* header */}
      <ProfileHeader title="Weekly Schedule" actionButton="Class" />

      <Card>
        <CardContent>
          <List className='my-list' component="nav" aria-label="mailbox folders">
            <ListItem>
              <ListItemText primary="Yoga" secondary="4pm to 5pm" />
            </ListItem>
            <Divider />
            <ListItem divider>
              <ListItemText primary="Yoga" secondary="4pm to 5pm" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Yoga" secondary="4pm to 5pm" />
            </ListItem>
            <Divider light />
            <ListItem>
              <ListItemText primary="Yoga" secondary="4pm to 5pm" />
            </ListItem>
          </List>
        </CardContent>
      </Card>

    </div>
  );
}

export default WeeklySchedule;
