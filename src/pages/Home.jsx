import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BookOpen, Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Your next favorite book, beautifully delivered
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Explore, purchase, and read ebooks in a delightful, distraction-free experience.
          </p>
          <div className="mt-8 flex gap-3">
            <Link to="/browse" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700">
              <BookOpen size={18} /> Browse ebooks
            </Link>
            <Link to="/register" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-300 text-slate-700 hover:border-slate-400">
              <Sparkles size={18} /> Get started
            </Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
          <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 shadow-inner" />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-blue-200 blur-2xl opacity-70" />
        </motion.div>
      </div>
    </section>
  )
}
