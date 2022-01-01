import React from 'react'
import LoggedSection from '../LoggedSection/LoggedSection'
import useUser from '../../customHooks/useUser/useUser'

function Calculator() {
    const { userData } = useUser()
    return (
        <LoggedSection>
            <p>Calculatorrrrr</p>
        </LoggedSection>
    )
}

export default Calculator
