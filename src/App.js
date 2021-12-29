import AppRoutes from './components/AppRoutes/AppRoutes'
import CSSNormalize from './components/CSSNormalize/CSSNormalize'
import Layout from './components/Layout/Layout'
import { BrowserRouter } from 'react-router-dom'

import './styles/App.css'
import TopNavBar from './components/TopNavBar/TopNavBar'

function App() {
    return (
        <CSSNormalize>
            <BrowserRouter>
                <Layout>
                    <TopNavBar />
                    <AppRoutes />
                </Layout>
            </BrowserRouter>
        </CSSNormalize>
    )
}

export default App
