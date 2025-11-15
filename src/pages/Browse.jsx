import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Browse() {
  const [loading] = useState(false)
  const [ebooks] = useState([
    { id: 'demo-1', title: 'Designing Interfaces', author: 'Jenifer Tidwell', price: 499, cover_url: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=640&auto=format&fit=crop' },
    { id: 'demo-2', title: 'Clean Code', author: 'Robert C. Martin', price: 399, cover_url: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=640&auto=format&fit=crop' },
    { id: 'demo-3', title: 'The Pragmatic Programmer', author: 'Andrew Hunt', price: 449, cover_url: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=640&auto=format&fit=crop' },
  ])

  useEffect(() => {
    // Phase 2 will fetch from backend
  }, [])

  return (
    <section>
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Browse ebooks</h2>
          <p className="text-slate-600">Hand-picked titles to get you started</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading && <p>Loading…</p>}
        {!loading && ebooks.map((b, i) => (
          <motion.div key={b.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="rounded-lg border overflow-hidden bg-white hover:shadow-lg transition-shadow">
            <Link to={`/book/${b.id}`}>
              <div className="aspect-[4/3] bg-slate-100" style={{ backgroundImage: `url(${b.cover_url})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="p-4">
                <h3 className="font-semibold line-clamp-1">{b.title}</h3>
                <p className="text-sm text-slate-600 line-clamp-1">{b.author}</p>
                <p className="mt-2 font-medium">₹{b.price}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
