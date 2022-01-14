import React, { useEffect } from 'react'
import useUser from '../../customHooks/useUser/useUser.js'
import { useNavigate } from 'react-router-dom'
import { Container, Typography, useMediaQuery } from '@mui/material'
import homeCSS from './homeCSS.js'

function Home() {
    const { requestStatus } = useUser()
    const navigateTo = useNavigate()
    const isTablet = useMediaQuery('(max-width:640px)')

    const isUserLogged = () => {
        if (requestStatus === 'success') {
            navigateTo('/calc')

            return <></>
        }
    }

    useEffect(() => {
        isUserLogged()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [requestStatus])

    return (
        <Container id='home' sx={homeCSS}>
            <Typography
                component={'h1'}
                variant={isTablet ? 'h4' : 'h1'}
                textAlign={'center'}
            >
                Let's burn kcalories
            </Typography>

            <button className='main-CTA cursor-pointer'>
                Let's control calories{' '}
            </button>
        </Container>
    )
}

export default Home
