import { useRef, useState, useEffect } from 'react'
function useSimpleDashboard({ calorie_total_today }) {
    const prevValue = useRef()
    const [showAddIcon, setShowAddIcon] = useState('hide')

    useEffect(() => {
        console.log(calorie_total_today, 'caloria total inside useEffect')
        prevValue.current = calorie_total_today
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (prevValue.current < calorie_total_today) {
            prevValue.current = calorie_total_today
            setShowAddIcon('show')
            setTimeout(() => setShowAddIcon('hide'), 3000)
        }
    }, [calorie_total_today])

    return { showAddIcon }
}

export default useSimpleDashboard
