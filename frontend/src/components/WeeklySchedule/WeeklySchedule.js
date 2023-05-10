import React, { useEffect, useContext, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, IconButton } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { List, ListItem, ListItemText, Divider, ListItemButton, ListItemIcon } from '@mui/material';
import { style } from '@mui/material';
import { Add, Comment } from '@mui/icons-material';

import { Grid, Container } from '@mui/material';

import './WeeklySchedule.scss'
import ProfileHeader from 'components/ProfileHeader/ProfileHeader';

function WeeklySchedule() {
  const [checked, setChecked] = useState([false, false, false, false]);

  const handleToggle = (i) => {
    checked[i] = !checked[i];
    setChecked(checked);
  };

  return (
    <div className="component-weekly-schedule">

      {/* header */}
      <ProfileHeader title="Weekly Schedule" actionButton="Class" bottomSheetTitle="Select Classes">

        {/* bottom sheet content */}
        <List className='my-list' component="nav" aria-label="mailbox folders">
          {/* @TODO include real classes array */}
          {[0, 1, 2, 3].map((value, i) => {
            const labelId = `checkbox-list-label-${value}`;
            return (
              <ListItem
                divider
                key={value}
                disablePadding
              >
                <ListItemButton role={undefined} onClick={() => handleToggle(i)} dense>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked[i]}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary="Yoga" secondary="4pm to 5pm" />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

      </ProfileHeader>

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
