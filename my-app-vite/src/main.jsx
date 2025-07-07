import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Child1 from './Child1.jsx'
import Child2 from './Child2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Child1 />
    <Child2 />
  </StrictMode>,
)
