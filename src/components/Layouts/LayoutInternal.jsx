import React from 'react'
import { Grid, Container } from '@mui/material'
import layoutInternalCSS from './layoutInternalCSS.js'
import useQueries from '../../customHooks/useQueries/useQueries.js'
import { useLocation } from 'react-router-dom'

function LayoutInternal({ children }) {
    const { isTablet } = useQueries()
    const path = useLocation()

    const { pathname } = path

    return (
        <Grid item className='layoutInternal' xs={12}>
            <Container
                sx={{
                    backgroundColor:
                        isTablet && pathname !== '/'
                            ? '#f3faf4'
                            : 'transparent',
                }}
            >
                <Grid container sx={layoutInternalCSS}>
                    {children}
                </Grid>
            </Container>
        </Grid>
    )
}

export default LayoutInternal
