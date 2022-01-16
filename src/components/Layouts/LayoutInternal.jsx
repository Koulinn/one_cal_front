import React from 'react'
import { Grid, Container } from '@mui/material'
import layoutInternalCSS from './layoutInternalCSS.js'

function LayoutInternal({ children }) {
    return (
        <Grid item className='layoutInternal' xs={12}>
            <Container sx={{ backgroundColor: '#f3faf4' }}>
                <Grid container sx={layoutInternalCSS}>
                    {children}
                </Grid>
            </Container>
        </Grid>
    )
}

export default LayoutInternal
