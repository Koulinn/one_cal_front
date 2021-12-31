import { useState, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import lib from '../../../lib/index.js'
import firebase from '../../../firebase/firebase_auth.js'

const {
    helpers: { addSpaceAfterDot, resetRequestStatus },
    requestHandlers: { createUser },
} = lib

const { registerUser, loginWithGoogle } = firebase

const useRegisterForm = () => {
    const [requestStatus, setRequestStatus] = useState('')
    const [isValidPassword, setIsValidPassword] = useState(true)
    const [isValidEmail, setIsValidEmail] = useState(true)
    const [passwordMsg, setPasswordMsg] = useState('')
    const [passwordMissingRule, setPasswordMissingRule] = useState('')
    const navigateTo = useNavigate()

    const checkPasswordValidity = (errorMessage) => {
        if (errorMessage === '') {
            setIsValidPassword(true)
        } else {
            setIsValidPassword(false)
        }
    }

    const passwordValidation = (value) => {
        let missingPasswordRule = ''
        if (!value.match(/[A-Z]/g)) {
            missingPasswordRule += ' letter'
        }

        if (!value.match(/[0-9]/g)) {
            missingPasswordRule += ' number'
        }

        if (value.length < 6) {
            missingPasswordRule += ' size'
        }
        setPasswordMissingRule(missingPasswordRule)
        return missingPasswordRule
    }

    const handlePassword = (value) => {
        passwordValidation(value)
    }

    useEffect(() => {
        checkPasswordValidity(passwordMissingRule)
        if (!isValidPassword) {
            generatePasswordErrorMessage(passwordMissingRule)
        } else {
            setPasswordMsg('')
        }
    }, [isValidPassword, passwordMissingRule])

    const generatePasswordErrorMessage = (msg) => {
        let errorMsg = []
        if (msg.includes('letter')) {
            errorMsg.push('Missing at least a capital letter.')
        }
        if (msg.includes('number')) {
            errorMsg.push('Missing at least a number.')
        }
        if (msg.includes('size')) {
            errorMsg.push('Must have at least 6 characters')
        }

        let transformedMsg = addSpaceAfterDot(errorMsg)
        setPasswordMsg(transformedMsg)
    }

    const emailValidation = (e) => {
        const isValid = e.target.validity.valid

        setIsValidEmail(isValid)
    }

    const handleRegisterForm = useCallback(async (e) => {
        e.preventDefault()

        try {
            setRequestStatus('pending')

            const email = e.target[0].value
            const password = e.target[1].value

            await registerUser(email, password)
            const res = await createUser()

            if (res.status === 201) {
                setRequestStatus('success')
                setTimeout(() => navigateTo('/calc'), 5000)
            } else {
                setRequestStatus('failure')
                resetRequestStatus(setRequestStatus)
            }
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                setRequestStatus('emailExistent')
            } else {
                setRequestStatus('failure')
            }
            resetRequestStatus(setRequestStatus)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleGoogleSignUp = useCallback(async () => {
        try {
            const res = await loginWithGoogle()
            if (res.user.uid) {
                const resServer = await createUser()
                if (resServer.status === 201) {
                    setRequestStatus('success')
                    setTimeout(() => navigateTo('/calc'), 5000)
                    return
                }
                if (resServer.data.msg === 'E-mail already registered') {
                    setRequestStatus('success')
                    setTimeout(() => navigateTo('/calc'), 5000)
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return [
        requestStatus,
        handleRegisterForm,
        handlePassword,
        isValidPassword,
        passwordMsg,
        emailValidation,
        isValidEmail,
        handleGoogleSignUp,
    ]
}

export default useRegisterForm
