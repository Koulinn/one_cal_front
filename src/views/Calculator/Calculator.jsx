import React from 'react'
import LoggedSection from '../LoggedSection/LoggedSection'
import useUser from '../../customHooks/useUser/useUser'
import CalcForm from './CalcForm/CalcForm'

function Calculator() {
    const { userData } = useUser()
    console.log(userData)
    return (
        <LoggedSection>
            <CalcForm />
        </LoggedSection>
    )
}

export default Calculator
