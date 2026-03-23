import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'
import { Plus, Trash2, Image } from 'lucide-react'

export default function AdminGallery() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    setLoading(true)
    const { data } = await supabase.from('gallery').select('*').order('created_at', { ascending: false })
    if (data) setItems(data)
    setLoading(false)
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-space font-black text-slate-900 uppercase tracking-tight">Galeri</h2>
          <p className="text-slate-500 mt-1">Ana sayfadaki galeri/arşiv bölümü.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-space font-bold text-sm uppercase tracking-wider flex items-center gap-2 transition-colors">
          <Plus className="w-4 h-4" /> URL ile Ekle
        </button>
      </div>

      {loading ? (
        <p className="text-slate-500">Yükleniyor...</p>
      ) : items.length === 0 ? (
        <div className="bg-white border flex flex-col items-center justify-center border-slate-200 rounded-xl p-16 text-center">
          <Image className="w-16 h-16 text-slate-300 mb-4" />
          <p className="text-slate-500">Galeri boş. Yeni medya ekleyebilirsiniz.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <div key={item.id || i} className="bg-white border border-slate-200 rounded-xl p-2 relative group">
              <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden relative">
                <img src={item.image_url} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <p className="text-xs text-center font-space mt-2 tracking-wider uppercase truncate">{item.title || 'İsimsiz'}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
