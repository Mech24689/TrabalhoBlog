import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
//import './index.css'
//import App from './App.tsx'
import TelaEntrada from './components/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TelaEntrada />
  </StrictMode>,
)
