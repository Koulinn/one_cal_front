import FirebaseAuthService from '../../firebase/firebase_auth.js'
import { useEffect, useState, useCallback } from 'react'
import lib from '../../lib/index.js'

const {
    requestHandlers: { getUserData },
    helpers: { resetRequestStatus },
} = lib

const { subscribeToAuthChanges } = FirebaseAuthService

function useUser() {
    const [user, setUser] = useState(false)
    const [userData, setUserData] = useState(null)
    const [requestStatus, setRequestStatus] = useState('')

    const getUserDataWrapper = useCallback(async () => {
        try {
            setRequestStatus('pending')
            const res = await getUserData()
            if (res.status === 200) {
                setRequestStatus('success')
                setUserData(res.data.user)
            } else {
                setRequestStatus('failure')
                resetRequestStatus(setRequestStatus)
            }
            console.log(res)
        } catch (error) {
            setRequestStatus('serverFailure')
            resetRequestStatus(setRequestStatus)
            console.log(error, 'from getUserDataWrapper')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    useEffect(() => {
        subscribeToAuthChanges(setUser)
    }, [])

    useEffect(() => {
        if (user) {
            getUserDataWrapper()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    return { user, userData, requestStatus }
}

export default useUser
