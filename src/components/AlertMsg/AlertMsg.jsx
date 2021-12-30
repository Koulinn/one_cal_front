import React from 'react'
import Alert from '@mui/material/Alert'

function AlertMsg({ severity, text }) {
    return <Alert severity={severity}>{text}</Alert>
}

export default AlertMsg
