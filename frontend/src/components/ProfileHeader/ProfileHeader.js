import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Add } from '@mui/icons-material';

import { Grid, Container } from '@mui/material';
import BottomSheet from 'components/BottomSheet/BottomSheet';

function ProfileHeader(props) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="component-profile-header">

      {/* header */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={6}>
          <Typography variant='h5'>{props.title}</Typography>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: 'end' }}>
          <Button size='small' variant="outlined" startIcon={<Add />} onClick={handleOpen}>
            Add {props.actionButton}
          </Button>
        </Grid>
      </Grid>

      <BottomSheet title={props.bottomSheetTitle} open={open} onClose={() => setOpen(false)} onSave={props.bottomSheetOnSave}>
        {props.children}
      </BottomSheet>

    </div>
  );
}

export default ProfileHeader;
