import { useMediaQuery } from '@mui/material'

function useQueries() {
    const isTablet = useMediaQuery('(max-width:900px)')
    return { isTablet }
}

export default useQueries
