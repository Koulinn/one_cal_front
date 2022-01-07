import React from 'react'
import { Container, Typography } from '@mui/material'
import registerCSS from './registerCSS.js'
import RegisterForm from './RegisterForm/RegisterForm.jsx'

function Register() {
    return (
        <Container sx={registerCSS}>
            <Typography
                variant='h5'
                component='h5'
                textAlign={'center'}
                sx={{ mt: 3 }}
            >
                Register
            </Typography>
            <RegisterForm />
        </Container>
    )
}

export default Register
