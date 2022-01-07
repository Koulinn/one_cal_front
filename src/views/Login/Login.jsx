import React from 'react'
import { Container, Typography } from '@mui/material'
import LoginForm from './LoginForm/LoginForm'
import loginCSS from './loginCSS.js'

function Login() {
    return (
        <Container sx={loginCSS}>
            <Typography
                variant='h5'
                component='h5'
                textAlign={'center'}
                sx={{ mt: 3 }}
            >
                Login
            </Typography>
            <LoginForm />
        </Container>
    )
}

export default Login
