import React, { useEffect } from 'react'
import useUser from '../../customHooks/useUser/useUser.js'
import { useNavigate } from 'react-router-dom'

function LoggedSection({ children }) {
    const { user } = useUser()
    const navigateTo = useNavigate()

    useEffect(() => {
        if (user === null) {
            navigateTo('/')
            return <></>
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    if (user) {
        return children
    } else {
        return <div>'Loading'</div>
    }
}

export default LoggedSection
