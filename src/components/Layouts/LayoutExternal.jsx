import { Grid } from '@mui/material'
import React from 'react'
import layoutExternalCSS from './layoutExternalCSS'

function LayoutExternal({ children }) {
    return (
        <Grid container id='layoutExternal' spacing={2} sx={layoutExternalCSS}>
            {children}
        </Grid>
    )
}

export default LayoutExternal
