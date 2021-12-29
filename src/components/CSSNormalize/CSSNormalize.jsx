import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'

function CSSNormalize({ children }) {
    return (
        <>
            <CssBaseline>{children}</CssBaseline>
        </>
    )
}

export default CSSNormalize
