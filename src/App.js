import AppRoutes from './components/AppRoutes/AppRoutes'
import CSSNormalize from './components/CSSNormalize/CSSNormalize'
import Layout from './components/Layout/Layout'
import { BrowserRouter } from 'react-router-dom'

import './styles/App.css'

function App() {
    return (
        <CSSNormalize>
            <BrowserRouter>
                <Layout>
                    <AppRoutes />
                </Layout>
            </BrowserRouter>
        </CSSNormalize>
    )
}

export default App
