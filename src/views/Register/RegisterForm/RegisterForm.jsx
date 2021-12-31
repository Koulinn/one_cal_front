import React from 'react'
import { Button, Box, TextField } from '@mui/material'
import useRegisterForm from './useRegisterForm.js'
import RegisterAlerts from './RegisterAlerts.jsx'
import GoogleButton from 'react-google-button'

function RegisterForm() {
    const [
        requestStatus,
        handleRegisterForm,
        handlePassword,
        isValidPassword,
        passwordMsg,
        emailValidation,
        isValidEmail,
        handleGoogleSignUp,
    ] = useRegisterForm()

    return (
        <Box component='form' onSubmit={handleRegisterForm}>
            <TextField
                id='email'
                label='E-mail'
                variant='standard'
                fullWidth
                type='email'
                error={!isValidEmail}
                onChange={(e) => emailValidation(e)}
            />
            <TextField
                id='password'
                label='Password'
                variant='standard'
                fullWidth
                type={'password'}
                onChange={(e) => handlePassword(e.target.value)}
                error={!isValidPassword}
                helperText={passwordMsg}
            />
            <RegisterAlerts requestStatus={requestStatus} />
            <Button type='submit' disabled={!isValidPassword || !isValidEmail}>
                Join!
            </Button>
            or
            <GoogleButton
                onClick={handleGoogleSignUp}
                label={'Join with Google'}
            />
        </Box>
    )
}

export default RegisterForm
