import React, { useEffect, useContext, useRef } from 'react';
import Typography from '@mui/material/Typography';
import { Button, ButtonGroup, ListItemButton } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Accordion, AccordionActions, AccordionSummary, AccordionDetails } from '@mui/material';
import { List, ListItem, ListItemText } from '@mui/material';
import { ExpandMore, Add } from '@mui/icons-material';

import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

import AppContext from 'context';

import './Admin.css';
import { Grid, Container } from '@mui/material';
import WeeklySchedule from 'components/WeeklySchedule/WeeklySchedule';
import Activities from 'components/Activities/Activities';
import ProfileHeader from 'components/ProfileHeader/ProfileHeader';

function Admin() {
  const { context, setContext } = useContext(AppContext);

  const refChart = useRef();

  useEffect(() => {
    setContext({
      ...context,
      path: ['Admin']
    });
  }, []);

  // -----------------------------------

  const users = [
    'Faizan Shaikh',
    'Ira Sharma',
    'Rahul Pillai'
  ]

  // -----------------------------------

  const chartButtonGroup = [
    {
      title: 'Day',
      handleClick() { }
    },
    {
      title: 'Weekday',
      handleClick() { }
    },
    {
      title: 'Weekend',
      handleClick() { }
    }
  ];

  return (
    <div className="component-admin">
      <Container maxWidth="md">

        {/* username */}
        <Grid container spacing={3}>

          {/* page title */}
          <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', mt: '1rem' }}>
            <Typography variant="h2">Control Panel</Typography>
          </Grid>

          <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', mt: '1rem' }}>
            <Card sx={{ width: '100%' }}>
              <CardContent>
                {/* card header */}
                <Grid container spacing={2}>
                  <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
                    <ProfileHeader noAction title="Visitors" actionButton="Class" bottomSheetTitle="Select Classes" buttonGroup={chartButtonGroup} />
                  </Grid>
                  {/* <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                    <ButtonGroup variant="outlined" aria-label="text button group">
                      {chartButtonGroup.map(button =>
                        <Button onClick={button.handleClick}>{button.title}</Button>
                      )}
                    </ButtonGroup>
                  </Grid> */}
                </Grid>

                <Typography>
                  Current Visitors
                </Typography>
                <Typography variant="h5">
                  11
                </Typography>

                {/* chart.js */}
                <Bar ref={refChart} sx={{ mt: 1.5 }} data={{
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                  datasets: [{
                    label: 'My First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(255, 159, 64, 0.2)',
                      'rgba(255, 205, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(201, 203, 207, 0.2)'
                    ],
                    borderColor: [
                      'rgb(255, 99, 132)',
                      'rgb(255, 159, 64)',
                      'rgb(255, 205, 86)',
                      'rgb(75, 192, 192)',
                      'rgb(54, 162, 235)',
                      'rgb(153, 102, 255)',
                      'rgb(201, 203, 207)'
                    ],
                    borderWidth: 1
                  }]
                  ,
                }} />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: '1rem' }}>
            <Grid spacing={0} item xs={12}>

              <Grid item xs={12}>
                <ProfileHeader noAction title="Users Controls" actionButton="Class" bottomSheetTitle="Select Classes" />
              </Grid>

              <Grid item xs={12}>
                {users.map(user =>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMore />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>{user}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <List>
                        <ListItemButton>
                          <ListItemText
                            primary="Checkin"
                            secondary="Approve member checkin"
                          />
                        </ListItemButton>

                        <ListItemButton>
                          <ListItemText
                            primary="Checkout"
                            secondary="Approve member checkout"
                          />
                        </ListItemButton>

                        <ListItemButton>
                          <ListItemText
                            primary="Free Trial"
                            secondary="Grant access to a free trial"
                          />
                        </ListItemButton>

                        <ListItemButton>
                          <ListItemText
                            primary="Profile"
                            secondary="Jump to profile view for this user"
                          />
                        </ListItemButton>
                      </List>
                    </AccordionDetails>
                  </Accordion>
                )}
              </Grid>

            </Grid>
          </Grid>

        </Grid>

      </Container>
    </div>
  );
}

export default Admin;
