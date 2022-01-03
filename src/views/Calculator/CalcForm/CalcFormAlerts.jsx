import React from 'react'
import AlertMsg from '../../../components/AlertMsg/AlertMsg'

function CalcFormAlerts({ requestStatus }) {
    if (requestStatus === 'success') {
        return <AlertMsg severity='success' text='Meal added successfully' />
    }

    if (requestStatus === 'loading') {
        return <AlertMsg severity='info' text={`Loading, just a sec`} />
    }

    if (requestStatus === 'failure') {
        return <AlertMsg severity='error' text={`Meal not added, try later`} />
    }

    if (requestStatus === 'serverFailure') {
        return (
            <AlertMsg
                severity='serverFailure'
                text={`Sorry server just died, try again in few moments`}
            />
        )
    }

    return <></>
}

export default CalcFormAlerts
