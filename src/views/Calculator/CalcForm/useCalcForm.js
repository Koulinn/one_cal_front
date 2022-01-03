import { useState } from 'react'

const useCalcForm = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        calories: '',
        time_eaten: new Date(),
    })

    const inputHandlers = (value, key) => {
        setFormValues({ ...formValues, [key]: value })
    }

    const submitForm = async (e) => {
        e.preventDefault()
        try {
            console.log(formValues)
        } catch (error) {
            console.log(error)
        }
    }

    return { formValues, inputHandlers, submitForm }
}

export default useCalcForm
