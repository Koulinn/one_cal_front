import React, { useEffect } from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DateTimePicker from '@mui/lab/DateTimePicker'
import useCalcForm from './useCalcForm.js'
import CalcFormAlerts from './CalcFormAlerts.jsx'
import CalcFormCSS from './CalcFormCSS.js'
import useQueries from '../../../customHooks/useQueries/useQueries.js'

function CalcForm({ sendNewRequest, setSendNewRequest }) {
    const {
        formValues: { name, calories, time_eaten },
        inputHandlers,
        submitForm,
        requestStatus,
    } = useCalcForm()
    const { isTablet } = useQueries()

    useEffect(() => {
        if (requestStatus === 'success') {
            setSendNewRequest(!sendNewRequest)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [requestStatus])

    return (
      <Grid
        item
        sm={12}
        md={6}
        className={isTablet ? "simpleDashboard-mobile" : ""}
        sx={CalcFormCSS}
      >
        <Box component='form' sx={{ px: 3 }} onSubmit={submitForm}>
          <Typography
            component='h5'
            variant='h5'
            textAlign={"center"}
            sx={{ mt: 3 }}
          >
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
            onChange={(e) => inputHandlers(e.target.value, "name")}
            sx={{ mt: 3, mb: 2 }}
          />
          <TextField
            id='calories'
            label='Calories'
            variant='standard'
            fullWidth
            type='number'
            error={false}
            value={calories}
            onChange={(e) => inputHandlers(e.target.value, "calories")}
            sx={{ mt: 2, mb: 5 }}
          />
          <Box fullWidth id='date-picker-wrapper' sx={{ mt: 2 }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label='Meal time'
                value={time_eaten}
                onChange={(value) => inputHandlers(value, "time_eaten")}
              />
            </LocalizationProvider>
          </Box>

          <CalcFormAlerts requestStatus={requestStatus} />

          <Button
            sx={{ mt: 5, mb: 3 }}
            fullWidth
            type='submit'
            disabled={name === "" ? true : false}
          >
            Add meal
          </Button>
        </Box>
      </Grid>
    );
}

export default CalcForm
