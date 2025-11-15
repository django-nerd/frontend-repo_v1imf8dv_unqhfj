import { Link, useParams } from 'react-router-dom'

export default function BookDetail() {
  const { id } = useParams()
  const book = { id, title: 'Demo Title', author: 'Unknown', description: 'A captivating read about building great software.', price: 399 }

  return (
    <section className="grid md:grid-cols-2 gap-8">
      <div className="aspect-[4/3] rounded-lg bg-slate-100" />
      <div>
        <h1 className="text-3xl font-bold">{book.title}</h1>
        <p className="text-slate-600">by {book.author}</p>
        <p className="mt-4">{book.description}</p>
        <div className="mt-6 flex items-center gap-4">
          <span className="text-2xl font-semibold">₹{book.price}</span>
          <Link to={`/checkout/${book.id}`} className="px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700">Buy now</Link>
        </div>
      </div>
    </section>
  )
}
