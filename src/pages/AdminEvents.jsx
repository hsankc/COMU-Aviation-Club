import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'
import { Plus, Trash2, Edit } from 'lucide-react'

export default function AdminEvents() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    setLoading(true)
    const { data, error } = await supabase.from('events').select('*').order('date', { ascending: false })
    if (data) setEvents(data)
    setLoading(false)
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-space font-black text-slate-900 uppercase tracking-tight">Etkinlikler</h2>
          <p className="text-slate-500 mt-1">Ana sayfadaki yaklaşan etkinlikler listesi.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-space font-bold text-sm uppercase tracking-wider flex items-center gap-2 transition-colors">
          <Plus className="w-4 h-4" /> Yeni Ekle
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="p-4 font-space font-bold text-slate-500 text-xs uppercase tracking-wider">Etkinlik Adı</th>
              <th className="p-4 font-space font-bold text-slate-500 text-xs uppercase tracking-wider">Tarih</th>
              <th className="p-4 font-space font-bold text-slate-500 text-xs uppercase tracking-wider">Etiket</th>
              <th className="p-4 font-space font-bold text-slate-500 text-xs uppercase tracking-wider text-right">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan="4" className="p-8 text-center text-slate-500">Yükleniyor... (Eğer uzun sürerse Supabase ayarlarınızı kontrol edin)</td></tr>
            ) : events.length === 0 ? (
              <tr><td colSpan="4" className="p-8 text-center text-slate-500">Henüz etkinlik bulunmuyor veya veritabanı boş.</td></tr>
            ) : (
              events.map((ev, i) => (
                <tr key={ev.id || i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium text-slate-900">{ev.title}</td>
                  <td className="p-4 text-slate-600 text-sm">{ev.date}</td>
                  <td className="p-4"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">{ev.tag}</span></td>
                  <td className="p-4 text-right">
                    <button className="text-slate-400 hover:text-blue-600 p-2 transition-colors"><Edit className="w-4 h-4" /></button>
                    <button className="text-slate-400 hover:text-red-600 p-2 transition-colors ml-2"><Trash2 className="w-4 h-4" /></button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
