import axios from 'axios'
import firebaseAuth from '../firebase/firebase_config.js'
import globalVariables from '../app_config/globalEnvVariables.js'

const { SERVER_URL } = globalVariables

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

const requestHandlers = {
    createUser,
    getUserData,
}

export default requestHandlers
