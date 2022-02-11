import React, { useEffect, useState } from 'react'
import LoggedSection from '../LoggedSection/LoggedSection'
import { Grid, Typography, TextField, Button, Avatar } from '@mui/material'
import { Box } from '@mui/system'
import useUser from '../../customHooks/useUser/useUser'
import useQueries from '../../customHooks/useQueries/useQueries.js'
import lib from '../../lib'

const {
    requestHandlers: { updateAvatar, updateUserProfile },
} = lib

function Profile() {
    const { isTablet } = useQueries()
    const { userData } = useUser()
    const [formValues, setFormValues] = useState({
        name: '',
        surname: '',
        birth_date: '',
    })
    const [avatarPreview, setAvatarPreview] = useState(null)
    const [avatarFormData, setAvatarFormData] = useState(null)
    const [isEnabled, setIsEnabled] = useState(false)

    const createAvatarPreview = (e) => {
        const file = e.target.files[0]
        const imgPrevUrl = URL.createObjectURL(file)
        setAvatarPreview(imgPrevUrl)
        setIsEnabled(true)

        const form = new FormData()
        form.append('avatar', file)
        setAvatarFormData(form)
    }

    const handleInput = (value, fieldName) => {
        setFormValues({ ...formValues, [fieldName]: value })
    }

    const updateProfile = async (e) => {
        e.preventDefault()

        try {
            if (avatarFormData) {
                await updateAvatar(avatarFormData)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <LoggedSection>
            <Grid
                item
                sm={12}
                md={6}
                className={isTablet ? 'simpleDashboard-mobile' : ''}
                sx={{
                    boxShadow: `0px 0px 32px rgba(0, 0, 0, 0.15)`,
                    borderRadius: `20px`,
                }}
            >
                <Box component='form' sx={{ px: 3 }} onSubmit={updateProfile}>
                    <Typography
                        component='h5'
                        variant='h5'
                        textAlign={'center'}
                        sx={{ mt: 3 }}
                    >
                        Profile
                    </Typography>
                    <label htmlFor='avatar'>
                        <Avatar
                            alt={formValues.surname || 'Without avatar'}
                            className='cursor-pointer'
                            src={avatarPreview || userData?.avatar || 'A'}
                            sx={{
                                margin: 'auto',
                                mt: 3,
                                width: '128px',
                                height: '128px',
                            }}
                        />
                        <input
                            id='avatar'
                            type='file'
                            hidden
                            onChange={createAvatarPreview}
                        />
                    </label>
                    {/* <TextField
                        id='name'
                        label='Name'
                        variant='standard'
                        fullWidth
                        type='text'
                        error={false}
                        value={formValues.name}
                        sx={{ mt: 3, mb: 2 }}
                    />
                    <TextField
                        id='surname'
                        label='Surname'
                        variant='standard'
                        fullWidth
                        type='text'
                        error={false}
                        value={formValues.surname}
                        onChange={(e) => {
                            // handleInput(e.target.value, 'surname')
                        }}
                        sx={{ mt: 3, mb: 2 }}
                    />
                    <TextField
                        id='birth_date'
                        label='Birth Date'
                        variant='standard'
                        fullWidth
                        type='text'
                        error={false}
                        value={formValues.birth_date}
                        onChange={(e) => {
                            // handleInput(e.target.value, 'birth_date')
                        }}
                        sx={{ mt: 3, mb: 2 }}
                    /> */}

                    <Button
                        sx={{ mt: 5, mb: 3 }}
                        fullWidth
                        type='submit'
                        disabled={!isEnabled}
                    >
                        Update
                    </Button>
                </Box>
            </Grid>
        </LoggedSection>
    )
}

export default Profile
