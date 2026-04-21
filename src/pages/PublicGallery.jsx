import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

const fallbackGaleri = [
  { "title": "Drone Eğitimi", "image": "/gallery/drone-egitimi-1.jpeg" },
  { "title": "Drone Eğitimi", "image": "/gallery/drone-egitimi-2.jpeg" },
  { "title": "Drone Eğitimi", "image": "/gallery/drone-egitimi-3.jpeg" },
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

export default function PublicGallery() {
  const [gallery, setGallery] = useState(fallbackGaleri)
  const [visibleCount, setVisibleCount] = useState(8)

  useEffect(() => {
    window.scrollTo(0, 0)
    const fetchGallery = async () => {
      try {
        const { data } = await supabase.from('gallery').select('*').order('created_at', { ascending: false })
        if (data && data.length > 0) {
          setGallery(data.map(g => ({ title: g.title, image: g.image_url })))
        }
      } catch (err) {
        console.error("Gallery fetch error:", err)
      }
    }
    fetchGallery()
  }, [])

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 8)
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-inter">
      <Header />
      
      <main className="flex-grow pt-32 pb-24 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-12 border-b border-slate-100 pb-8">
            <a href="/" className="p-3 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors text-slate-600">
              <ArrowLeft className="w-5 h-5" />
            </a>
            <div>
              <p className="text-orange-500 text-[10px] font-space font-bold uppercase tracking-[0.4em] mb-1">Kulüp Arşivi</p>
              <h1 className="text-3xl md:text-5xl font-space font-black text-slate-900 uppercase tracking-tight">Tüm Galeri</h1>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {gallery.slice(0, visibleCount).map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (idx % 8) * 0.05 }}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 relative h-60 bg-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <img src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 bg-slate-200" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-space font-bold uppercase tracking-wide">{item.title}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {visibleCount < gallery.length && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-16 flex justify-center"
            >
              <button 
                onClick={handleLoadMore}
                className="bg-slate-900 text-white hover:bg-blue-600 transition-colors font-space font-bold uppercase tracking-widest text-xs px-10 py-4 rounded-xl shadow-lg shadow-black/10 hover:-translate-y-1"
              >
                Daha Fazla Fotoğraf Yükle
              </button>
            </motion.div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  )
}
