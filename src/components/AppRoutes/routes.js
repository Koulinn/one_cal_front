import Login from '../../views/Login/Login'
import Register from '../../views/Register/Register'
import Home from '../../views/Home/Home'
import Calculator from '../../views/Calculator/Calculator'

const routes = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/register',
        component: Register,
    },
    {
        path: '/',
        component: Home,
    },
    {
        path: '/calc',
        component: Calculator,
    },
]

export default routes
