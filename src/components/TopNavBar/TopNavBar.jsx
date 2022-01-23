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
    const { userData, user } = useUser()
    const [userInfo, setUser] = useState()
    const isTablet = useQueries()

    useEffect(() => {
        if (userData) {
            setUser({ userData, user })
        }
    }, [userData])
    return (
        <Grid item xs={12}>
            <Container sx={topNavBarCSS}>
                <LogoName />
                {userInfo && <NavLogged {...userInfo} setUser={setUser} />}
                {!user && !isTablet?.isTablet && <NavNotLogged />}

                {!user && isTablet?.isTablet && <NavMobile />}
            </Container>
        </Grid>
    )
}

export default TopNavBar
