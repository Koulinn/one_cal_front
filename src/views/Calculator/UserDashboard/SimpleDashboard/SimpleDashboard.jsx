import React from 'react'
import { Grid, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import { Box } from '@mui/system'
import useSimpleDashboard from './useSimpleDashboard.js'

function SimpleDashboard({ calorie_total_today, calorie_total_yesterday }) {
    const { showAddIcon } = useSimpleDashboard(calorie_total_today)

    return (
        <Grid item xs={6}>
            <Typography component='h5' variant='h5' textAlign={'center'}>
                Dashboard
            </Typography>
            <Box
                sx={{
                    position: 'relative',
                    width: 'fit-content',
                    margin: 'auto',
                }}
            >
                <Typography component='h6' variant='h6' textAlign={'center'}>
                    Calories ingested today:
                </Typography>
                <AddIcon
                    className={showAddIcon}
                    sx={{ position: 'absolute', top: '0px' }}
                    fontSize={'large'}
                    color='success'
                />
            </Box>
            <Typography component='p' variant='p' textAlign={'center'}>
                {calorie_total_today
                    ? `${calorie_total_today} Kcal`
                    : `Are you sure that you didn't eat something?`}
            </Typography>

            <Typography component='h6' variant='subtitle1' textAlign={'center'}>
                Calories ingested yesterday:
            </Typography>
            <Typography component='p' variant='p' textAlign={'center'}>
                {calorie_total_yesterday
                    ? `${calorie_total_yesterday} Kcal`
                    : 'Did you starve yesterday?'}
            </Typography>
        </Grid>
    )
}

export default SimpleDashboard
