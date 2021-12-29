import AppRoutes from './components/AppRoutes/AppRoutes'
import CSSNormalize from './components/CSSNormalize/CSSNormalize'
import Layout from './components/Layout/Layout'

import './styles/App.css'

function App() {
    return (
        <CSSNormalize>
            <Layout>
                <AppRoutes />
            </Layout>
        </CSSNormalize>
    )
}

export default App
