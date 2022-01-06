import React from 'react'
import { Grid, Container } from '@mui/material'
import LogoName from './LogoName/LogoName'
import NavNotLogged from './NavNotLogged/NavNotLogged'
import topNavBarCSS from './topNavBarCSS.js'

function TopNavBar() {
    return (
        <Grid item xs={12}>
            <Container sx={topNavBarCSS}>
                <LogoName />
                <NavNotLogged />
            </Container>
        </Grid>
    )
}

export default TopNavBar
