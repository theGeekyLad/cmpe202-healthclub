import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Button, ButtonGroup } from '@mui/material';
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
        <Grid item xs={4}>
          <Typography variant='h5'>{props.title}</Typography>
        </Grid>
        {props.buttonGroup ? <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
          <ButtonGroup variant="text" aria-label="text button group">
            {props.buttonGroup.map(button =>
              <Button onClick={button.handleClick}>{button.title}</Button>
            )}
          </ButtonGroup>
        </Grid> : ''}
        <Grid item xs={props.buttonGroup ? 3 : 8} sx={{ display: 'flex', justifyContent: 'end' }}>
          <Button variant="outlined" startIcon={<Add />} onClick={handleOpen}>
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
