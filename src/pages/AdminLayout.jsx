import { useEffect } from 'react'
import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom'
import { Calendar, Image, FileText, LogOut, Shield } from 'lucide-react'

export default function AdminLayout() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // Simple admin auth check
    if (!localStorage.getItem('havk_admin_auth')) {
      navigate('/admin')
    }
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('havk_admin_auth')
    navigate('/admin')
  }

  const navItems = [
    { name: 'Etkinlikler', path: '/admin/panel', icon: Calendar },
    { name: 'Galeri', path: '/admin/panel/gallery', icon: Image },
    { name: 'İçerik', path: '/admin/panel/content', icon: FileText },
  ]

  return (
    <div className="flex bg-slate-50 min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 min-h-screen text-slate-300 flex flex-col border-r border-slate-800">
        <div className="p-6 flex items-center gap-3 border-b border-slate-800">
          <Shield className="text-blue-500 w-8 h-8" />
          <h1 className="font-space font-bold uppercase tracking-wider text-white">Havk Panel</h1>
        </div>
        
        <nav className="flex-1 py-4">
          {navItems.map(item => {
            const active = location.pathname === item.path || (item.path !== '/admin/panel' && location.pathname.startsWith(item.path))
            return (
              <Link 
                key={item.path} 
                to={item.path}
                className={`flex items-center gap-3 px-6 py-4 transition-colors border-l-2 ${active ? 'border-blue-500 bg-slate-800 text-white' : 'border-transparent hover:bg-slate-800/50 hover:text-white'}`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-space font-bold uppercase tracking-wider text-xs">{item.name}</span>
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button onClick={handleLogout} className="flex items-center justify-center gap-2 w-full py-3 bg-red-500/10 text-red-500 hover:bg-red-500/20 rounded-lg transition-colors font-space font-bold uppercase tracking-wider text-xs">
            <LogOut className="w-4 h-4" /> Çıkış Yap
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto h-screen">
        <Outlet />
      </div>
    </div>
  )
}
