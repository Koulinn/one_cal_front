import React from 'react'
import AlertMsg from '../../../components/AlertMsg/AlertMsg'

function LoginAlerts({ requestStatus }) {
    if (requestStatus === 'success') {
        return (
            <AlertMsg
                severity='info'
                text='Welcome to OneKcal! How are you today?'
            />
        )
    }
    if (requestStatus === 'wrongPassword') {
        return (
            <AlertMsg
                severity='error'
                text={`Password and e-mail provided doesn't match`}
            />
        )
    }

    if (requestStatus === 'failure') {
        return (
            <AlertMsg severity='error' text={`Sorry a problem has happened`} />
        )
    }

    return <></>
}

export default LoginAlerts
