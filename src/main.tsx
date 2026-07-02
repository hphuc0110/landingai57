import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import ThankYouPage from './pages/ThankYouPage'
import FacebookPixelPageViews from './components/FacebookPixelPageViews'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <FacebookPixelPageViews />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cam-on" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
