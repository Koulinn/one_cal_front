import React from 'react'
import { Grid, Container } from '@mui/material'
import LogoName from './LogoName/LogoName'
import TopNavItems from './TopNavItems/TopNavItems'
import topNavBarCSS from './topNavBarCSS.js'

function TopNavBar() {
    return (
        <Grid item xs={12}>
            <Container sx={topNavBarCSS}>
                <LogoName />
                <TopNavItems />
            </Container>
        </Grid>
    )
}

export default TopNavBar
