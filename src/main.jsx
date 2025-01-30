import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import AuthContext, { ContextProvide } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {/* <HashRouter> */}
      <AuthContext>
                          <App/>

      </AuthContext>

    {/* </HashRouter> */}
    </BrowserRouter>
    
  </StrictMode>,
)
