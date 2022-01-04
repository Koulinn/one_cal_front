import { useState } from 'react'
import lib from '../../../lib/index.js'

const {
    requestHandlers: { sendUserMeal },
    helpers: { resetRequestStatus },
} = lib

const useCalcForm = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        calories: '',
        time_eaten: new Date(),
    })
    const [requestStatus, setRequestStatus] = useState('')

    const inputHandlers = (value, key) => {
        setFormValues({ ...formValues, [key]: value })
    }

    const submitForm = async (e) => {
        e.preventDefault()
        try {
            setRequestStatus('loading')
            const res = await sendUserMeal(formValues)

            if (res.status === 201) {
                setRequestStatus('success')
                setFormValues({
                    name: '',
                    calories: '',
                    time_eaten: new Date(),
                })
                resetRequestStatus(setRequestStatus)
            } else {
                setRequestStatus('failure')
                resetRequestStatus(setRequestStatus)
            }
        } catch (error) {
            setRequestStatus('serverFailure')
            resetRequestStatus(setRequestStatus)
            console.log(error)
        }
    }

    return { formValues, inputHandlers, submitForm, requestStatus }
}

export default useCalcForm
