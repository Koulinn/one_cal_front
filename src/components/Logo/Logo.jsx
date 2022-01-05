import { Box } from '@mui/system'
import React from 'react'
import assets from '../../assets/index.js'
import logoCSS from './logoCSS.js'

const {
    images: { OneKcalLogo },
} = assets

function Logo() {
    return (
        <Box sx={logoCSS}>
            <OneKcalLogo />
        </Box>
    )
}

export default Logo
