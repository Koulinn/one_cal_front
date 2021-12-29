import AppRoutes from './components/AppRoutes/AppRoutes'
import CSSNormalize from './components/CSSNormalize/CSSNormalize'
import { ThemeProvider } from '@mui/material/styles'
import LayoutExternal from './components/Layouts/LayoutExternal'
import { BrowserRouter } from 'react-router-dom'
import './styles/App.css'
import TopNavBar from './components/TopNavBar/TopNavBar'
import theme from './theme/theme.js'

function App() {
    return (
        <CSSNormalize>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <LayoutExternal>
                        <TopNavBar />
                        <AppRoutes />
                    </LayoutExternal>
                </BrowserRouter>
            </ThemeProvider>
        </CSSNormalize>
    )
}

export default App
