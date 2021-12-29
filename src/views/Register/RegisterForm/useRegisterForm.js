import { useState, useCallback, useEffect } from 'react'
import lib from '../../../lib/index.js'

const {
    helpers: { addSpaceAfterDot },
} = lib

const useRegisterForm = () => {
    const [requestStatus, setRequestStatus] = useState('')
    const [isValidPassword, setIsValidPassword] = useState(true)
    const [isValidEmail, setIsValidEmail] = useState(true)
    const [passwordMsg, setPasswordMsg] = useState('')
    const [passwordMissingRule, setPasswordMissingRule] = useState('')

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

    const emailValidation = (isValid) => {
        setIsValidEmail(isValid)
    }

    const handleRegisterForm = useCallback(async (e) => {
        console.log('inside handle register form')
        e.preventDefault()
        try {
            console.log(e)
        } catch (error) {
            console.log(error)
        }
    }, [])

    return [
        requestStatus,
        handleRegisterForm,
        handlePassword,
        isValidPassword,
        passwordMsg,
        emailValidation,
        isValidEmail,
    ]
}

export default useRegisterForm
