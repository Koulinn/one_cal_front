import React from 'react'
import LoggedSection from '../LoggedSection/LoggedSection'
import CalcForm from './CalcForm/CalcForm'
import UserDashboard from './UserDashboard/UserDashboard'

function Calculator() {
    return (
        <LoggedSection>
            <CalcForm />
            <UserDashboard />
        </LoggedSection>
    )
}

export default Calculator
