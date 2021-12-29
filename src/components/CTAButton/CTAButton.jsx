import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function CTAButton({ text, url }) {
    const navigateTo = useNavigate()
    return (
        <Button
            variant='contained'
            color='primary'
            onClick={() => navigateTo(url)}
        >
            {text}
        </Button>
    )
}

export default CTAButton
