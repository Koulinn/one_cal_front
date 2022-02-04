import React, { useEffect } from 'react'
import useUserMealData from '../../../customHooks/useUserMealData/useUserMealData'
import SimpleDashboard from './SimpleDashboard/SimpleDashboard'

function UserDashboard({ sendNewRequest }) {
    const { userMealData, requestStatus, callGetUserMealData } =
        useUserMealData()

    useEffect(() => {
        callGetUserMealData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sendNewRequest])

    if (requestStatus === 'success') {
        const { calorie_total_today, calorie_total_yesterday, mealsFromToday } =
          userMealData;

        return (
          <SimpleDashboard
            calorie_total_today={
              calorie_total_today ? calorie_total_today : false
            }
            calorie_total_yesterday={calorie_total_yesterday}
            mealsFromToday={mealsFromToday ? mealsFromToday : false}
          />
        );
    } else if (requestStatus === 'failure') {
        return <div>Failure</div>
    } else {
        return <div>Loading</div>
    }
}

export default UserDashboard
