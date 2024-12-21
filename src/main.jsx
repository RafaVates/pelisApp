import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PelisApp  from './PelisApp'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PelisApp/>
  </StrictMode>,
)
