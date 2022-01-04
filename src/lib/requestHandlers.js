import axios from 'axios'
import firebaseAuth from '../firebase/firebase_config.js'
import globalVariables from '../app_config/globalEnvVariables.js'
import helpers from './helpers.js'

const { SERVER_URL } = globalVariables
const { resetRequestStatus } = helpers

const auth = firebaseAuth.auth

axios.interceptors.request.use(
    async (config) => {
        const token = await auth.currentUser.getIdToken()
        config.headers.common['Authorization'] = `Bearer ${token}`

        return config
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error)
    }
)

const createUser = async () => {
    try {
        return await axios.post(`${SERVER_URL}/user`)
    } catch (error) {
        const { response } = error
        if (response.status === 400) {
            return response
        } else {
            return error
        }
    }
}

const getUserData = async () => {
    try {
        return await axios.get(`${SERVER_URL}/user`)
    } catch (error) {
        return error
    }
}

const sendUserMeal = async (body) => {
    try {
        return await axios.post(`${SERVER_URL}/meal`, body)
    } catch (error) {
        return error
    }
}

const getUserMealData = async (setUserMealData, setRequestStatus) => {
    try {
        const res = await axios.get(`${SERVER_URL}/meal`)
        if (res.status === 200) {
            setUserMealData(res.data)
            setRequestStatus('success')
        } else {
            setRequestStatus('failure')
            resetRequestStatus(setRequestStatus)
        }
    } catch (error) {
        setRequestStatus('failure')
        resetRequestStatus(setRequestStatus)
        return error
    }
}

const requestHandlers = {
    createUser,
    getUserData,
    sendUserMeal,
    getUserMealData,
}

export default requestHandlers
