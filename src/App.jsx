import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './app/routes.jsx'
import { AuthFlowProvider } from './features/auth/auth-flow.jsx'

function App() {
  return (
    <BrowserRouter>
      <AuthFlowProvider>
        <AppRoutes />
      </AuthFlowProvider>
    </BrowserRouter>
  )
}

export default App
