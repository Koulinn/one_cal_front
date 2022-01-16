import React, { useState, useEffect } from 'react'
import { Grid, Container } from '@mui/material'
import LogoName from './LogoName/LogoName'
import NavNotLogged from './NavNotLogged/NavNotLogged'
import topNavBarCSS from './topNavBarCSS.js'
import useUser from '../../customHooks/useUser/useUser.js'
import NavLogged from './NavLogged/NavLogged'
import useQueries from '../../customHooks/useQueries/useQueries.js'
import NavMobile from './NavMobile/NavMobile'

function TopNavBar() {
    const { userData } = useUser()
    const [user, setUser] = useState()
    const isTablet = useQueries()

    useEffect(() => {
        if (userData) {
            setUser(userData)
        }
    }, [userData])
    return (
        <Grid item xs={12}>
            <Container sx={topNavBarCSS}>
                <LogoName />
                {user && <NavLogged {...user} setUser={setUser} />}
                {!user && !isTablet?.isTablet && <NavNotLogged />}

                {!user && isTablet?.isTablet && <NavMobile />}
            </Container>
        </Grid>
    )
}

export default TopNavBar
