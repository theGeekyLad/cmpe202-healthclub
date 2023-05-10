import React, { useEffect, useContext } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import AppContext from 'context';

import './Profile.css';
import { Grid, Container } from '@mui/material';
import WeeklySchedule from 'components/WeeklySchedule/WeeklySchedule';
import Activities from 'components/Activities/Activities';

import ProfileComponent from 'components/Profile/Profile';
import util from 'util';
import LoginRegistration from 'components/LoginRegistration/LoginRegistration';

function Profile() {
  const { context, setContext } = useContext(AppContext);

  return (
    <div className="component-profile">
      {util.userPresent() ?
        <ProfileComponent />
        : <LoginRegistration />
      }
    </div>
  );
}

export default Profile;
