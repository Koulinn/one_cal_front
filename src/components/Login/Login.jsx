import React, { useState } from 'react'
import firebase from '../../firebase/firebase_auth.js'
import firebaseAuth from '../../firebase/firebase_config.js'

const { registerUser } = firebase

const auth = firebaseAuth.auth

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await registerUser(email, password)

            const token = await auth.currentUser.getIdToken()
            console.log(token)
            const PG_res = await fetch('http://localhost:3003/user', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Login
