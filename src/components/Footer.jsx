import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react'

export default function Footer() { 
  return (
    <footer className="relative border-t border-border bg-primary z-20">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          
          {/* Club Logo & Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-4 mb-6">
              <img src="/club-logo.png" alt="ÇOMÜ Havacılık" className="w-14 h-14 object-contain drop-shadow" />
              <div>
                <div className="font-space font-black text-xl tracking-widest text-white uppercase">
                  ÇOMÜ Havacılık
                </div>
                <p className="text-slate-400 text-[10px] font-space tracking-[0.3em] uppercase">Kulübü</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm max-w-sm font-light leading-relaxed">
              Geleceğin havacılık profesyonellerini, mühendislerini ve liderlerini yetiştiren bağımsız, inovatif üniversite topluluğu.
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            <a href="#" className="w-11 h-11 border border-white/10 rounded-lg flex items-center justify-center text-slate-400 hover:border-cyan hover:text-cyan hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all cursor-pointer group">
              <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="w-11 h-11 border border-white/10 rounded-lg flex items-center justify-center text-slate-400 hover:border-cyan hover:text-cyan hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all cursor-pointer group">
              <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="w-11 h-11 border border-white/10 rounded-lg flex items-center justify-center text-slate-400 hover:border-cyan hover:text-cyan hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all cursor-pointer group">
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="w-11 h-11 border border-white/10 rounded-lg flex items-center justify-center text-slate-400 hover:border-cyan hover:text-cyan hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all cursor-pointer group">
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>

        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
          <div className="flex items-center gap-3">
            <span className="text-slate-500 text-xs font-space tracking-wider uppercase">Engineered by</span>
            <img src="/ilion7-logo.png" alt="ilion7.web" className="h-8 object-contain" />
          </div>
          <p className="text-slate-500 text-[10px] tracking-widest font-space uppercase">
            © {new Date().getFullYear()} ÇOMÜ Havacılık Kulübü. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}
