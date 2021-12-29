import { Grid } from '@mui/material'
import React from 'react'

function LayoutExternal({ children }) {
    return (
        <Grid container spacing={2}>
            {children}
        </Grid>
    )
}

export default LayoutExternal
