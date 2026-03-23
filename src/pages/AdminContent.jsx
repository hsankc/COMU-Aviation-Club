import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'
import { Save } from 'lucide-react'

export default function AdminContent() {
  const [misyon, setMisyon] = useState('')
  const [vizyon, setVizyon] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchContent()
  }, [])

  const fetchContent = async () => {
    setLoading(true)
    const { data } = await supabase.from('site_content').select('*')
    if (data) {
      const m = data.find(c => c.section_key === 'misyon')
      const v = data.find(c => c.section_key === 'vizyon')
      if (m) setMisyon(m.content)
      if (v) setVizyon(v.content)
    }
    setLoading(false)
  }

  const handleSave = async (key, content) => {
    setSaving(true)
    await supabase.from('site_content').upsert({ section_key: key, content }, { onConflict: 'section_key' })
    setSaving(false)
    alert('Başarıyla kaydedildi!')
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-space font-black text-slate-900 uppercase tracking-tight mb-8">İçerik Yönetimi</h2>
      
      {loading ? (
        <p className="text-slate-500">Yükleniyor...</p>
      ) : (
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="text-lg font-space font-bold uppercase tracking-wider mb-4">Misyonumuz</h3>
            <textarea 
              value={misyon}
              onChange={e => setMisyon(e.target.value)}
              className="w-full h-40 border border-slate-300 rounded-lg p-4 mb-4 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
            <button onClick={() => handleSave('misyon', misyon)} disabled={saving} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-space font-bold text-sm uppercase tracking-wider flex items-center gap-2">
              <Save className="w-4 h-4" /> {saving ? 'Kaydediliyor...' : 'Kaydet'}
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="text-lg font-space font-bold uppercase tracking-wider mb-4">Vizyonumuz</h3>
            <textarea 
              value={vizyon}
              onChange={e => setVizyon(e.target.value)}
              className="w-full h-40 border border-slate-300 rounded-lg p-4 mb-4 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
            <button onClick={() => handleSave('vizyon', vizyon)} disabled={saving} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-space font-bold text-sm uppercase tracking-wider flex items-center gap-2">
              <Save className="w-4 h-4" /> {saving ? 'Kaydediliyor...' : 'Kaydet'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
