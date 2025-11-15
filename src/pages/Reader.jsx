import { useState } from 'react'

export default function Reader() {
  const [fontSize, setFontSize] = useState(18)
  const sample = `Chapter 1\n\nIt was a bright cold day in April, and the clocks were striking thirteen.`

  return (
    <section className="grid lg:grid-cols-[1fr_320px] gap-8">
      <div className="bg-white rounded-lg border p-6 prose max-w-none" style={{ fontSize }}>
        <pre className="whitespace-pre-wrap font-sans leading-relaxed">{sample}</pre>
      </div>
      <aside className="bg-white rounded-lg border p-6 h-fit sticky top-24">
        <h3 className="font-semibold mb-3">Reader Settings</h3>
        <label className="block text-sm text-slate-600 mb-1">Font size</label>
        <input type="range" min="14" max="28" value={fontSize} onChange={e => setFontSize(parseInt(e.target.value))} />
      </aside>
    </section>
  )
}
