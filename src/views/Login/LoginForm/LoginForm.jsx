import React from 'react'
import { Button, Box, TextField } from '@mui/material'
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
        <Box component='form' onSubmit={handleSubmitLogin}>
            <TextField
                id='email'
                label='E-mail'
                variant='standard'
                fullWidth
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                id='password'
                label='Password'
                variant='standard'
                fullWidth
                value={password}
                type={'password'}
                onChange={(e) => setPassword(e.target.value)}
            />
            <LoginAlerts requestStatus={requestStatus} />
            <Button type='submit'>Access Kcalculator</Button>
            or
            <GoogleButton onClick={handleGoogleLogin} />
        </Box>
    )
}

export default LoginForm
