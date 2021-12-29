import { Grid } from '@mui/material'
import React from 'react'

function Layout({ children }) {
    return (
        <Grid container spacing={2}>
            {children}
        </Grid>
    )
}

export default Layout
