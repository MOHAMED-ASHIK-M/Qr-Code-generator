import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QrScanner } from './components/QrScanner'
import  './QrScanner.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <QrScanner />
  </StrictMode>,
)
