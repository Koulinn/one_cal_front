import React, { useState } from 'react'
import LoggedSection from '../LoggedSection/LoggedSection'
import CalcForm from './CalcForm/CalcForm'
import UserDashboard from './UserDashboard/UserDashboard'

function Calculator() {
    const [sendNewRequest, setSendNewRequest] = useState(false)
    return (
        <LoggedSection>
            <CalcForm
                sendNewRequest={sendNewRequest}
                setSendNewRequest={setSendNewRequest}
            />
            <UserDashboard sendNewRequest={sendNewRequest} />
        </LoggedSection>
    )
}

export default Calculator
