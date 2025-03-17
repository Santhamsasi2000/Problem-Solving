import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CaseStudies from './Components/CaseStudies/CaseStudies.jsx'
import Services from './Components/Services/Services.jsx'
import Careers from './Components/About/Career/Careers.jsx'
import Home from './Components/Home/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </StrictMode>,
)
