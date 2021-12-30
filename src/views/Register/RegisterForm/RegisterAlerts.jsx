import React from 'react'
import AlertMsg from '../../../components/AlertMsg/AlertMsg'

function RegisterAlerts({ requestStatus }) {
    if (requestStatus === 'success') {
        return (
            <AlertMsg
                severity='info'
                text='Welcome to OneKcal! You are being redirected'
            />
        )
    }
    if (requestStatus === 'failure') {
        return <AlertMsg severity='error' text='User not created' />
    }
    if (requestStatus === 'emailExistent') {
        return (
            <AlertMsg
                severity='error'
                text='Email already registered in OneKcal'
            />
        )
    }
    if (requestStatus === 'serverError') {
        return (
            <AlertMsg
                severity='error'
                text={`Can't a new account at this moment`}
            />
        )
    }

    return <></>
}

export default RegisterAlerts
