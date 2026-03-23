import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AdminLogin from './pages/AdminLogin'
import AdminLayout from './pages/AdminLayout'
import AdminEvents from './pages/AdminEvents'
import AdminGallery from './pages/AdminGallery'
import AdminContent from './pages/AdminContent'
import PublicGallery from './pages/PublicGallery'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white font-inter">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<PublicGallery />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/panel" element={<AdminLayout />}>
            <Route index element={<AdminEvents />} />
            <Route path="gallery" element={<AdminGallery />} />
            <Route path="content" element={<AdminContent />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

