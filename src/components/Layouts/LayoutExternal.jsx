import React from 'react'
import { Grid } from '@mui/material'
import layoutExternalCSS from './layoutExternalCSS'
import { useLocation } from 'react-router-dom'

function LayoutExternal({ children }) {
    const location = useLocation()

    const { pathname } = location

    return (
        <Grid
            container
            id='layoutExternal'
            spacing={2}
            sx={layoutExternalCSS}
            className={pathname === '/' ? 'bg-home' : ''}
        >
            {children}
        </Grid>
    )
}

export default LayoutExternal
