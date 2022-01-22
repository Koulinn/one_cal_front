import React from 'react'
import { Grid, Container } from '@mui/material'
import layoutInternalCSS from './layoutInternalCSS.js'
import useQueries from '../../customHooks/useQueries/useQueries.js'

function LayoutInternal({ children }) {
    const { isTablet } = useQueries()
    return (
        <Grid item className='layoutInternal' xs={12}>
            <Container
                sx={{ backgroundColor: isTablet ? '#f3faf4' : 'transparent' }}
            >
                <Grid container sx={layoutInternalCSS}>
                    {children}
                </Grid>
            </Container>
        </Grid>
    )
}

export default LayoutInternal
