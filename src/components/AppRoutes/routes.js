import Login from '../../views/Login/Login'
import Register from '../../views/Register/Register'
import Home from '../../views/Home/Home'
import Calculator from '../../views/Calculator/Calculator'
import NotFound from '../../views/NotFound/NotFound'
import Profile from '../../views/Profile/Profile'

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
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '*',
        component: NotFound,
    },
]

export default routes
