import React from 'react'
import { Grid, Container } from '@mui/material'
import layoutInternalCSS from './layoutInternalCSS.js'

function LayoutInternal({ children }) {
    return (
        <Grid item xs={12}>
            <Container>
                <Container sx={layoutInternalCSS}>{children}</Container>
            </Container>
        </Grid>
    )
}

export default LayoutInternal
