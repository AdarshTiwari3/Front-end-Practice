import React, { useState } from 'react';
import { Grid, TextField, Button, Box, Typography, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff, AccountCircle, Key } from '@mui/icons-material';
import loginImage from '../../../../assets/images/login2.jpg';
import logoImage from '../../../../assets/images/loginImage.jpg';
import './login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid 
      container 
      className="container"
    >
      <Grid 
        item 
        md={6} 
        xs={12}
        className="imageContainer"
      >
        <img 
          src={loginImage} 
          alt="login" 
          className="image"
        />
      </Grid>
      <Grid 
        item 
        md={6} 
        xs={12}
        className="formContainer"
      >
        <Box 
          className="formBox"
        >
          <Box 
            className="logoBox"
          >
            <p className="logoText">
              Adarsh
            </p>
          </Box>
          <Typography variant="h5" align="center" gutterBottom>
            Login
          </Typography>
          <TextField 
            label="Username" 
            variant="outlined" 
            fullWidth 
            margin="normal"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField 
            label="Password" 
            variant="outlined" 
            type={showPassword ? 'text' : 'password'} 
            fullWidth 
            margin="normal"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth 
            className="loginButton"
          >
            Login
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;
