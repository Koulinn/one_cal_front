import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'

import useRegisterForm from './useRegisterForm.js'

function RegisterForm() {
    const [
        requestStatus,
        handleRegisterForm,
        handlePassword,
        isValidPassword,
        passwordMsg,
        emailValidation,
        isValidEmail,
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
                onChange={(e) => emailValidation(e.target.validity.valid)}
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
            <Button type='submit' disabled={!isValidPassword || !isValidEmail}>
                Join!
            </Button>
        </Box>
    )
}

export default RegisterForm
