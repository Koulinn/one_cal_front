import { useRef, useState, useEffect } from 'react'

function useSimpleDashboard(calorie_total_today) {
    const prevValue = useRef()
    const [showEffect, setShowEffect] = useState('hide')

    useEffect(() => {
        prevValue.current = calorie_total_today
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (prevValue.current < calorie_total_today) {
            prevValue.current = calorie_total_today
            setShowEffect('show')
            setTimeout(() => setShowEffect('hide'), 3000)
        }
    }, [calorie_total_today])

    return { showEffect }
}

export default useSimpleDashboard
