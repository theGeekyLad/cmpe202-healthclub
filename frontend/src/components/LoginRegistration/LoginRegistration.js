import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

import AppContext from 'context';

import { Grid, Container, FormGroup, FormHelperText } from '@mui/material';

import services from 'services';
import util from 'util';

function LoginRegistration(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState('');

  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  let [isRegistration, setIsRegistration] = useState(props.registration);

  let [refresh, setRefresh] = useState(true);

  const { context, setContext } = useContext(AppContext);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setContext({
        ...context,
        path: ['Profile', isRegistration ? 'Registration' : 'Login']
      });
    })
  }, [isRegistration]);

  // --------------------------------------

  const handleToggle = (e) => {
    isRegistration = e.target.value === 'register' ? true : false;
    setIsRegistration(isRegistration);
  };

  const validateInputs = () => {
    setErrorName('');
    setErrorEmail('');
    setErrorPassword('');
    if (isRegistration && !name) setErrorName('Name cannot be empty');
    if (!email) setErrorEmail('Email cannot be empty');
    if (!password) setErrorPassword('Password cannot be empty');
    return (!isRegistration || name) && email && password;
  };

  const handleSubmit = async () => {
    if (validateInputs()) {

      if (isRegistration) {
        //   const res = await services.register(name, email, password);
        //   if (res == null)
        //     setContext({
        //       ...context,
        //       toast: {
        //         message: getLoginOrRegText() + ' failed!',
        //         severity: 'error'
        //       }
        //     });
        //   else {
        //     util.completeLoginOrReg(name, email);
        //     setContext({
        //       ...context,
        //       toast: {
        //         message: getLoginOrRegText() + ' success!',
        //         severity: 'success'
        //       }
        //     });
        //     navigate("/home");
        //   }
        // } else {
        //   const res = await services.login(email, password);
        //   if (res == null)
        //     setContext({
        //       ...context,
        //       toast: {
        //         message: getLoginOrRegText() + ' failed!',
        //         severity: 'error'
        //       }
        //     });
        //   else {
        //     util.completeLoginOrReg(res.data.text, email);
        //     setContext({
        //       ...context,
        //       toast: {
        //         message: getLoginOrRegText() + ' success!',
        //         severity: 'success'
        //       }
        //     });
        //     navigate("/home");
        //   }
      }

      util.completeLoginOrReg('John Doe', email);

      setContext({
        ...context,
        toast: util.getToast("You've been logged in!", 'success')
      });

      // reloads this component
      setRefresh(!refresh);
    }
  }

  const getLoginOrRegText = () => {
    return isRegistration ? 'Registration' : 'Login'
  }

  return (
    <div className="page-login-registration" key={refresh}>
      <FormGroup>
        <Container maxWidth="lg">

          {/* name and sign out button */}
          <Grid container spacing={2}>
            <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', mt: '1rem' }}>
              <ToggleButtonGroup
                size='large'
                color="primary"
                value={isRegistration ? 'register' : 'login'}
                exclusive
                onChange={handleToggle}
                aria-label="Platform"
              >
                <ToggleButton value="login">Login</ToggleButton>
                <ToggleButton value="register">Register</ToggleButton>
              </ToggleButtonGroup>
            </Grid>
          </Grid>

          {isRegistration ?
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12}>
                <FormControl error={errorName} fullWidth>
                  <TextField error={errorName} label="Name" variant="outlined" onInput={(e) => setName(e.target.value)} />
                  <FormHelperText>{errorName}</FormHelperText>
                </FormControl>
              </Grid>
            </Grid>
            : ''
          }

          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <FormControl error={errorEmail} fullWidth>
                <TextField error={errorEmail} label="Email" variant="outlined" onInput={(e) => setEmail(e.target.value)} />
                <FormHelperText>{errorEmail}</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <FormControl error={errorPassword} fullWidth variant="outlined">
                <InputLabel>Password</InputLabel>
                <OutlinedInput error={errorPassword}
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  onInput={(e) => setPassword(e.target.value)}
                />
                <FormHelperText>{errorPassword}</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <Button variant="contained" size="large" onClick={handleSubmit}>Submit</Button>
            </Grid>
          </Grid>
        </Container>
      </FormGroup>
    </div>
  );
}

export default LoginRegistration;
