import { useState } from 'react'
import lib from '../../lib/index.js'

const {
    requestHandlers: { getUserMealData },
} = lib

function useUserMealData() {
    const [userMealData, setUserMealData] = useState(null)
    const [requestStatus, setRequestStatus] = useState('loading')

    const callGetUserMealData = async () => {
        await getUserMealData(setUserMealData, setRequestStatus)
    }

    return { userMealData, requestStatus, callGetUserMealData }
}

export default useUserMealData
