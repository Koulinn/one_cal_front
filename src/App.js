import AppRoutes from './components/AppRoutes/AppRoutes'
import CSSNormalize from './components/CSSNormalize/CSSNormalize'
import { ThemeProvider } from '@mui/material/styles'
import Layout from './components/Layout/Layout'
import { BrowserRouter } from 'react-router-dom'
import './styles/App.css'
import TopNavBar from './components/TopNavBar/TopNavBar'
import theme from './theme/theme.js'

function App() {
    return (
        <CSSNormalize>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Layout>
                        <TopNavBar />
                        <AppRoutes />
                    </Layout>
                </BrowserRouter>
            </ThemeProvider>
        </CSSNormalize>
    )
}

export default App
