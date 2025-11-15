import { useState } from 'react'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    alert('Registration will be wired in Phase 2')
  }

  return (
    <section className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">Create your account</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-slate-700">Full name</label>
          <input value={name} onChange={e=>setName(e.target.value)} required className="mt-1 w-full rounded-md border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm text-slate-700">Email</label>
          <input value={email} onChange={e=>setEmail(e.target.value)} type="email" required className="mt-1 w-full rounded-md border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm text-slate-700">Password</label>
          <input value={password} onChange={e=>setPassword(e.target.value)} type="password" required className="mt-1 w-full rounded-md border px-3 py-2" />
        </div>
        <button className="w-full rounded-md bg-blue-600 text-white py-2">Create account</button>
      </form>
    </section>
  )
}
