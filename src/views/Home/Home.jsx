import React, { useEffect } from 'react'
import useUser from '../../customHooks/useUser/useUser.js'
import { useNavigate } from 'react-router-dom'

function Home() {
    const { requestStatus } = useUser()
    const navigateTo = useNavigate()

    const isUserLogged = () => {
        if (requestStatus === 'success') {
            return navigateTo('/calc')
        }
    }

    useEffect(() => {
        isUserLogged()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [requestStatus])

    return <div>Home</div>
}

export default Home
