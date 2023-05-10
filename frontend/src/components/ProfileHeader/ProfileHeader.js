import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Add } from '@mui/icons-material';

import { Grid, Container } from '@mui/material';

function ProfileHeader(props) {

  return (
    <div className="component-profile-header">

      {/* header */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={6}>
          <Typography variant='h5'>{props.title}</Typography>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: 'end' }}>
          <Button size='small' variant="outlined" startIcon={<Add />}>
            Add {props.actionButton}
          </Button>
        </Grid>
      </Grid>

    </div>
  );
}

export default ProfileHeader;
