import { Box } from '@mui/system'
import React from 'react'
import assets from '../../assets/index.js'
import logoCSS from './logoCSS.js'

const {
    imageLinks: { logo_svg },
} = assets

function Logo() {
    return (
        <Box sx={logoCSS}>
            <img src={logo_svg} alt='OneKcal logo' />
        </Box>
    )
}

export default Logo
