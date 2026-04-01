import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Target, Eye, Users, Award, Calendar, BookOpen, MapPin, 
  ExternalLink, Clock, Monitor, Globe, Plane, Rocket, Hammer, X, FileText 
} from 'lucide-react'
import { supabase } from '../lib/supabaseClient'

// --- DATA ---
const yonetim = [
  { name: 'Prof. Dr. Cafer Türkmen', role: 'Akademik Danışman', image: '/team/Cafer Türkmen - Akademik Danışman.jpg', position: 'object-[center_10%]' },
  { name: 'Hasan Kaşıkcı', role: 'Başkan', image: '/team/Hasan Kaşıkcı - Başkan.jpg', position: 'object-center' },
  { name: 'Edanur Topçu', role: 'Başkan Yardımcısı', image: '/team/Edanur Topçu - Başkan Yardımcısı.jpg', position: 'object-center' },
  { name: 'Nazire Çetiner', role: 'Başkan Yardımcısı', image: '/team/Nazire Çetiner - Başkan Yardımcısı.jpg', position: 'object-center' },
  { name: 'Esranur Kasalak', role: 'Genel Sekreter', image: '/team/Esranur Kasalak - Genel Sekreter.jpg', position: 'object-center' },
  { name: 'Ayşenur Karataş', role: 'Sosyal Medya', image: '/team/Ayşenur Karataş - Sosyal Medya.jpg', position: 'object-center' },
  { name: 'Enes Dok', role: 'Sosyal Medya', image: '/team/Enes Dok - Sosyal Medya.jpg', position: 'object-center' },
  { name: 'Lachyn Achilova', role: 'Sosyal Medya', image: '/team/Lachyn Achilova- Sosyal Medya.jpg', position: 'object-center' },
  { name: 'Sinan Pehlivan', role: 'Yönetim Ekibi', image: '/team/Sinan Pehlivan - Yönetim Ekibi.jpg', position: 'object-center' },
  { name: 'Ezgi Turan', role: 'Yönetim Ekibi', image: '/team/Ezgi Turan - Yönetim Ekibi.jpg', position: 'object-center' },
  { name: 'Furkan Tuncal', role: 'Yönetim Ekibi', image: '/team/Furkan Tuncal - Yönetim Ekibi.jpg', position: 'object-center' },
  { name: 'Kerem Şayir', role: 'Yönetim Ekibi', image: '/team/Kerem Şayir - Yönetim ekibi.jpg', position: 'object-center' },
  { name: 'Ayşe Avcı', role: 'Yönetim Ekibi', image: '/team/Ayşe Avcı - yÖNETİM ekibi.jpg', position: 'object-center' },
  { name: 'Sudenur Soruç', role: 'Yönetim Ekibi', image: '/team/Sudenur SORUÇ  - Yönetim EKİbi.jpg', position: 'object-center' },
]

const yaklasanEtkinlikler = [
  { title: 'FİLM GECESİ: SULLY', date: '17 Nisan 2026 - 20:00', desc: 'Ziraat Fakültesi Amfisinde "Sully" filmini izleyerek havacılık dolu bir gece geçireceğiz.', tag: 'Etkinlik', link: '#etkinlikler' },
  { title: 'İHA0/1 TEORİK EĞİTİM', date: '18 Nisan 2026', desc: 'İnsansız Hava Aracı pilotluğu için gerekli teorik bilgilerin verileceği kapsamlı eğitim.', tag: 'Eğitim', link: '#egitimler' },
  { title: 'İHA0/1 PRATİK UÇUŞ EĞİTİMİ', date: '19 Nisan 2026', desc: 'Teorik eğitimi tamamlayan adaylar için sahada gerçek uçuş deneyimi ve uygulama.', tag: 'Eğitim', link: '#egitimler' },
  { title: '23 NİSAN STANDI', date: '23 Nisan 2026', desc: 'Çanakkale Hamidiye Tabyalarında stant açarak havacılık faaliyetlerimizi tanıtacağız.', tag: 'Stant', link: '#etkinlikler' },
  { title: 'TÜRK YILDIZLARI SÖYLEŞİSİ', date: 'Nisan Sonu (Planlanıyor)', desc: 'Türk Yıldızları ekibiyle İçdaş Kongre Merkezi\'nde düzenlemeyi planladığımız söyleşi ve imza günü.', tag: 'Söyleşi', link: '#etkinlikler', isPending: true },
  { title: 'HAVA RADAR MEVZİ GEZİSİ', date: '30 Nisan 2026', desc: 'Çanakkale Hava Radar Mevzi Komutanlığı\'na düzenleyeceğimiz teknik ve bilgilendirici gezi. Katılımcı kontenjanı dolmuştur.', tag: 'Gezi', link: '#etkinlikler', hasParticipants: true },
]

const radarKatilimcilar = [
  "Prof. Dr. Cafer TÜRKMEN (Danışman)", "1. Hasan KAŞIKCI", "2. Ezgi TURAN", "3. Nazire ÇETİNER", "4. Edanur TOPÇU", "5. Ayşenur KARATAŞ", "6. Sinan PEHLİVAN", "7. Lachyn ACHILOVA", "8. Kerem ŞAYİR", "9. Sudenur SORUÇ", "10. Esranur KASALAK", "11. Furkan TUNCAL", "12. Enes DOK", "13. Ayşe AVCI", "14. Sevim Zehra ATAKAV", "15. Rabia DÖNMEZ", "16. Feyzullah AS", "17. Kadir Efe ATİK", "18. Ronay TOKDEMİR", "19. Bensu ŞAHİN", "20. Sudenaz ÖZŞEN", "21. Asya BİLGEN", "22. Hatice Meryem YILDIRIM", "23. Tuğba SOYTÜRK", "24. Mehmet Ebrar DUMAN", "25. Bora Baturalp ERCİ", "26. Yaren BAYRAM", "27. Hatice Gülin KÜÇÜKKAYA", "28. Zeynep Itır YAKŞİ", "29. Eren SARI", "30. Furkan AKÇAY", "31. Beyza ASLAN", "32. Hümeyra LİMAN"
];

const radarEkKatilimcilar = [
  "33. İlkan SEVDİM", "34. Elif KARA", "35. Zeynep Meryem ÇANDIR", "36. Sinem Nur ARMUTÇU", "37. Sudenur KAVAS", "38. Doğa Nur ŞAHPOLAT", "39. Aziz Can KAHRAMAN", "40. İsmail YILDIZ", "41. Sıla AKDENİZ", "42. Sude Nur KUZU", "43. Mustafa GENCER"
];

const egitimler = [
  { icon: Monitor, title: 'Simülasyon Merkezi', desc: 'Profesyonel simülatörler ile uçuş eğitimi. Randevu alarak merkezimizi ziyaret edebilirsiniz.', link: 'https://rezervasyon.comu.edu.tr/Simulasyon/', btnText: 'Randevu Al' },
  { icon: Globe, title: 'UAVET Eğitimi', desc: 'Uluslararası standartlarda insansız hava aracı ve havacılık eğitimleri.', link: 'https://uavet.org/web/', btnText: 'Detaylı Bilgi' },
  { icon: Plane, title: 'İHA0/1 Eğitimi', desc: '2 ayda bir düzenlenen drone pilotluğu eğitimi. Güncel eğitim için formu doldurup gruba katılın.', link: 'https://docs.google.com/forms/d/e/1FAIpQLSeOmOY2bobdJofuntcEsG0PXN0GW9NwHRQtenC52ViZ-i7Dog/viewform?usp=header', wp: 'https://chat.whatsapp.com/LQvsPVCnvzf9wDCcGGDvkz', btnText: 'Başvuru Formu' },
  { icon: Rocket, title: 'İHA2 Eğitimi', desc: 'İleri seviye insansız hava aracı eğitimi ve lisanslandırma süreçleri.', wp: 'https://chat.whatsapp.com/Ds0GyVUleRBK7Im937KrLx?mode=gi_t', btnText: 'WP Grubuna Katıl' },
  { icon: Hammer, title: 'Maket Uçak', desc: 'Geleneksel ve modern tekniklerle maket uçak üretimi eğitimi.', status: 'ÇOK YAKINDA' },
]

const galeriItems = [
  { "title": "Etkinlik", "image": "/gallery/1.jpg" },
  { "title": "Etkinlik", "image": "/gallery/2.jpg" },
  { "title": "Etkinlik", "image": "/gallery/3.jpg" },
  { "title": "Etkinlik", "image": "/gallery/4.jpg" },
  { "title": "Etkinlik", "image": "/gallery/5.jpg" },
  { "title": "Etkinlik", "image": "/gallery/6.jpg" },
  { "title": "Etkinlik", "image": "/gallery/9e615826c9ea45e791de3fdc403fead4.jpg" },
  { "title": "Etkinlik", "image": "/gallery/caeef2a7720644f8a6da6b437448c20d.jpg" },
  { "title": "Etkinlik", "image": "/gallery/DSC_0532.JPG" },
  { "title": "Etkinlik", "image": "/gallery/DSC_5242 (1).JPG" },
  { "title": "Etkinlik", "image": "/gallery/DSC_8694.JPG" },
  { "title": "Etkinlik", "image": "/gallery/DSC_8698.JPG" },
  { "title": "Etkinlik", "image": "/gallery/DSC_8703.JPG" },
  { "title": "Etkinlik", "image": "/gallery/DSC_8705.JPG" },
  { "title": "Etkinlik", "image": "/gallery/DSC_8710.JPG" },
  { "title": "Etkinlik", "image": "/gallery/image00003 (1).JPG" },
  { "title": "Etkinlik", "image": "/gallery/IMG-20240322-WA0005.jpg" },
  { "title": "Etkinlik", "image": "/gallery/IMG-20250926-WA0033.jpg" },
  { "title": "Etkinlik", "image": "/gallery/IMG-20250926-WA0042.jpg" },
  { "title": "Etkinlik", "image": "/gallery/IMG-20250926-WA0051.jpg" },
  { "title": "Etkinlik", "image": "/gallery/IMG-20250926-WA0065.jpg" },
  { "title": "Etkinlik", "image": "/gallery/IMG-20250926-WA0077.jpg" },
  { "title": "Etkinlik", "image": "/gallery/IMG-20250926-WA0078.jpg" },
  { "title": "Etkinlik", "image": "/gallery/IMG-20250926-WA0080.jpg" },
  { "title": "Etkinlik", "image": "/gallery/IMG-20250926-WA0082.jpg" },
  { "title": "Etkinlik", "image": "/gallery/IMG-20250926-WA0083.jpg" },
  { "title": "Etkinlik", "image": "/gallery/IMG-20250926-WA0085.jpg" },
  { "title": "Etkinlik", "image": "/gallery/IMG-20250926-WA0086.jpg" },
  { "title": "Etkinlik", "image": "/gallery/IMG-20250926-WA0088.jpg" },
  { "title": "Etkinlik", "image": "/gallery/IMG-20250926-WA0089.jpg" },
  { "title": "Etkinlik", "image": "/gallery/IMG-20250926-WA0090.jpg" },
  { "title": "Etkinlik", "image": "/gallery/IMG_6386.JPG" },
  { "title": "Etkinlik", "image": "/gallery/WhatsApp Gorsel 2024-10-10 saat 12.46.06_369204c4.jpg" },
  { "title": "Etkinlik", "image": "/gallery/WhatsApp Gorsel 2024-10-10 saat 12.46.07_26cc8ba3.jpg" },
  { "title": "Etkinlik", "image": "/gallery/WhatsApp Gorsel 2024-10-10 saat 12.46.10_2e19423e.jpg" },
  { "title": "Etkinlik", "image": "/gallery/WhatsApp Gorsel 2024-10-10 saat 14.08.48_2fcb72b6.jpg" },
  { "title": "Etkinlik", "image": "/gallery/WhatsApp Gorsel 2025-09-26 saat 19.37.18_62ff027a.jpg" }
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
  const [events, setEvents] = useState(yaklasanEtkinlikler)
  const [gallery, setGallery] = useState(galeriItems)
  const [expandedEgitim, setExpandedEgitim] = useState(null)
  const [showKatilimcilar, setShowKatilimcilar] = useState(false)
  const [misyon, setMisyon] = useState('Askeri, sivil, sportif ve uzay havacılığı alanlarında farkındalık oluşturmak amacıyla söyleşiler, atölye çalışmaları, kariyer günleri ve staj buluşmaları düzenliyoruz. Üyelerimize sektördeki güncel gelişmeleri aktarıyor, staj ve iş fırsatlarını duyurarak sektöre nitelikli bireyler kazandırmayı hedefliyoruz. Uzmanlarla işbirliği yaparak fuarlar, yarışmalar ve sosyal sorumluluk projeleri gerçekleştiriyoruz. Tüm bu faaliyetlerle ÇOMÜ\'yü havacılık alanında en iyi şekilde temsil etmeyi amaçlıyoruz.')
  const [vizyon, setVizyon] = useState('Çanakkale Onsekiz Mart Üniversitesi Havacılık Kulübü, üniversiteyi her türlü askeri, sivil, sportif ve uzay havacılığı alanlarında en etkin bir şekilde temsil eden bir topluluk olmayı vizyon edinir. Havacılık sektöründeki gelişmeleri takip eden, yenilikçi ve öncü bir kulüp olarak tanınmayı hedefler. Üyelerine zengin bir havacılık deneyimi sunarak, sektörde hakim havacılık kültürüne edinmiş ve bu alanda üreten bireyler yetiştirmeyi amaçlar. Havacılığa ilgi duyan her disiplinden kişinin bu alanda bir şeyler üretebileceğine inanır ve bu doğrultuda üyeleri arasında disiplinlerarası işbirliği ve üretkenliği teşvik eder.')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: contentData } = await supabase.from('site_content').select('*')
        if (contentData && contentData.length > 0) {
          const m = contentData.find(c => c.section_key === 'misyon')
          const v = contentData.find(c => c.section_key === 'vizyon')
          if (m) setMisyon(m.content)
          if (v) setVizyon(v.content)
        }

        const { data: eventsData } = await supabase.from('events').select('*').order('date', { ascending: true })
        if (eventsData && eventsData.length > 0) {
          setEvents(eventsData.map(e => ({ title: e.title, date: e.date, desc: e.description, tag: e.tag })))
        }

        const { data: galleryData } = await supabase.from('gallery').select('*').order('created_at', { ascending: false })
        if (galleryData && galleryData.length > 0) {
          setGallery(galleryData.map(g => ({ title: g.title, image: g.image_url })))
        }
      } catch (err) {
        console.error("Supabase fetch error:", err)
      }
    }
    fetchData()
  }, [])

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
                {misyon}
              </p>
            </motion.div>
            <motion.div {...fadeUp} className="bg-surface rounded-2xl border border-border p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="text-blue-600 w-6 h-6" />
                <h3 className="text-xl font-space font-bold text-slate-900 uppercase tracking-wider">Vizyonumuz</h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm">
                {vizyon}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== YÖNETİM EKİBİ ========== */}
      <section className="py-24 bg-surface-alt border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader icon={Users} label="Liderlik" title="Yönetim Ekibi" id="yonetim" />
          
          {/* Liderlik Alanı (Cafer Hoca & Hasan Kaşıkcı) */}
          <div className="flex justify-center gap-8 md:gap-16 mb-12 max-w-4xl mx-auto px-4">
            {yonetim.slice(0, 2).map((kisi, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group flex flex-col items-center text-center w-1/2 max-w-[180px]"
              >
                <img 
                  src={kisi.image} 
                  alt={kisi.name} 
                  loading="lazy"
                  className={`w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white mb-4 shadow-xl object-cover ${kisi.position || 'object-center'} group-hover:scale-110 group-hover:border-blue-500 transition-all duration-300`} 
                />
                <h4 className="font-space font-bold text-slate-900 text-[13px] md:text-base uppercase tracking-wider leading-tight">{kisi.name}</h4>
                <p className="text-slate-500 text-[10px] md:text-xs mt-1">{kisi.role}</p>
              </motion.div>
            ))}
          </div>

          {/* Diğer Ekip Üyeleri (Mobilde 3'lü, Masaüstünde 4'lü) */}
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto px-2">
            {yonetim.slice(2).map((kisi, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className="group flex flex-col items-center text-center"
              >
                <img 
                  src={kisi.image} 
                  alt={kisi.name} 
                  loading="lazy"
                  className={`w-20 h-20 md:w-28 md:h-28 rounded-full border-2 md:border-4 border-white mb-2 md:mb-4 shadow-lg object-cover ${kisi.position || 'object-center'} group-hover:scale-110 group-hover:border-blue-500 transition-all duration-300`} 
                />
                <h4 className="font-space font-bold text-slate-900 text-[11px] md:text-sm uppercase tracking-tight md:tracking-wider leading-tight">{kisi.name}</h4>
                <p className="text-slate-500 text-[9px] md:text-xs mt-0.5 md:mt-1">{kisi.role}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            {...fadeUp}
            className="mt-16 flex flex-col items-center justify-center p-8 bg-blue-50 rounded-3xl border border-blue-100 max-w-2xl mx-auto text-center"
          >
            <h3 className="text-2xl font-space font-black text-slate-900 uppercase tracking-tight mb-3">Yönetim Ekibimize Katılmak İster Misin?</h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Kulübümüzün vizyonunu ileriye taşıyacak, dinamik ve havacılığa tutkulu yeni ekip arkadaşları arıyoruz. Yönetim kadrosunda aktif rol almak için hemen başvur!
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScwKPxSlpZ9eS_KV1u41YnktlUPO9PGuy61fwaOe-9IQRQhbg/viewform?usp=header" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-space font-bold uppercase tracking-widest text-xs hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Yönetim Ekibine Başvur
            </a>
          </motion.div>
        </div>
      </section>

      {/* ========== YAKLAŞAN ETKİNLİKLER ========== */}
      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader icon={Calendar} label="Takvim" title="Yaklaşan Etkinlikler" id="etkinlikler" />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {events.map((etkinlik, idx) => (
              <motion.div 
                key={idx}
                {...fadeUp}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className={`bg-white rounded-2xl border-2 overflow-hidden group transition-all relative ${etkinlik.isPending ? 'border-dashed border-slate-300 bg-slate-50/50 opacity-90' : 'border-slate-200 hover:shadow-xl'}`}
              >
                <div className={`h-2 ${etkinlik.isPending ? 'bg-slate-300' : 'bg-gradient-to-r from-blue-600 to-blue-400'}`}></div>
                
                {etkinlik.isPending && (
                  <div className="absolute top-5 right-5 bg-amber-50 text-amber-600 text-[9px] font-space font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-amber-200 flex items-center gap-1.5 shadow-sm">
                    <Clock className="w-3 h-3" />
                    Henüz Netleşmedi
                  </div>
                )}

                <div className="p-6">
                  <span className={`inline-block text-[10px] font-space font-bold uppercase tracking-[0.3em] px-2 py-1 rounded mb-4 border ${etkinlik.isPending ? 'text-slate-500 border-slate-300 bg-slate-100' : 'text-blue-600 border-blue-600/30 bg-blue-50'}`}>{etkinlik.tag}</span>
                  <h3 className="text-lg font-space font-bold text-slate-900 mb-2">{etkinlik.title}</h3>
                  <p className="text-slate-500 text-sm mb-4 leading-relaxed">{etkinlik.desc}</p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className={`flex items-center gap-2 text-xs font-space font-bold tracking-wider ${etkinlik.isPending ? 'text-amber-600' : 'text-blue-600'}`}>
                      <Clock className="w-3.5 h-3.5" />
                      {etkinlik.date}
                    </div>
                    
                    <div className="flex flex-col items-end gap-3">
                      <a 
                        href={etkinlik.link || "#egitimler"}
                        className="text-[10px] font-space font-bold uppercase tracking-widest text-blue-600 hover:text-blue-800 flex items-center gap-1 group/btn"
                      >
                        Detayları Gör
                        <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                      </a>
                      {etkinlik.hasParticipants && (
                        <button 
                          onClick={() => setShowKatilimcilar(true)}
                          className="text-[10px] font-space font-bold uppercase tracking-widest text-orange-600 hover:text-orange-800 flex items-center gap-1 group/btn"
                        >
                          <FileText className="w-3 h-3 group-hover/btn:scale-110 transition-transform" />
                          Katılımcı Listesi
                        </button>
                      )}
                    </div>
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
                className="bg-white border border-slate-200 p-6 md:p-8 rounded-3xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all group flex flex-col h-full relative overflow-hidden cursor-pointer md:cursor-default"
                onClick={() => {
                  if (window.innerWidth < 768) {
                    setExpandedEgitim(expandedEgitim === idx ? null : idx)
                  }
                }}
              >
                {/* Background Decoration */}
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/5 rounded-full group-hover:bg-blue-500/10 transition-colors" />

                <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                  <egitim.icon className="text-blue-600 w-6 h-6 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-base font-space font-black text-slate-900 uppercase tracking-tight mb-3 group-hover:text-blue-600 transition-colors">
                  {egitim.title}
                </h3>

                {/* Description - Mobile: Expandable, Desktop: Always visible */}
                <motion.div
                  initial={false}
                  animate={{ 
                    height: (window.innerWidth >= 768 || expandedEgitim === idx) ? 'auto' : 0,
                    opacity: (window.innerWidth >= 768 || expandedEgitim === idx) ? 1 : 0
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-slate-500 text-xs leading-relaxed mb-6 font-medium">
                    {egitim.desc}
                  </p>
                </motion.div>

                {/* Mobile Toggle Info */}
                <div className="md:hidden flex items-center gap-2 text-[10px] font-space font-bold text-blue-600 mb-4 tracking-widest">
                  {expandedEgitim === idx ? 'KAPAT' : 'DETAYLARI GÖR...'}
                </div>
                
                {egitim.status ? (
                  <div className="inline-flex items-center justify-center gap-2 text-[10px] font-space font-black text-orange-600 tracking-widest border border-orange-100 bg-orange-50 px-4 py-2 rounded-xl uppercase">
                    <Clock className="w-3 h-3" />
                    {egitim.status}
                  </div>
                ) : (
                  <div className="flex flex-col gap-2 mt-auto">
                    {egitim.link && (
                      <a 
                        href={egitim.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-xl text-[10px] font-space font-bold uppercase tracking-widest hover:bg-blue-600 transition-all shadow-md active:scale-95"
                      >
                        {egitim.btnText || 'Git'}
                        <ExternalLink className="w-3 h-3 opacity-50" />
                      </a>
                    )}
                    {egitim.wp && (
                      <a 
                        href={egitim.wp} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-xl text-[10px] font-space font-bold uppercase tracking-widest hover:bg-emerald-500 transition-all shadow-md active:scale-95"
                      >
                        {egitim.link ? 'WhatsApp Grubu' : (egitim.btnText || 'WhatsApp Grubu')}
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== GALERİ ========== */}
      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader icon={Award} label="Arşiv" title="Önceki Etkinliklerden" id="galeri" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gallery.slice(0, 3).map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 relative h-64 md:h-80 bg-slate-100 shadow-sm"
              >
                <img src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-space font-bold uppercase tracking-wide">{item.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div {...fadeUp} className="mt-12 text-center">
            <a 
              href="/gallery" 
              className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-space font-bold uppercase tracking-widest text-xs hover:bg-blue-600 transition-all shadow-lg hover:-translate-y-1"
            >
              Tüm Fotoğrafları Gör
            </a>
          </motion.div>
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
                <span className="text-slate-500"><strong className="text-blue-600 font-space text-xs tracking-wider">E-POSTA:</strong> havacilikcomu2021@gmail.com</span>
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

      {/* ========== KATILIMCI MODAL ========== */}
      {showKatilimcilar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowKatilimcilar(false)}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-3xl w-full max-h-[85vh] overflow-y-auto relative"
            onClick={e => e.stopPropagation()}
          >
            <button onClick={() => setShowKatilimcilar(false)} className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full hover:bg-slate-200 text-slate-600 transition-colors">
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-2xl font-space font-black text-slate-900 uppercase tracking-tight mb-2">Hava Radar Mevzi Gezisi</h3>
            <p className="text-slate-500 text-sm mb-6">Kanun gereği KVKK sebebiyle T.C. Kimlik numaraları gizlenmiştir.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-space font-bold text-blue-600 uppercase tracking-widest mb-4 border-b border-slate-200 pb-2 flex items-center justify-between">
                  <span>Asil Liste</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{radarKatilimcilar.length} Kişi</span>
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-700 font-medium h-[40vh] md:h-auto overflow-y-auto pr-2 custom-scrollbar">
                  {radarKatilimcilar.map((kisi, i) => (
                    <li key={i} className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-100">
                      <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)] shrink-0" />
                      {kisi}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 md:mt-0">
                <h4 className="text-sm font-space font-bold text-orange-600 uppercase tracking-widest mb-4 border-b border-slate-200 pb-2 flex items-center justify-between">
                  <span>Ek - Asil Liste</span>
                  <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">{radarEkKatilimcilar.length} Kişi</span>
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-700 font-medium h-[40vh] md:h-auto overflow-y-auto pr-2 custom-scrollbar">
                  {radarEkKatilimcilar.map((kisi, i) => (
                    <li key={i} className="flex items-center gap-3 p-2 hover:bg-orange-50/50 rounded-lg transition-colors border border-transparent hover:border-orange-100/50">
                      <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)] shrink-0" />
                      {kisi}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
              <button onClick={() => setShowKatilimcilar(false)} className="bg-slate-900 text-white px-8 py-3 rounded-xl font-space font-bold text-xs uppercase tracking-widest hover:bg-blue-600 transition-colors cursor-pointer">
                Kapat
              </button>
            </div>
          </motion.div>
        </div>
      )}

    </div>
  )
}
