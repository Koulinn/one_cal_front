import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function TopNavigationItem({ text, url }) {
    const navigateTo = useNavigate()

    return (
        <Button variant='text' onClick={() => navigateTo(url)}>
            {text}
        </Button>
    )
}

export default TopNavigationItem
