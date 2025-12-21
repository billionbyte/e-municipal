import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './locales/i18n'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Schemes from './pages/Schemes'
import Notices from './pages/Notices'
import Documents from './pages/Documents'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/schemes" element={<Schemes />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
