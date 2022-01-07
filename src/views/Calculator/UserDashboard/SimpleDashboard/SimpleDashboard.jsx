import React from 'react'
import { Grid, Typography } from '@mui/material'

import { Box } from '@mui/system'
import useSimpleDashboard from './useSimpleDashboard.js'

function SimpleDashboard({ calorie_total_today, calorie_total_yesterday }) {
    const { showEffect } = useSimpleDashboard(calorie_total_today)
    console.log(calorie_total_today)
    return (
        <Grid item xs={6}>
            <Box
                className='card-primary'
                sx={{
                    mb: 5,
                }}
            >
                <Box
                    className={'card-primary-inner-wrapper ' + showEffect}
                    sx={{ my: 3, px: 4 }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            width: 'fit-content',
                            margin: 'auto',
                        }}
                        // className={showAddIcon}
                    >
                        <Typography
                            component='h4'
                            variant='h4'
                            textAlign={'center'}
                            sx={{ mt: 2, mb: 3 }}
                        >
                            Today
                        </Typography>
                    </Box>
                    <Typography
                        component='p'
                        variant='p'
                        textAlign={'center'}
                        sx={{ mb: 1 }}
                    >
                        {calorie_total_today
                            ? `${calorie_total_today} Kcal`
                            : `0000 Kcal`}
                    </Typography>
                </Box>
            </Box>

            <Box className='card-secondary'>
                <Box
                    className='card-secondary-inner-wrapper'
                    sx={{ px: 3, pb: 2 }}
                >
                    <Typography
                        component='h5'
                        variant='h5'
                        textAlign={'center'}
                        sx={{ mt: 2 }}
                    >
                        Yesterday
                    </Typography>
                    <Typography
                        component='p'
                        variant='p'
                        textAlign={'center'}
                        sx={{ mt: 2 }}
                    >
                        {calorie_total_yesterday
                            ? `${calorie_total_yesterday} Kcal`
                            : 'Did you forget it again...'}
                    </Typography>
                </Box>
            </Box>
        </Grid>
    )
}

export default SimpleDashboard
