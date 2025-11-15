import { useParams } from 'react-router-dom'

export default function Checkout() {
  const { id } = useParams()
  return (
    <section className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <p className="mb-6 text-slate-600">Book id: {id}</p>
      <button className="w-full rounded-md bg-blue-600 text-white py-2">Pay with Razorpay (Phase 2)</button>
    </section>
  )
}
