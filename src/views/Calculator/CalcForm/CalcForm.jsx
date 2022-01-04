import React, { useEffect } from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DateTimePicker from '@mui/lab/DateTimePicker'
import useCalcForm from './useCalcForm.js'
import CalcFormAlerts from './CalcFormAlerts.jsx'

function CalcForm({ sendNewRequest, setSendNewRequest }) {
    const {
        formValues: { name, calories, time_eaten },
        inputHandlers,
        submitForm,
        requestStatus,
    } = useCalcForm()

    useEffect(() => {
        if (requestStatus === 'success') {
            setSendNewRequest(!sendNewRequest)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [requestStatus])

    return (
        <Grid item xs={6}>
            <Box component='form' onSubmit={submitForm}>
                <Typography component='h5' variant='h5' textAlign={'center'}>
                    Enter meal
                </Typography>
                <TextField
                    id='name'
                    label='Name'
                    variant='standard'
                    fullWidth
                    type='text'
                    error={false}
                    value={name}
                    onChange={(e) => inputHandlers(e.target.value, 'name')}
                />
                <TextField
                    id='calories'
                    label='Calories'
                    variant='standard'
                    fullWidth
                    type='number'
                    error={false}
                    value={calories}
                    onChange={(e) => inputHandlers(e.target.value, 'calories')}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                        renderInput={(props) => <TextField {...props} />}
                        label='Time eaten'
                        value={time_eaten}
                        onChange={(value) => inputHandlers(value, 'time_eaten')}
                    />
                </LocalizationProvider>

                <CalcFormAlerts requestStatus={requestStatus} />

                <Button type='submit'>Add meal</Button>
            </Box>
        </Grid>
    )
}

export default CalcForm
