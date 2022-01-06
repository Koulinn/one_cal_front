import React, { useState } from 'react'
import Stack from '@mui/material/Stack'
import { Avatar, Menu, MenuItem } from '@mui/material'
import FirebaseAuthService from '../../../firebase/firebase_auth.js'

const { logoutUser } = FirebaseAuthService

function NavLogged({ email, setUser }) {
    const [anchorMenu, setAnchorMenu] = React.useState(null)
    const open = Boolean(anchorMenu)

    const handleClick = (event) => {
        setAnchorMenu(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorMenu(null)
    }

    return (
        <nav>
            <Stack spacing={3} direction='row'>
                <Avatar
                    className='cursor-pointer'
                    alt={email}
                    onClick={handleClick}
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup='true'
                    aria-expanded={open ? 'true' : undefined}
                />
                <Menu
                    id='basic-menu'
                    anchorEl={anchorMenu}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem
                        onClick={() => {
                            setUser(null)
                            logoutUser()
                            handleClose()
                        }}
                    >
                        Logout
                    </MenuItem>
                </Menu>
            </Stack>
        </nav>
    )
}

export default NavLogged
