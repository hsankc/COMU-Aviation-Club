import { motion } from 'framer-motion'
import { Target, Eye, Users, Award, Calendar, BookOpen, MapPin, ExternalLink, Clock } from 'lucide-react'

// --- DATA ---
const yonetim = [
  { name: 'Başkan', role: 'Kulüp Başkanı', color: 'from-blue-600 to-blue-800' },
  { name: 'Başkan Yrd.', role: 'Başkan Yardımcısı', color: 'from-cyan-500 to-cyan-700' },
  { name: 'Genel Sekreter', role: 'Organizasyon & İletişim', color: 'from-purple-500 to-purple-700' },
  { name: 'Teknik Krd.', role: 'Teknik Koordinatör', color: 'from-orange to-red-600' },
]

const yaklasanEtkinlikler = [
  { title: 'Havacılık Kariyer Günleri', date: '15 Nisan 2026', desc: 'Sektörün önde gelen isimleriyle birebir tanışma fırsatı.', tag: 'Seminer' },
  { title: 'Model Uçak Yarışması', date: '28 Nisan 2026', desc: 'Tasarla, üret, uçur! En iyi model uçak ödülü sahiplerini bekliyor.', tag: 'Yarışma' },
  { title: 'Uçuş Simülasyonu Atölyesi', date: '10 Mayıs 2026', desc: 'Profesyonel simülatörlerle gerçekçi uçuş deneyimi.', tag: 'Atölye' },
]

const egitimler = [
  { icon: '✈️', title: 'Temel Havacılık', desc: 'Aerodinamik, uçuş mekaniği ve havacılık tarihi.' },
  { icon: '🛩️', title: 'Model Uçak Yapımı', desc: 'RC uçak tasarımı, üretimi ve uçuş teknikleri.' },
  { icon: '🖥️', title: 'Uçuş Simülasyonu', desc: 'DCS World ve X-Plane ile sanal uçuş eğitimi.' },
  { icon: '🚀', title: 'Uzay & Roket Bilimi', desc: 'Roket propülsiyonu ve uydu teknolojileri.' },
  { icon: '🔧', title: 'Bakım & Teknik', desc: 'Uçak motor sistemleri ve bakım prosedürleri.' },
  { icon: '📡', title: 'Aviyonik Sistemler', desc: 'Radar, navigasyon ve iletişim teknolojileri.' },
]

const galeriItems = [
  { title: 'Etkinlik', image: '/gallery/1.jpg' },
  { title: 'Etkinlik', image: '/gallery/2.jpg' },
  { title: 'Etkinlik', image: '/gallery/3.jpg' },
  { title: 'Etkinlik', image: '/gallery/4.jpg' },
  { title: 'Etkinlik', image: '/gallery/5.jpg' },
  { title: 'Etkinlik', image: '/gallery/6.jpg' },
]

// --- ANIMATION HELPER ---
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 }
}

// --- SECTION HEADER ---
const SectionHeader = ({ icon: Icon, label, title, id }) => (
  <div id={id} className="flex flex-col items-center mb-16 scroll-mt-24">
    <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
      <Icon className="text-blue-600 w-6 h-6" />
    </div>
    <p className="text-orange-500 text-[10px] font-space font-bold uppercase tracking-[0.4em] mb-2">{label}</p>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-space font-black text-slate-900 uppercase tracking-tight text-center">{title}</h2>
    <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-blue-600 to-transparent mt-4"></div>
  </div>
)

export default function ContentSection() { 
  return (
    <div className="relative z-20 bg-white">

      {/* ========== HAKKIMIZDA ========== */}
      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader icon={Target} label="Biz Kimiz" title="Hakkımızda" id="hakkimizda" />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div {...fadeUp} className="bg-surface rounded-2xl border border-border p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-blue-600 w-6 h-6" />
                <h3 className="text-xl font-space font-bold text-slate-900 uppercase tracking-wider">Misyonumuz</h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm">
                Askeri, sivil, sportif ve uzay havacılığı alanlarında farkındalık oluşturmak amacıyla söyleşiler, atölye çalışmaları, kariyer günleri ve staj buluşmaları düzenliyoruz. Üyelerimize sektördeki güncel gelişmeleri aktarıyor, staj ve iş fırsatlarını duyurarak sektöre nitelikli bireyler kazandırmayı hedefliyoruz. Uzmanlarla işbirliği yaparak fuarlar, yarışmalar ve sosyal sorumluluk projeleri gerçekleştiriyoruz. Tüm bu faaliyetlerle ÇOMÜ'yü havacılık alanında en iyi şekilde temsil etmeyi amaçlıyoruz.
              </p>
            </motion.div>
            <motion.div {...fadeUp} className="bg-surface rounded-2xl border border-border p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="text-blue-600 w-6 h-6" />
                <h3 className="text-xl font-space font-bold text-slate-900 uppercase tracking-wider">Vizyonumuz</h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm">
                Çanakkale Onsekiz Mart Üniversitesi Havacılık Kulübü, üniversiteyi her türlü askeri, sivil, sportif ve uzay havacılığı alanlarında en etkin bir şekilde temsil eden bir topluluk olmayı vizyon edinir. Havacılık sektöründeki gelişmeleri takip eden, yenilikçi ve öncü bir kulüp olarak tanınmayı hedefler. Üyelerine zengin bir havacılık deneyimi sunarak, sektörde hakim havacılık kültürüne edinmiş ve bu alanda üreten bireyler yetiştirmeyi amaçlar. Havacılığa ilgi duyan her disiplinden kişinin bu alanda bir şeyler üretebileceğine inanır ve bu doğrultuda üyeleri arasında disiplinlerarası işbirliği ve üretkenliği teşvik eder.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== YÖNETİM EKİBİ ========== */}
      <section className="py-24 bg-surface-alt border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader icon={Users} label="Liderlik" title="Yönetim Ekibi" id="yonetim" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {yonetim.map((kisi, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group flex flex-col items-center text-center"
              >
                <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br ${kisi.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Users className="text-white w-8 h-8 md:w-10 md:h-10" />
                </div>
                <h4 className="font-space font-bold text-slate-900 text-sm uppercase tracking-wider">{kisi.name}</h4>
                <p className="text-slate-500 text-xs mt-1">{kisi.role}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-xs font-space mt-8 tracking-wider uppercase">
            * Yönetim kadrosu isimleri yakında güncellenecektir
          </p>
        </div>
      </section>

      {/* ========== YAKLAŞAN ETKİNLİKLER ========== */}
      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader icon={Calendar} label="Takvim" title="Yaklaşan Etkinlikler" id="etkinlikler" />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {yaklasanEtkinlikler.map((etkinlik, idx) => (
              <motion.div 
                key={idx}
                {...fadeUp}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden group hover:shadow-xl transition-all"
              >
                <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-400"></div>
                <div className="p-6">
                  <span className="inline-block text-[10px] font-space font-bold uppercase tracking-[0.3em] text-blue-600 border border-blue-600/30 bg-blue-50 px-2 py-1 rounded mb-4">{etkinlik.tag}</span>
                  <h3 className="text-lg font-space font-bold text-slate-900 mb-2">{etkinlik.title}</h3>
                  <p className="text-slate-500 text-sm mb-4 leading-relaxed">{etkinlik.desc}</p>
                  <div className="flex items-center gap-2 text-blue-600 text-xs font-space font-bold tracking-wider">
                    <Clock className="w-3.5 h-3.5" />
                    {etkinlik.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== EĞİTİMLERİMİZ ========== */}
      <section className="py-24 bg-surface-alt border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader icon={BookOpen} label="Akademi" title="Eğitimlerimiz" id="egitimler" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {egitimler.map((egitim, idx) => (
              <motion.div 
                key={idx}
                {...fadeUp}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className="bg-white border border-slate-200 p-6 rounded-2xl hover:shadow-lg transition-all group"
              >
                <div className="text-3xl mb-4">{egitim.icon}</div>
                <h3 className="text-sm font-space font-bold text-slate-900 uppercase tracking-wider mb-2 group-hover:text-blue-600 transition-colors">{egitim.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{egitim.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== GALERİ ========== */}
      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader icon={Award} label="Arşiv" title="Önceki Etkinliklerden" id="galeri" />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galeriItems.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 relative h-60 md:h-80 bg-slate-100"
              >
                <img src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-space font-bold uppercase tracking-wide">{item.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== KONUM ========== */}
      <section className="py-24 bg-surface-alt border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader icon={MapPin} label="Bizi Bulun" title="Konumumuz" id="konum" />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
            <motion.div {...fadeUp}>
              <h3 className="text-lg font-space font-bold text-slate-900 uppercase tracking-wider mb-4">Çanakkale Onsekiz Mart Üniversitesi</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Ziraat Fakültesi, 1. Kat<br/>
                Toprak Bölümü<br/>
                <strong className="text-slate-900">Prof. Dr. Cafer Türkmen</strong> Odası<br/>
                <span className="text-slate-400 text-xs">(ÇOMÜ Havacılık Kulübü Akademik Danışmanı)</span><br/><br/>
                17100 - Çanakkale / Türkiye
              </p>
              <div className="flex flex-col gap-3 text-sm mb-6">
                <span className="text-slate-500"><strong className="text-blue-600 font-space text-xs tracking-wider">E-POSTA:</strong> havacilik@comu.edu.tr</span>
                <a href="https://www.instagram.com/comuhavacilikkulubu/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors">
                  <strong className="text-blue-600 font-space text-xs tracking-wider">INSTAGRAM:</strong> @comuhavacilikkulubu
                </a>
              </div>
              <a href="https://www.google.com/maps/place/%C3%87OM%C3%9C+Ziraat+Fak%C3%BCltesi/@40.1112129,26.4161188,17.26z" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 font-space font-bold text-sm hover:underline">
                <MapPin className="w-4 h-4" /> Google Maps'te Aç <ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>
            <motion.div {...fadeUp} className="rounded-2xl overflow-hidden border border-slate-200 h-64 md:h-80 shadow-lg">
              <iframe
                title="ÇOMÜ Ziraat Fakültesi"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1520.1!2d26.4161188!3d40.1112129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b1aa06db21b905%3A0xccf3f3b90026b251!2s%C3%87OM%C3%9C%20Ziraat%20Fak%C3%BCltesi!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== ÜYE OL CTA ========== */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <img src="/club-logo.png" alt="ÇOMÜ Havacılık" className="w-28 h-28 mx-auto mb-6 object-contain drop-shadow-[0_10px_30px_rgba(30,64,175,0.3)] animate-pulse" />
            
            <h2 className="text-3xl md:text-4xl font-space font-black text-slate-900 uppercase tracking-tight mb-4">Aramıza Katıl</h2>
            <p className="text-slate-500 mb-8 max-w-md mx-auto leading-relaxed">
              Gökyüzüne olan tutkunu bizimle paylaş. Üyelik başvuru formumuzu doldurarak ÇOMÜ Havacılık Kulübü ailesine katılabilirsin.
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSe92ghNXGYaZ5ZqXCT35ViGLiu-FAWqRI3sPwYXt0ymLThBvg/viewform?usp=header" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-xl font-space font-bold uppercase tracking-widest text-sm hover:bg-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <ExternalLink className="w-5 h-5" />
              Başvuru Formuna Git
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
