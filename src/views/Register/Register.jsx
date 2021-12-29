import React from 'react'
import { Container, Typography } from '@mui/material'
import registerCSS from './registerCSS.js'
import RegisterForm from './RegisterForm/RegisterForm.jsx'

function Register() {
    return (
        <Container sx={registerCSS}>
            <Typography variant='h5' component='h5' textAlign={'center'}>
                Register
            </Typography>
            <RegisterForm />
        </Container>
    )
}

export default Register
