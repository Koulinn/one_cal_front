import { useState } from 'react'
import firebase from '../../../firebase/firebase_auth.js'
import lib from '../../../lib/index.js'
import { useNavigate } from 'react-router-dom'

const { loginUser, loginWithGoogle } = firebase

const {
    helpers: { resetRequestStatus },
    requestHandlers: { getUserData },
} = lib

const useLoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [requestStatus, setRequestStatus] = useState('')
    const navigateTo = useNavigate()

    const handleSubmitLogin = async (e) => {
        e.preventDefault()
        try {
            setRequestStatus('pending')
            await loginUser(email, password)
            const res = await getUserData()

            if (res.data.success) {
                setRequestStatus('success')
                setTimeout(() => navigateTo('/calc'), 5000)
            } else {
                setRequestStatus('failure')
                resetRequestStatus(setRequestStatus)
            }
        } catch (error) {
            if (error.code.includes('wrong-password')) {
                setRequestStatus('wrongPassword')
                resetRequestStatus(setRequestStatus)
            } else {
                setRequestStatus('failure')
                resetRequestStatus(setRequestStatus)
            }
        }
    }

    const handleGoogleLogin = async () => {
        try {
            const res = await loginWithGoogle()

            if (res.user.uid) {
                const res = await getUserData()

                if (res.data?.success) {
                    setRequestStatus('success')
                    setTimeout(() => navigateTo('/calc'), 5000)
                } else {
                    setRequestStatus('userNotExists')
                    resetRequestStatus(setRequestStatus)
                    return
                }
            } else {
                setRequestStatus('failure')
                resetRequestStatus(setRequestStatus)
            }
        } catch (error) {
            setRequestStatus('failure')
            resetRequestStatus(setRequestStatus)
        }
    }

    return [
        email,
        password,
        setEmail,
        setPassword,
        handleSubmitLogin,
        requestStatus,
        handleGoogleLogin,
    ]
}

export default useLoginForm
