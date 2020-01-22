import React from 'react'
import { useLocation } from 'react-router-dom'
import qs from 'qs'
import { Login, Register } from '../pages'

const Auth = () => {
    const location = useLocation()

    const { stage } = qs.parse(location.search, { ignoreQueryPrefix: true })

    switch (stage) {
        case 'register':
            return <Register />
        case 'login':
        default:
            return <Login />
    }
}

export default Auth
