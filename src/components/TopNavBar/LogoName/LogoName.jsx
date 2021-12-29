import React from 'react'
import { Box, Typography } from '@mui/material'
import Logo from '../../Logo/Logo'
import logoNameCSS from './logoNameCSS.js'
import { useNavigate } from 'react-router-dom'

function LogoName() {
    const navigateTo = useNavigate()

    return (
        <Box onClick={() => navigateTo('/')} sx={logoNameCSS}>
            <Logo />
            <Typography sx={{ ml: 2 }} component='h4' variant='h4'>
                OneKcal
            </Typography>
        </Box>
    )
}

export default LogoName
