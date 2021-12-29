import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LayoutInternal from '../Layouts/LayoutInternal.jsx'
import routes from './routes.js'

function AppRoutes() {
    return (
        <LayoutInternal>
            <Routes>
                {routes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component />}
                    />
                ))}
            </Routes>
        </LayoutInternal>
    )
}

export default AppRoutes
