import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Ana Sayfa', href: '/#hero' },
  { label: 'Hakkımızda', href: '/#hakkimizda' },
  { label: 'Yönetim', href: '/#yonetim' },
  { label: 'Etkinlikler', href: '/#etkinlikler' },
  { label: 'Eğitimler', href: '/#egitimler' },
  { label: 'Galeri', href: '/#galeri' },
  { label: 'Konum', href: '/#konum' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`z-50 fixed w-full top-0 transition-all duration-500 ${scrolled ? 'glass shadow-md py-0.5' : 'bg-white/80 backdrop-blur-sm py-1'}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <a href="/#hero" className="flex items-center gap-2 md:gap-3 group">
          <div className="logo-shimmer-container">
            <img
              src="/club-logo.png"
              alt="ÇOMÜ Havacılık Kulübü"
              className="w-14 h-14 md:w-12 md:h-12 object-contain animate-[shimmer_3s_ease-in-out_infinite] drop-shadow-md"
            />
          </div>
          <span className="font-space font-bold text-[15px] md:text-lg tracking-wider text-slate-900 uppercase block">
            ÇOMÜ Havacılık Kulübü
          </span>
        </a>

        <nav className="hidden lg:flex gap-5 items-center">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-[11px] font-space font-bold tracking-[0.12em] uppercase text-slate-500 hover:text-blue-600 transition-colors relative group py-1">
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe92ghNXGYaZ5ZqXCT35ViGLiu-FAWqRI3sPwYXt0ymLThBvg/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-5 py-2 rounded-lg font-space font-bold text-[11px] uppercase tracking-wider hover:bg-blue-500 hover:shadow-lg transition-all">
            Üye Ol
          </a>

          <a
            href="https://www.instagram.com/ilion7.web/?hl=tr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center ml-4 pl-4 border-l border-slate-200/50 cursor-pointer group hover:no-underline"
          >
            <img src="/ilion7-logo.png" alt="ilion7" className="h-[34px] w-auto object-contain mr-2 opacity-90 group-hover:opacity-100 transition-opacity" />
            <div className="flex flex-col justify-center">
              <span className="text-[8px] text-slate-400 font-space font-bold tracking-[0.2em] uppercase leading-tight">Designed By</span>
              <span className="text-[10px] text-slate-700 font-space font-black tracking-widest uppercase leading-tight">ilion7</span>
            </div>
          </a>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="https://www.instagram.com/ilion7.web/?hl=tr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 cursor-pointer pt-0.5"
          >
            <img src="/ilion7-logo.png" alt="ilion7" className="h-11 w-auto object-contain" />
            <div className="flex flex-col items-start leading-tight">
              <span className="text-[7px] text-slate-400 font-bold tracking-[0.2em] uppercase mb-0.5">Designed By</span>
              <span className="text-[12px] text-slate-800 font-black tracking-tighter uppercase">İLİON7</span>
            </div>
          </a>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-primary p-1">
            {mobileOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t border-border mt-2">
          <div className="flex flex-col p-4 gap-3">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="text-sm font-space font-bold tracking-widest uppercase text-slate-600 hover:text-blue-600 transition-colors py-2 border-b border-border">
                {link.label}
              </a>
            ))}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe92ghNXGYaZ5ZqXCT35ViGLiu-FAWqRI3sPwYXt0ymLThBvg/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-5 py-3 rounded-lg font-space font-bold text-sm uppercase tracking-wider text-center mt-2">
              Üye Ol
            </a>

            <a
              href="https://www.instagram.com/ilion7.web/?hl=tr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center mt-4 pt-4 border-t border-slate-100 cursor-pointer group hover:no-underline"
            >
              <img src="/ilion7-logo.png" alt="ilion7" className="h-10 w-auto object-contain mr-2 opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="flex flex-col justify-center text-left">
                <span className="text-[9px] text-slate-400 font-space font-bold tracking-[0.2em] uppercase leading-tight">Powered By</span>
                <span className="text-[11px] text-slate-700 font-space font-black tracking-widest uppercase leading-tight">ilion7</span>
              </div>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
