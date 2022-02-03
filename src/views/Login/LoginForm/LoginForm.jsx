import React from 'react'
import { Button, Box, TextField, Typography } from '@mui/material'
import useLoginForm from './useLoginForm.js'
import LoginAlerts from './LoginAlerts'
import GoogleButton from 'react-google-button'

function LoginForm() {
    const [
        email,
        password,
        setEmail,
        setPassword,
        handleSubmitLogin,
        requestStatus,
        handleGoogleLogin,
    ] = useLoginForm()

    return (
      <Box component='form' sx={{ mt: 2 }} onSubmit={handleSubmitLogin}>
        <TextField
          id='email'
          label='E-mail'
          variant='standard'
          fullWidth
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mt: 3, mb: 2 }}
        />
        <TextField
          id='password'
          label='Password'
          variant='standard'
          fullWidth
          value={password}
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mt: 2, mb: 3 }}
        />
        <LoginAlerts requestStatus={requestStatus} />
        <Button
          type='submit'
          sx={{ mt: 3 }}
          fullWidth
          disabled={requestStatus === "success" ? true : false}
        >
          Login
        </Button>
        <Typography
          component={"p"}
          variant='p'
          textAlign={"center"}
          sx={{ my: 5 }}
        >
          or
        </Typography>
        <GoogleButton
          onClick={handleGoogleLogin}
          style={{ margin: "32px auto" }}
        />
      </Box>
    );
}

export default LoginForm
