import React from 'react'
import Stack from '@mui/material/Stack'
import { Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate } from 'react-router-dom'

function NavMobile() {
    const [anchorMenu, setAnchorMenu] = React.useState(null)
    const open = Boolean(anchorMenu)
    const navigateTo = useNavigate()

    const handleClick = (event) => {
        setAnchorMenu(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorMenu(null)
    }

    return (
      <nav>
        <Stack>
          <MenuIcon
            className='cursor-pointer'
            onClick={handleClick}
            aria-controls={open ? "mobile-menu" : undefined}
            aria-haspopup='true'
            aria-expanded={open ? "true" : undefined}
            fontSize='large'
          />
          <Menu
            id='mobile-menu'
            anchorEl={anchorMenu}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={() => {
                navigateTo("login");
                handleClose();
              }}
            >
              Login
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                navigateTo("register");
              }}
            >
              Register
            </MenuItem>
          </Menu>
        </Stack>
      </nav>
    );
}

export default NavMobile
