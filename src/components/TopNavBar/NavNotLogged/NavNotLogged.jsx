import React from 'react'
import Stack from '@mui/material/Stack'
import TopNavigationItem from '../TopNavigationItem/TopNavigationItem'
import CTAButton from '../../CTAButton/CTAButton'

function NavNotLogged() {
    return (
        <nav>
            <Stack spacing={3} direction='row'>
                <TopNavigationItem text='login' url={'/login'} />
                <CTAButton text='Join now' url={'/register'} />
            </Stack>
        </nav>
    )
}

export default NavNotLogged
