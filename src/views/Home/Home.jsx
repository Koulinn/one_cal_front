import React, { useEffect } from 'react'
import useUser from '../../customHooks/useUser/useUser.js'
import { useNavigate } from 'react-router-dom'
import { Container, Typography } from '@mui/material'
import homeCSS from './homeCSS.js'
import { Box } from '@mui/system'

function Home() {
    const { requestStatus } = useUser()
    const navigateTo = useNavigate()

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
            <Typography component={'h1'} variant={'h1'} textAlign={'center'}>
                Let's burn kcalories
            </Typography>

            <button className='main-CTA cursor-pointer'>
                I want to control calories{' '}
            </button>
        </Container>
    )
}

export default Home
